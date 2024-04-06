import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="navWrapper">
      <Link className="navLink" to="/">
        <span>REDUX STORE</span>
      </Link>

      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
      </div>
      <span className="cart-count">cart items: {items.length}</span>
    </div>
  );
};

export default Navbar;
