import errorImg from '../assets/images/icon-error.svg';
export default function Error({message}) {
    return (
        <div className="div-error">
            <p className='error'>{message}</p>
            <img className='errorImg' src={errorImg} alt="" />
        </div>
    );
}