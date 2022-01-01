import { Link } from "react-router-dom";
import Images from "../constants/images";

const Header = () => {
  return (
    <header className="header-main">
      <div className="header-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header-logo">
            <div className="header-img">
              <img src={Images.LOGO} alt="logo" />
            </div>
            Doggy Stickers
          </div>
        </Link>

        <div className="header-cart">
          <ion-icon name="cart"></ion-icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
