import './App.css';
import Container from './components/Container';
import Share from './components/Share';
import { useState } from 'react';

function App() {
  const [isActive,setIsActive] = useState(false);
  const handleClick = ()=> {
    setIsActive(!isActive);
  }
  
  return (
    <main>
    <Container handleClick={handleClick} isActive={isActive}/>
    {isActive ? <Share/> : null}
    </main>
  );
}

export default App;
