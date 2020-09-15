import React from "react";
import Api from "../Api";
import "./Login.css";

export default ({ onReceive }) => {
  const handleGoogleLogin = async () => {
    try {
      let result = await Api.ggPopup();
      onReceive(result.user);
    } catch (error) {
      alert("Erro");
    }
  };
  return (
    <div className="login">
      <button onClick={handleGoogleLogin}>Logar com Google</button>
    </div>
  );
};
