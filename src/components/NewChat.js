import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./NewChat.css";
import Api from "../Api";

export default ({ chatList, user, show, setShow }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let result = await Api.getContactList(user.id);
        setList(result);
      }
    };
    getList();
  }, [user]);

  const addNewChat = async (destinatary) => {
    await Api.addNewChat(user, destinatary);

    handleClose();
  };

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
          <div
            onClick={() => addNewChat(item)}
            className="newChat-item"
            key={key}
          >
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
