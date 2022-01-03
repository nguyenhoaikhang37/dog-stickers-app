import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { addQuantityProduct, cartState } from "../../../stores/Cart";

const CartItem = ({ cart }) => {
  const [quantity, setQuantity] = useState(cart.quantityInCart);
  const [carts, setCarts] = useRecoilState(cartState);

  useEffect(() => {
    const newCarts = addQuantityProduct(carts, cart, quantity);
    setCarts(newCarts);
  }, [quantity]);

  const handleRemoveProduct = (product) => {
    setCarts((prev) => {
      const newCarts = [...prev];

      const foundIndex = newCarts.findIndex(
        (x) => x.size === product.size && x.id === product.id
      );
      newCarts.splice(foundIndex, 1);

      return newCarts;
    });
  };

  return (
    <tr className="cart-products">
      <td className="cart-productName">
        <img src={cart.img} />
        {cart.name}, {cart.size}
      </td>
      <td className="cart-productQuan">
        <div className="qty-input">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
          />
        </div>
      </td>
      <td className="cart-productPrice">
        ${(cart.price * cart.quantityInCart).toFixed(2)}
      </td>
      <td
        style={{ textAlign: "center" }}
        onClick={() => handleRemoveProduct(cart)}
      >
        <div className="cart-productRemove">
          <ion-icon name="close"></ion-icon>
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
