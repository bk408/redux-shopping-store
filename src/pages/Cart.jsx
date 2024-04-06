import { useDispatch, useSelector } from "react-redux"
import { clearCart, remove } from "../utils/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {

  const dispatch = useDispatch()

  const products = useSelector((state) => state.cart);


  const handleRemove = (productId) => {
   dispatch(remove(productId))
  }
  
  const handleClear = () => {
    dispatch(clearCart())
  }

  return (
    <>
     

      {products.length === 0 ? (
        <div className="cartContainer">
          <p className="emptyCart">Your cart is empty 😔</p>
          <p className="emptyCart">
            Oops! It seems like your cart is feeling a bit light at the moment.
            Why not fill it up with some amazing products?🛍️
          </p>

          <Link to="/" className="emptybtn">Explore Products</Link>
        </div>
      ) : (
        <div>
          <button onClick={() => handleClear()} className="Clearbtn">
            Clear Cart
          </button>
          <div className="cartWrapper">
            {products.map((product) => (
              <div className="cartCard" key={product.id}>
                <img
                  className="productImg"
                  src={product.image}
                  alt="productImg"
                />
                <h4>{product.title}</h4>
                <h6>{product.price}</h6>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart