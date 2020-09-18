import React from "react";
import Api from "../Api";
import "./Login.css";

export default ({ onReceive }) => {
  const handleGoogleLogin = async () => {
    try {
      let result = await Api.ggPopup();
      onReceive(result?.user);
    } catch (error) {
      alert("Erro");
    }
  };
  return (
    <div className="login">
      <img
        style={{ width: "180px", height: "180px" }}
        src="https://i.pinimg.com/736x/93/b2/65/93b265c795140247db600ac92e58746a.jpg"
        alt="icon-whats"
      ></img>
      <h1 className="login-text">Bem vindo ao projeto whatsapp-clone</h1>
      <button className="login-button" onClick={handleGoogleLogin}>
        Logar com Google
      </button>
    </div>
  );
};
