import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Catalog() {
  return (
    <div>

      <h1>Product Catalog</h1>

      <div className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

    </div>
  );
}

export default Catalog;