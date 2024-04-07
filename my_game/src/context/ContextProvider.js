import { createContext, useState } from "react";

const ctxObj = createContext({ isLoggedin: false, setLogin: () =>{}});

export function ContextProvider({ children }) {
  const [isLoggedin, setLogin] = useState(false);
  const globalObj = { isLoggedin: isLoggedin, setLogin: setLogin };

  return <ctxObj.Provider value={globalObj}>{children} </ctxObj.Provider>;
}
export default  ctxObj;