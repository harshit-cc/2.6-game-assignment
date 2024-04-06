import {NavLink, Outlet} from 'react-router-dom';
import Header from './Header';

export default function NavBar(){
    return (
        <>
      <Header />
    <NavLink to="/">Home</NavLink>
    <label> | </label>
    <NavLink to="/aboutus">About us</NavLink>
    <label> | </label>
    <NavLink to="/contact">Contact</NavLink>
    <label> | </label>
    <NavLink to="/game">Game</NavLink>
    <label> | </label>
    <NavLink to="/login">Login</NavLink>
    <label> | </label>
    <NavLink to="/logout">Logout</NavLink>
    <Outlet />
    </>);
}