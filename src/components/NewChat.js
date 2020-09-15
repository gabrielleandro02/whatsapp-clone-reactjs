import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./NewChat.css";

export default ({ chatList, user, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Gabriel Leandro",
    },
    {
      id: 132,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Pedro de Carlos",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat-head">
        <div onClick={handleClose} className="newChat-backbutton">
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat-headtitle">Nova conversa</div>
      </div>
      <div className="newChat-list">
        {list.map((item, key) => (
          <div className="newChat-item" key={key}>
            <img
              className="newChat-itemavatar"
              src={item.avatar}
              alt="new-contact-avatar"
            />
            <div className="newChat-itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
