import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import ctxObj from "../context/ContextProvider";
import Header from "../components/Header"

export default function NavBar() {
  const obj = useContext(ctxObj);
  const style = ({ isActive }) => (isActive ? { fontWeight: "bold" } : {});
  return (
    <>
        <Header />
      <NavLink to="/" style={style}>
        Home
      </NavLink>
      <label> | </label>
      <NavLink to="/aboutus" style={style}>
        About us
      </NavLink>
      <label> | </label>
      <NavLink to="/contact" style={style}>
        Contact
      </NavLink>

      {obj.isLoggedin && (
        <>
          <label> | </label>
          <NavLink to="/game" style={style}>
            Game
          </NavLink>
        </>
      )}
      {!obj.isLoggedin && (
        <>
          <label> | </label>
          <NavLink to="/login" style={style}>
            Login
          </NavLink>
        </>
      )}
      {obj.isLoggedin && (
        <>
          <label> | </label>
          <NavLink to="/logout" style={style}>
            Logout
          </NavLink>
        </>
      )}
      <hr />

      <Outlet />
    </>
  );
}
