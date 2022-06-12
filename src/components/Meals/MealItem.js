import MealForm from './MealForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const MealItem = props => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
      img: props.img,
    });
  };

  return (
    <li className="meal">
      <div className="meal__detail">
        <div>
          <img src={props.img} alt={props.name} />
          {/* <span className="copyright">copyright</span> */}
        </div>
        <div>
          <h3>{props.name}</h3>
          <div className="description">{props.description}</div>
          <div className="price">$ {props.price.toFixed(1)}</div>
        </div>
      </div>
      <MealForm onAddToCart={addToCartHandler} />
    </li>
  );
};
export default MealItem;
