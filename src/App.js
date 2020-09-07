import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import SideBar from "./components/sideBar/SideBar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => setMessages(response.data));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("9667449f8d9edfb9e7ef", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
