import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white">
      <h1>
        Welcome to Anime<span>Mart</span>
      </h1>
      <p>Your ultimate anime-themed fashion store.</p>
      <NavLink
        to="/shop"
        className="mt-6 bg-blue-500 px-6 py-2 rounded-md text-lg hover:bg-blue-600"
      >
        Start Shopping
      </NavLink>
    </div>
  );
};

export default Home;
