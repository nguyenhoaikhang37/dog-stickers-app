import { Empty } from "antd";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../../stores/Cart";
import CartList from "./UI/CartList";

const Cart = () => {
  const cart = useRecoilValue(cartState);
  const navigate = useNavigate();
  const setCarts = useSetRecoilState(cartState);

  const handleCheckout = () => {
    toast.success("You have successfully paid! 🎉🎉🎉");
    navigate("/");
    setCarts([]);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-heading">Your Cart</div>
      <table className="table">
        <tr className="cart-titles">
          <th className="cart-title">PRODUCT</th>
          <th className="cart-title">QUANTITY</th>
          <th className="cart-title">PRICE</th>
          <th className="cart-title">REMOVE</th>
        </tr>
        {cart.length !== 0 && <CartList />}
      </table>
      {cart.length === 0 && (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Products" />
      )}
      <div className="cart-btns">
        {cart.length > 0 && (
          <div onClick={handleCheckout} className="detail-submit">
            Check Out
            <ion-icon name="arrow-forward"></ion-icon>
          </div>
        )}

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="detail-btn">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <div>Back To All Product</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
