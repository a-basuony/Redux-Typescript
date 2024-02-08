import { useState } from "react";
import { useSelector } from "react-redux";

import Cart from "./Cart.tsx";
import { cartSlice } from "../store/cart-slice.ts";
import CartItems from "./CartItems";
import { useCartSelector } from "../store/hooks.ts";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  // const cartItems = useSelector((state) => state.cart.items);
  // instead of useSelector we will use  our custom hook  to access the items in the cart
  // to access number of all items and all quantity of items in the cart we will use reducer() js method to get it .
  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.quantity, 0)
  );

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
