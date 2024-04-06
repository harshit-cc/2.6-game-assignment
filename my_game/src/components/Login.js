import { useContext } from "react";
import Button from "./Button";
import Input from "./Input";
import ctxObj from "../context/ContextProvider";


export default function Login(){
    const obj = useContext(ctxObj);
    const doLogin = () => obj.setLogin(true);
    return(
        <>
        <Input hint="Username"  />
        <Input hint="Password"  />
        <hr />
        <Button buttonText="Login" clickHandler={doLogin} />
        </>
    )
}