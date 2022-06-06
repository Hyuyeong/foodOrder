import { Fragment } from 'react';
import img1 from '../../img/main.jpg';
import VideoBG from '../VideoBG';
import CartButton from '../UI/CartButton';
const Header = props => {
  return (
    <Fragment>
      <header className="header">
        <h1>Hot Dog</h1>
        <CartButton onClick={props.onShowCart} />
      </header>

      {/* <VideoBG /> */}

      <div className="main__image">
        <img src={img1} alt="" />
      </div>
    </Fragment>
  );
};
export default Header;
