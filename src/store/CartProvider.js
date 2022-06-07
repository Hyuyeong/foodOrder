import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = props => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCart({ type: 'ADD', item: item });
  };
  const removeItemToCartHandler = id => {
    dispatchCart({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
