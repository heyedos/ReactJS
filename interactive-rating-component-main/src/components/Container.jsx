import star from '../assets/images/icon-star.svg';
import Button from './Button';
export default function Container({onClickRate,handleSelect,selectedValue}) {
    return(
    <div className="container">
      <div className="top">
        <img src={star} alt="" />
      </div>
      <div className='text'>
        <h1 className='title'>How did we do?</h1>
      <p className='desc'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className="ratings">
        <Button value={1} handleSelect={handleSelect} selectedValue={selectedValue}/>
        <Button value={2} handleSelect={handleSelect} selectedValue={selectedValue}/>
        <Button value={3} handleSelect={handleSelect} selectedValue={selectedValue}/>
        <Button value={4} handleSelect={handleSelect} selectedValue={selectedValue}/>
        <Button value={5} handleSelect={handleSelect} selectedValue={selectedValue}/>
      </div>
      <div className="submit" onClick={onClickRate}>
        <button>S U B M I T</button>
      </div>
    </div>
    );
}

