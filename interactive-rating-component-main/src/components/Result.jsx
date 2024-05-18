import screen from '../assets/images/illustration-thank-you.svg';
export default function Result({selectedInput}) {
    return (
        <div className="container-result">
      <div className="screen-img">
        <img src={screen} alt="" />
      </div>
      <div className="select">
        <p>You selected {selectedInput} out of 5</p>
      </div>
      <div className='text-result'>
      <h1 className='title'>Thank you!</h1>
      <p className='desc'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div>
    );
}