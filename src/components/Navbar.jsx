import { Link } from "react-router-dom"


const Navbar = () => {
  return (
      <div className="navWrapper">
          <span>Redux store</span>


          <div>
              <Link className="navLink" to="/" >Home</Link>
              <Link className="navLink" to="/cart" >Cart</Link>
          </div>
          <span className="cart-count">cart items: 0</span>
    </div>
  )
}

export default Navbar