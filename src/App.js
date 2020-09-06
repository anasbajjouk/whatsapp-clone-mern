import React from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
