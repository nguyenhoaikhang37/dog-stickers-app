import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Images from "../constants/images";
import { cartState } from "../stores/Cart";

const Header = () => {
  const cart = useRecoilValue(cartState);

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

        <Link to="/cart">
          <div className="header-cart">
            {cart.length > 0 && (
              <div className="cart-quantity">{cart.length}</div>
            )}
            <ion-icon name="cart"></ion-icon>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
