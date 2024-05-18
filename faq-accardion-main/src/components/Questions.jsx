import plusIcon from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import Answers from '../components/Answers';
import { useState} from 'react';
import Answer from '../components/Answer';
export default function Questions() {
    const [isActive,SetIsActive] = useState(false);
  function HandleClick(key) {
    SetSelectedId(key);
    SetIsActive(!isActive);
};
const [selectedId,SetSelectedId] = useState(null);
    return (
        <div className="questions">
        <div className="question q1">
          <div className="title" onClick={()=>{HandleClick(Answer[0].id)}}>
          <h3>What is Frontend Mentor, and how will it help me?</h3>
          <div className="icon">
            <img src={(isActive && selectedId===Answer[0].id) ? iconMinus : plusIcon} alt="" /></div>
          </div>
          {(isActive && selectedId===Answer[0].id) ? <Answers desc={Answer[0].desc}/> : null}
        </div>
        <div className="question q2">
          <div className="title" onClick={()=>{HandleClick(Answer[1].id)}}>
          <h3>Is Frontend Mentor free?</h3>
          <div className="icon"><img src={(isActive && selectedId===Answer[1].id) ? iconMinus : plusIcon} alt="" /></div>
          </div>
          {(isActive && selectedId===Answer[1].id) ? <Answers desc={Answer[1].desc}/> : null}
        </div>
        <div className="question q3">
          <div className="title" onClick={()=>{HandleClick(Answer[2].id)}}>
          <h3>Can I use Frontend Mentor projects in my portfolio?</h3>
          <div className="icon">
            <img src={(isActive && selectedId===Answer[2].id) ? iconMinus : plusIcon} alt="" />
          </div>
          </div>
          {(isActive && selectedId===Answer[2].id) ? <Answers desc={Answer[2].desc}/> : null} 
        </div>
        <div className="question q4">
          <div className="title" onClick={()=>{HandleClick(Answer[3].id)}}>
          <h3>How can I get help if I'm stuck on a challenge?
          </h3>
          <div className="icon">
            <img src={(isActive && selectedId===Answer[3].id) ? iconMinus : plusIcon} alt="" />
          </div>
          </div>
          {(isActive && selectedId===Answer[3].id) ? <Answers desc={Answer[3].desc}/> : null} 
        </div>
      </div>
    );
} 