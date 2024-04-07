import { useContext } from "react";
import ctxObj from "../context/ContextProvider";
import { Link } from "react-router-dom";

export default function Welcome() {
  const obj = useContext(ctxObj);
  return (
    <>
      <div>Welcome to the game app</div>
      <br/>
      {!obj.isLoggedin && <Link to='/login'>Click here to login</Link>}
    </>
  );
}
