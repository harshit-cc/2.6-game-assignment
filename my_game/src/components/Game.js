import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

function Game() {
  const [nNumber, setNumber] = useState(Math.floor(Math.random() * 21));
  const [nAnswer, setAnswer] = useState("");
  const [msg, setMsg] = useState("");
  let checkAns = () => {
    if (nAnswer > 20 || nAnswer < 0)
      setMsg("Invalid input, enter a number between 0 & 20");
    else if (nAnswer > nNumber) setMsg("Number is too big..");
    else if (nAnswer < nNumber) setMsg("Number is too small..");
    else if (nAnswer === nNumber) {
      document.querySelector("button[value='Check answer']").disabled = true;
      setMsg(`Your guess is correct.. correct number is ${nNumber}`);
    }
  };

  let resetGame = () => {
    setNumber(Math.floor(Math.random() * 21));
    setAnswer("");
    setMsg("");
    document.querySelector("button[value='Check answer']").disabled = false;
  };

  return (
    <>
      <h1>Please guess a number between 1-20</h1>
      <label>Guess a number</label>
      <Input hint="Enter a number" nAnswer={nAnswer} setAnswer={setAnswer} />
      <hr />
      <Button buttonText="Check answer" clickHandler={checkAns} />
      <Button buttonText="New game" clickHandler={resetGame} />
      <hr />
      <h1>{msg}</h1>
    </>
  );
}

export default Game;
