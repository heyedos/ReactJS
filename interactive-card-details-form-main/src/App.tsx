import Form from "./Components/Form";
import Thank from "./Components/Thank";
import Card from "./Components/Card";
import { useState } from "react";
import './App.css';

function App() {
  const [isActive,setIsActive] = useState(false);
  const [nameInput,setNameInput] = useState(String);
  const [numberInput,setNumberInput] = useState(String);
  const [monthInput,setMonthInput] = useState(String);
  const [YearInput,setYearInput] = useState(String);
  const [cvcInput,setCvcInput] = useState(String);
  
  function handleName(e:any):void {
    setNameInput(e.target.value);
  }
  function handleNumber(e:any):void {
    setNumberInput(e.target.value);
  }
  function handleMonth(e:any):void {
    setMonthInput(e.target.value);
  }
  function handleYear(e:any):void {
    setYearInput(e.target.value);
  }
  function handleCvc(e:any):void {
    setCvcInput(e.target.value);
  }

  function handleClick():void {
    setIsActive(!isActive);
  }
  return (
    <div className="min-h-screen flex items-center w-screen bg-mainbg bg-no-repeat gap-48 justify-center">
      <Card nameInput={nameInput} numberInput={numberInput} monthInput={monthInput} YearInput={YearInput} cvcInput={cvcInput}/>
      <div>
        {isActive ? <Thank onClick={handleClick}/> : <Form handleName={handleName} handleNumber={handleNumber} handleMonth={handleMonth} handleYear={handleYear} handleCvc={handleCvc} nameInput={nameInput} numberInput={numberInput} monthInput={monthInput} YearInput={YearInput} cvcInput={cvcInput} handleClick={handleClick}/>}
      </div>
    </div>
  );
}

export default App;
