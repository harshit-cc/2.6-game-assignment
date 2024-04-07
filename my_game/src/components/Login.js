import { useContext } from "react";
import Button from "./Button";
import ctxObj from "../context/ContextProvider";
import { Link } from "react-router-dom";

export default function Login() {
  const obj = useContext(ctxObj);
  const doLogin = () => {
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    if (!user || !pwd) alert("Enter a username and password");
    else obj.setLogin(true);
  };
  return (
    <div>
      <hr />
      {!obj.isLoggedin && (
        <>
          <label>Enter Username: </label>
          <input id="user" type="text" placeholer="Username" />
          <br />
          <label>Enter Password: </label>
          <input id="pwd" type="password" placeholer="Password" />
          <hr />
          <Button buttonText="Login" clickHandler={doLogin} />
        </>
      )}

      {obj.isLoggedin && (
        <>
          <h1>You have logged in, welcome to the game app</h1>
          <br />
          <Link to="/game">Click here to play the game</Link>
        </>
      )}
      <hr />
    </div>
  );
}
