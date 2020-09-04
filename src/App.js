import React from "react";
import "./App.css";
import Chat from "./components/chat/Chat";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Chat />
    </div>
  );
}

export default App;
