import { NavLink } from "react-router-dom";
import { CART_FALLBACK_IMG } from "../utils/constant";

const CartFallback = ({ text, btnText }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img src={CART_FALLBACK_IMG} alt="" className="h-[256px] w-[271px] m-8" />
      <h2 className="px-14 font-bold text-lg text-[#535665]">{text}</h2>
      <p className="text-[#7e808c] text-sm">
        You can go to home page to view more restaurants
      </p>
      {btnText && (
        <NavLink to="/">
          <button className="bg-[#fc8019] px-4 py-2 my-8 text-[#fff] font-semibold hover:drop-shadow-lg backdrop-blur">
            {btnText}
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default CartFallback;
