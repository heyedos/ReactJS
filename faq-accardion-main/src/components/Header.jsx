import starIcon from '../assets/images/icon-star.svg';
export default function Header() {
    return (
        <header>
            <div className="top">
        <div className="star-icon">
          <img src={starIcon} alt="" />
        </div>
        <h1>FAQs</h1>
      </div>
        </header>
    );
}