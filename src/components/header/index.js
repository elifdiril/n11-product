import n11Logo from "../../assets/n11.svg";
import "./header.css";
import cart from "../../assets/cart.png";
import notification from "../../assets/notification.png";

function Header() {
  return (
    <div className="header-div">
      <a href="#">
        <img src={n11Logo} alt="n11 Logo" />
      </a>
      <input
        type="text"
        id="searchData"
        maxLength={100}
        autoComplete="off"
        defaultValue="İş Tulumu Bahçıvan Tip Askılı"
        readOnly
      ></input>
      <div className="icons">
        <a href="#">
          <img src={notification} alt="notification" />
        </a>
        <a href="#">
          <img src={cart} alt="cart" />
        </a>
      </div>
    </div>
  );
}

export default Header;
