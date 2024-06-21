import './App.css';
import Profile from './components/Profile';
import Card from "./components/Card";
import data from "./data.json";
import Work from "./assets/images/icon-work.svg";
import Play from "./assets/images/icon-play.svg";
import Study from "./assets/images/icon-study.svg";
import Exercise from "./assets/images/icon-exercise.svg";
import Social from "./assets/images/icon-social.svg";
import SelfCare from "./assets/images/icon-self-care.svg";
import { useState } from "react";

function App() {
  const ImageString = [Work,Play,Study,Exercise,Social,SelfCare];
  const [isDaily,setIsDaily] = useState(true);
  const [isWeekly,setIsWeekly] = useState(Boolean);
  const [isMonthly,setIsMonthly] = useState(Boolean);
  function activeDaily():void {
    setIsDaily(true);
    setIsMonthly(false);
    setIsWeekly(false);
  }
  function activeWeekly():void {
    setIsDaily(false);
    setIsMonthly(false);
    setIsWeekly(true);
  }
  function activeMonthly():void {
    setIsDaily(false);
    setIsMonthly(true);
    setIsWeekly(false);
  }
  return (
    <div className="min-h-screen bg-VDblue flex justify-center items-center">
      <div className="container grid grid-cols-4 grid-rows-2 gap-8 w-[70vw] h-[60vh]">
        <Profile activeDaily={activeDaily} activeWeekly={activeWeekly} activeMonthly={activeMonthly}/>
        {(isDaily===true) && data.map((item,index)=><Card 
        key={index}
        title={item.title} 
        hour={item.timeframes.daily.current}
        lastHour={item.timeframes.daily.previous} 
        Images={ImageString[index]}
        />)}
        {(isWeekly===true) && data.map((item,index)=><Card 
        key={index}
        title={item.title} 
        hour={item.timeframes.weekly.current}
        lastHour={item.timeframes.weekly.previous} 
        Images={ImageString[index]}
        />)}
        {(isMonthly===true) && data.map((item,index)=><Card 
        key={index}
        title={item.title} 
        hour={item.timeframes.monthly.current}
        lastHour={item.timeframes.monthly.previous} 
        Images={ImageString[index]}
        />)}
      </div>
    </div>
  ); 
}

export default App;
