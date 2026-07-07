import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="details">

      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <p><b>Brand:</b> {product.brand}</p>

      <p><b>Category:</b> {product.category}</p>

      <p><b>Rating:</b> ⭐ {product.rating}</p>

      <p><b>Stock:</b> {product.stock}</p>

      <p>{product.description}</p>

      <button>Add to Cart</button>

      <button>Buy Now</button>

      <br /><br />

      <Link to="/catalog">← Back to Catalog</Link>

    </div>
  );
}

export default ProductDetails;