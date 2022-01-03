import { Avatar, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Images from "../constants/images";
import { cartState } from "../stores/Cart";
import { userState } from "../stores/User";

const Header = () => {
  const navigate = useNavigate();

  const cart = useRecoilValue(cartState);
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    setUser((prev) => ({ ...prev, loginStatus: false }));
    navigate("/login");
  };

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

        <div className="header-right">
          <Link to="/cart">
            <div className="header-cart">
              {cart.length > 0 && (
                <div className="cart-quantity">{cart.length}</div>
              )}
              <ion-icon name="cart"></ion-icon>
            </div>
          </Link>

          {user.loginStatus && (
            <div className="avarta">
              <Avatar src={<Image src={user.img} style={{ width: 32 }} />} />
              {user.name}
              <span className="avarta-icon" onClick={logout}>
                <ion-icon name="log-out"></ion-icon>
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
