import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-gray-800 p-4 rounded-lg flex flex-col items-center"
    >
      <img src={product.image} alt={product.name} className="rounded-md h-52" />
      <h2 className="mt-2 text-xl">{product.name}</h2>
      <p className="text-gray-400">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-3 inline-block bg-blue-500 px-4 py-2 rounded-md text-lg hover:bg-blue-600"
      >
        View
      </Link>
    </div>
  );
};

export default ProductCard;
