export default function Input({ hint, nAnswer,setAnswer }) {
    const changeHandler = (e) => {
        setAnswer(Number(e.target.value));
    }
  return (
    <>
      <input type="number" value={nAnswer} placeholder={hint} onChange={changeHandler}/>
    </>
  );
}
