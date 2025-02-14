import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCartItem } from "../redux/feature/cartSlice";
import { addFormData, clearFormData } from "../redux/feature/formSlice";

const Checkout = () => {
  const [form, setForm] = useState({ name: "", address: "", email: "" });
  const checkoutData = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!form.name || !form.address || !form.email) {
      alert("Please fill in all fields!");
      return;
    }

    console.log("Form State before dispatch:", form);
    dispatch(addFormData({ ...form }));

    dispatch(clearCartItem());
    dispatch(clearFormData());

    alert("Order Placed Successfully!🎉");
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleInputChange}
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
        />
      </div>

      <h2 className="text-xl font-semibold mt-6">Order Summary</h2>
      {checkoutData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        checkoutData.map((item) => (
          <div key={item.id} className="bg-gray-800 p-4 rounded-lg my-2">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}

      <button
        onClick={handleCheckout}
        className="mt-6 bg-green-500 px-6 py-3 rounded-md text-lg hover:bg-green-600"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
