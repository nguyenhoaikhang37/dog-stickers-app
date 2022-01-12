import { Avatar, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Images from "../constants/images";
import { cartState } from "../stores/Cart";
import { userState } from "../stores/User";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const navigate = useNavigate();

  const cart = useRecoilValue(cartState);
  const [user, setUser] = useRecoilState(userState);

  const logout = () => {
    setUser((prev) => ({ ...prev, loginStatus: false }));
    navigate("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="3">
        <span className="avarta-icon" onClick={logout}>
          <ion-icon name="log-out"></ion-icon> Log out
        </span>
      </Menu.Item>
    </Menu>
  );

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
            <Dropdown overlay={menu} trigger={["click"]}>
              <div className="avarta" onClick={(e) => e.preventDefault()}>
                <Avatar src={<Image src={user.img} style={{ width: 32 }} />} />
                {user.name}
              </div>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
