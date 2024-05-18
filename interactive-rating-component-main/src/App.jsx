import Container from './components/Container';
import Result from './components/Result';
import './App.css';
import { useState } from 'react';
function App() {
  const [ratings,setRatings] = useState(false);
  const [selectedInput,setSelectedInput] = useState();
  function handleSelect(e) {
    setSelectedInput(e.target.value);
  }
 
  function handleRatingsOnSubmit() {
    setRatings(true);
  }
  return (
    <>
    {ratings ? (<Result selectedInput={selectedInput}/>) : (<Container onClickRate={handleRatingsOnSubmit} handleSelect={handleSelect} selectedValue={selectedInput}/>)}
    </>
  );
}

export default App;
