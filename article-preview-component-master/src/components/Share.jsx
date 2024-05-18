import faceIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import './share.css';
export default function Share() {
    return (
        <div className="share">
      <p>S H A R E</p>
      <img src={faceIcon} alt="" />
      <img src={twitterIcon} alt="" />
      <img src={pinterestIcon} alt="" />
    </div>
    );
}