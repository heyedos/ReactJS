import image from '../assets/images/drawers.jpg';
import profileImg from '../assets/images/avatar-michelle.jpg';
export default function Container({handleClick,isActive}) {
    return (
        <div className="container">
      <div className="left">
        <img src={image} alt="" />
        </div>
      <div className="right">
        <h2 className="title">
        Shift the overall look and feel by adding these wonderful 
  touches to furniture in your home
        </h2>
        <p className="desc">
        Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
        </p>
        <div className="bottom">
          <div className="profile">
            <img src={profileImg} alt="" />
            <ul>
              <li><b>Michelle Appleton</b></li>
              <li>28 Jun 2020</li>
            </ul>
          </div>
          <div className={isActive ? 'share-icon active' : 'share-icon'} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path className={isActive ? 'share-icon active' : 'share-icon'} fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
          </div>
        </div>
      </div>
    </div>
    );
}