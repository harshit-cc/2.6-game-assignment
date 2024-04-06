import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import {ContextProvider} from "./context/ContextProvider";
import Game from "./components/Game";
import Aboutus from "./Pages/Aboutus";
import Contact from "./Pages/Contact";
import Login from "./components/Login";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contact" element={<Contact />} />
            <Route path="game" element={<Game />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
export default App;
