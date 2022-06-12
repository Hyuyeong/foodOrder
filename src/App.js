import { useState } from 'react';
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Footer from './components/Layout/Footer';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = e => {
    setCartIsShown(true);
  };

  const hideCartHandler = e => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <AvailableMeals />
      <Footer />
    </CartProvider>
  );
}

export default App;
