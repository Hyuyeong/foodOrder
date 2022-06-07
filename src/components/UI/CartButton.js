import CartIcon from './CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const CartButton = props => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const [cartBump, setCartBump] = useState(false);

  useEffect(() => {
    setCartBump(true);
    const timer = setTimeout(() => {
      setCartBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  return (
    <div
      onClick={props.onClick}
      className={`btn__cart ${cartBump ? 'bump' : ''}`}
    >
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </div>
  );
};
export default CartButton;
