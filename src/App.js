import React, { useState, useEffect } from "react";
import "./App.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

export default () => {
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      title: "Gabriel leandro",
      image: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      chatId: 2,
      title: "Pedro da Silva",
      image: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      chatId: 3,
      title: "Adalberto Santos",
      image: "https://www.w3schools.com/howto/img_avatar2.png",
    },
    {
      chatId: 4,
      title: "Ana júlia",
      image: "https://www.w3schools.com/howto/img_avatar2.png",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 133,
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    name: "Gabriel",
  });

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header-avatar" src={user.avatar} alt="user-avatar" />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou iniciar uma nova conversa"
            />
          </div>
        </div>

        <div className="chat-list">
          {chatList.map((chat, key) => (
            <ChatListItem
              key={key}
              data={chat}
              active={activeChat.chatId === chat.chatId}
              onClick={() => setActiveChat(chat)}
            />
          ))}
        </div>
      </div>
      <div className="content-area">
        {activeChat.chatId ? <ChatWindow user={user} /> : <ChatIntro />}
      </div>
    </div>
  );
};
