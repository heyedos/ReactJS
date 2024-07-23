import { useEffect, useState } from 'react';
import divideImg from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import './App.css';

interface Advice {
  id: string;
  text: string;
}

function App() {
  const [isClicked,setIsClicked] = useState<boolean>(false);
  const [advice,setAdvice] = useState<Advice>({id:'',text:''});
  const handleClick = ()=>{
    setIsClicked(!isClicked);
  }
  const fetchAdvice = async()=>{
    const response = await fetch("https://api.adviceslip.com/advice");
    const resData = await response.json();
    setAdvice({id: resData.slip.id, text: resData.slip.advice});
  }
  useEffect(()=>{
    fetchAdvice();
  },[isClicked]);
  return (
    <div className="App w-screen h-screen flex items-center justify-center bg-gray-800">
      <div className=' flex flex-col items-center  w-96 text-center bg-slate-700 pt-4 px-4 rounded-lg relative'>
      <p className=' text-green-500'>{"ADVICE #"+advice.id}</p>
      <p className='text-white font-semibold mt-3'>{advice.text}</p>
      <img src={divideImg} alt="" className='mt-6' />
      <button onClick={handleClick} className='bg-green-400 w-10 h-10 rounded-full flex flex-col items-center justify-center relative top-5'><img src={dice} alt="" className='w-4' /></button>
      </div>
    </div>
  );
}

export default App;
