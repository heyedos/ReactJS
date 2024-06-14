import { useState } from "react";
interface FormProps {
  handleName: (e:any)=> void;
  handleCvc: (e:any)=> void;
  handleYear: (e:any)=> void;
  handleMonth: (e:any)=> void;
  handleNumber: (e:any)=> void;
  handleClick: ()=> void;
  nameInput: string;
  numberInput: string; 
  monthInput: string; 
  YearInput: string; 
  cvcInput: string;
}

const Form = ({handleName,handleNumber,handleCvc,handleMonth,handleYear,nameInput,numberInput,monthInput,YearInput,cvcInput,handleClick}:FormProps)=> {
  const [nameError,setNameError] = useState<boolean | null>(null);
  const [numberError,setNumberError] = useState<boolean | null>(null);
  const [dateError,setDateError] = useState<boolean | null>(null);
  const [cvcError,setCvcError] = useState<boolean | null>(null);
  const [validNumberError,setvalidNumberError] = useState<boolean | null>(null);
  const [isHover,setIsHover] = useState<boolean | null>(null);
  function handleSubmit():void {
    const regex = /^[0-9]*$/;
    const validNumber = regex.test(numberInput);
    setvalidNumberError(!validNumber);
    if (nameInput.length===0)
      {
        setNameError(false);
      } else {
        setNameError(true);
      }
    if (numberInput.length===0)
      {
        setNumberError(false);
      } else {setNumberError(true);}
    if (monthInput.length===0 || YearInput.length===0)
      {
        setDateError(false);
      } else {setDateError(true);}
    if (cvcInput.length===0)
      {
        setCvcError(false);
        console.log("false");
      } else {setCvcError(true);}
    if (cvcError===true && dateError===true && nameError===true && numberError===true)
      {
        handleClick();
      }
  }
  function hoverButton():void {
    setIsHover(!isHover);
  }
  
    return(
        <div className="Card-Info flex flex-col gap-5 w-96">
          <div className="name flex-col flex gap-2">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input type="name" id="name" placeholder="e.g. Jane Appleseed" className={nameError===false ? "border-Cred" : "border-LightGV"} onChange={handleName}/>
            {(nameError===false) && <p className="text-sm text-Cred">Wrong format, name only</p>}
          </div>
          <div className="card-number flex flex-col gap-2">
            <label htmlFor="number">CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" id="number" className={numberError===false ? "border-Cred" : "border-LightGV"} onChange={handleNumber}/>
            {(numberError===false) && <p className="text-sm text-Cred">Can not be empty</p>}
            {validNumberError && <p className="text-sm text-Cred">Wrong format, numbers only</p>}
          </div>
          <div className="date-cvc flex gap-5">
            <div className="date flex flex-col gap-2">
              <label htmlFor="date">EXP. DATE (MM/YY)</label>
              <div className="flex gap-5">
                <div className="flex flex-col gap-2">
                  <input type="text" id="date" className={"w-24 " + (dateError===false ? "border-Cred" : "border-LightGV")} placeholder="MM" onChange={handleMonth}/>
                  {(dateError===false) && <p className="text-xs text-Cred">Can't be blank</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <input type="text" id="year" className={"w-24 " + (dateError===false ? "border-Cred" : "border-LightGV")} placeholder="YY" onChange={handleYear}/>
                </div>
               </div>
            </div>
            <div className="cvc flex flex-col gap-2">
              <label htmlFor="cvc">CVC</label>
              <input type="text" id="cvc" placeholder="e.g. 123" className={"w-full " + (cvcError===false ? "border-Cred" : "border-LightGV")} onChange={handleCvc}/>
              {(cvcError===false) && <p className="text-xs text-Cred">Can't be blank</p>}
            </div>
          </div>
          <button type="submit" className="bg-VDarkV text-white w-full py-2 rounded-md" onClick={()=>{handleSubmit();}} onMouseEnter={hoverButton} onMouseLeave={hoverButton}>Confirm</button>
          {isHover && <p className="text-sm text-Cred">Hovered Text</p>}
        </div>
    );
}
export default Form;