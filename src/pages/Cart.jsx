import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/feature/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-md"
              />
              <h2 className="mt-2 text-xl">{item.name}</h2>
              <p className="text-gray-400">${item.price}</p>
              <button
                onClick={() => dispatch(removeCartItem(item.id))}
                className="mt-3 bg-red-500 px-4 py-2 rounded-md text-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          {cartItems.length > 0 && (
            <button onClick={() => navigate("/checkout")}>Checkout</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
