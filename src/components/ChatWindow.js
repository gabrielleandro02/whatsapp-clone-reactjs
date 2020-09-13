import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import EmojiPicker from "emoji-picker-react";
import MessageItem from "./MessageItem";

import "./ChatWindow.css";

export default ({ user }) => {
  let recognition = null;

  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }

  const body = useRef();

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    { author: 133, body: "Olá Gabriel você é muito bonito" },
    { author: 123, body: "Porque não me responde?" },
    { author: 123, body: "Fala comigo" },
    { author: 133, body: "Olá Gabriel você é muito bonito" },
    { author: 123, body: "Porque não me responde?" },
    { author: 123, body: "Fala comigo" },
    { author: 133, body: "Olá Gabriel você é muito bonito" },
    { author: 123, body: "Porque não me responde?" },
    { author: 123, body: "Fala comigo" },
    { author: 133, body: "Olá Gabriel você é muito bonito" },
    { author: 123, body: "Porque não me responde?" },
    { author: 123, body: "Fala comigo" },
    { author: 133, body: "Olá Gabriel você é muito bonito" },
    { author: 123, body: "Porque não me responde?" },
    { author: 123, body: "Fala comigo" },
    { author: 133, body: "Olá Gabriel você é muito bonito" },
    { author: 123, body: "Porque não me responde?" },
    { author: 123, body: "Fala comigo" },
  ]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleSendClick = () => {};

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerinfo">
          <img
            className="chatWindow-avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="chatWindow-name">Gabriel leandro</div>
        </div>

        <div className="chatWindow-headerbuttons">
          <div className="chatWindow-btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div ref={body} className="chatWindow-body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </div>
      <div
        className="chatWindow-emojiarea"
        style={{ height: emojiOpen ? "200px" : 0 }}
      >
        <EmojiPicker
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={handleEmojiClick}
        />
      </div>
      <div className="chatWindow-footer">
        <div className="chatWindow-pre">
          <div className="chatWindow-pre">
            <div
              onClick={handleCloseEmoji}
              style={{ width: emojiOpen ? "40px" : 0 }}
              className="chatWindow-btn"
            >
              <CloseIcon style={{ color: "#919191" }} />
            </div>
            <div onClick={handleOpenEmoji} className="chatWindow-btn">
              <InsertEmoticonIcon
                style={{ color: emojiOpen ? "#009688" : "#919191" }}
              />
            </div>
          </div>
        </div>
        <div className="chatWindow-inputarea">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="chatWindow-input"
            type="text"
            placeholder="Digite uma mensagem"
          />
        </div>
        <div className="chatWindow-pos">
          {text !== "" ? (
            <div className="chatWindow-btn">
              <SendIcon
                onClick={handleSendClick}
                style={{ color: "#919191" }}
              />
            </div>
          ) : (
            <div className="chatWindow-btn">
              <MicIcon
                onClick={handleMicClick}
                style={{ color: listening ? "#125ece" : "#919191" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
