import { useState, useEffect, createContext } from "react";
import { createCheckout } from "../lib/shopify";

const CartContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }

      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  const addToCart = async (addedItem) => {
    const newItem = { ...addedItem };
    console.log(newItem);
    setCartOpen(true);

    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(newItem.id, 1);

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);

      localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]));
    } else {
      let newCart = [];
      let added = false;

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;

export { ShopConsumer, CartContext };

export default ShopProvider;
