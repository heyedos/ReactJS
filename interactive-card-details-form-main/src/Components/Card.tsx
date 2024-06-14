import cardLogo from "../assets/images/card-logo.svg";
interface CardProps {
  nameInput: String;
  cvcInput: String;
  numberInput: String;
  monthInput: String;
  YearInput: String;
}
const Card = ({nameInput,cvcInput,numberInput,monthInput,YearInput}:CardProps) => {
    return(
        <div className="Cards flex flex-col gap-7 relative">
        <div className="front-Card flex flex-col bg-card-front bg-no-repeat gap-8 bg-contain w-96 h-52 p-5 px-8 text-white relative justify-between right-20">
          <div className="top flex">
            <img src={cardLogo} alt="" />
            <div className="w-4 h-4 rounded-full border-solid border-white"></div>
          </div>
          <div className="bottom flex flex-col gap-5">
            <h1 className="numbers">{!numberInput ? "0000 0000 0000 0000" : numberInput }</h1>
            <div className="name flex justify-between w-full text-sm">
              {(nameInput.length===0 ? <p>JANE APPLESEED</p> : <p>{nameInput}</p>)}
              {(!monthInput ? <p>00/00</p> : <p>{monthInput}/{YearInput}</p>)}
            </div>
          </div>
        </div>
        <div className="Back-Card bg-card-back bg-contain bg-no-repeat flex items-center justify-end pr-14 pb-1 h-52 text-white tracking-wide">
          <p className="back">
            {!cvcInput ? "000" : cvcInput}
          </p>
        </div>
      </div>
    );
}
export default Card;