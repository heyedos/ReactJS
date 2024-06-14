import ThankImg from "../assets/images/icon-complete.svg";
const Thank = ({onClick}:{onClick: ()=> void}) => {
    return(
        <div className="flex flex-col items-center justify-center gap-8  w-96">
          <div>
          <img src={ThankImg} alt="" className="w-16"/>
          </div>
          <div className="text-center flex flex-col gap-3">
          <h1 className=" tracking-widest text-xl font-medium">THANK YOU!</h1>
          <p className="text-md text-DarkGV">We've added your card details</p>
          </div>
          <button className="bg-VDarkV text-white w-full py-2 rounded-md" onClick={onClick}>Continue</button>
        </div>
    );
}
export default Thank;