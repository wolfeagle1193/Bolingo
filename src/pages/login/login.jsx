import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Bolingo</h3>
          <span className="loginDesc">Reste branché partout avec tes amis</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" className="loginInput" />
            <input placeholder="mot de passe" className="loginInput" />
            <button className="loginbutton">Se connecter</button>
            <span className="loginForgot">Mot de passe oublie ?</span>
            <button className="loginRegisterButton">Ouvrir un nouveau compte</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
