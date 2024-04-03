import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { add } from "../utils/cartSlice";


const Products = () => {

     const dispatch = useDispatch()

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            
            setProducts(data)
        }
        
        fetchProducts()
    }, [])


    const handleAdd = (product) => {
       dispatch(add(product))
    }


  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img className="productImg" src={product.image} alt="productImg" />
          <h4>{product.title}</h4>
          <h6>{product.price}</h6>
          <button onClick={() => handleAdd(product)} className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products