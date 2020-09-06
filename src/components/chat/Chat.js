import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";

const Chat = () => {
  const sendMessage = () => {};
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>

          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Anas</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Anas</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <EmojiEmotionsOutlinedIcon />
        <form action="">
          <input type="text" placeholder="Type a message" />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
};

export default Chat;
