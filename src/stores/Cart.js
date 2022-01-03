import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.reduce(
      (total, item) => total + item.price * item.quantityInCart,
      0
    );
  },
});

export const addProductToCart = (cart, product) => {
  const newCart = [...cart];
  const foundIndex = newCart.findIndex(
    (x) => x.id === product.id && x.size === product.size
  );

  if (foundIndex !== -1) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantityInCart: cart[foundIndex].quantityInCart + product.quantity,
    };
    return newCart;
  }

  return [...newCart, { ...product, quantityInCart: product.quantity }];
};

export const addQuantityProduct = (cart, product, quantity) => {
  const newCart = [...cart];
  const foundIndex = newCart.findIndex(
    (x) => x.id === product.id && x.size === product.size
  );

  if (foundIndex !== -1) {
    newCart[foundIndex] = {
      ...cart[foundIndex],
      quantityInCart: cart[foundIndex].quantityInCart + quantity,
    };
    return newCart;
  }

  return [...newCart];
};
