import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = e => {
    setCartIsShown(true);
  };

  const hideCartHandler = e => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
