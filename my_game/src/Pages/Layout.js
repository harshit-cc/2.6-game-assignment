import {  Routes, Route, Navigate, Link, HashRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import Game from "../components/Game";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Login from "../components/Login";
import Welcome from "./Welcome";
import { useContext } from "react";
import ctxObj from "../context/ContextProvider";

export default function Layout() {
  const obj = useContext(ctxObj);
  const Logout = () => {
    obj.setLogin(false);
    Navigate({ to: "/" });
  };
  const Default = () => {return (
    <><h1>You have come to wrong page..</h1><br/>
    <Link to="/">Click here to go to HOME page</Link></>)
  };
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Welcome />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contact" element={<Contact />} />
            {obj.isLoggedin && <Route path="game" element={<Game />} />}
            <Route path="login" element={<Login />} />
            {obj.isLoggedin && <Route path="logout" element={<Logout />} />}
          </Route>
          <Route path="*" element={<Default />}/>
        </Routes>
      </HashRouter>
    </>
  );
}
