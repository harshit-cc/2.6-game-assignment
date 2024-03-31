
export default function Button({buttonText, clickHandler}){
    return (
        <button value={buttonText} onClick={clickHandler}>{buttonText}</button>
    )
}
