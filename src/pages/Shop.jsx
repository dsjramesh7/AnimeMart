import { products } from "../data";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Shop Anime Clothing</h1>
      <div className="grid grid-cols-2 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>No products at now!!!</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
