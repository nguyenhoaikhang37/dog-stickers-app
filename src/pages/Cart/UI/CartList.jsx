import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../../../stores/Cart";
import CartItem from "./CartItem";

const CartList = () => {
  const carts = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotal);

  return (
    <>
      {carts.map((cart) => (
        <CartItem cart={cart} key={cart.id} />
      ))}

      <tr className="cart-subtotal">
        <td style={{ paddingTop: "20px" }}></td>
        <td style={{ paddingTop: "20px" }}></td>
        <td style={{ paddingTop: "20px" }} className="subtotal-title">
          SUBTOTAL
        </td>
        <td style={{ paddingTop: "20px" }} className="subtotal-price">
          ${total.toFixed(2)}
        </td>
      </tr>
    </>
  );
};

export default CartList;
