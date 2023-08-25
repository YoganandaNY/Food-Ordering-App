import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  //let btnName = "Login";
  const [btnReactName, setBtnReactName] = useState("Login");

  //console.log("Header Rendered");

  // If no dependency array => useEffect is called on every render
  // If dependency arryy is empty = [] => useEffect is called only on initial render(just once)
  // If depenedcy array is [btnReactName] => useEffect is called everytime btnReactName is updated

  useEffect(() => {
    //console.log("useEffect Called");
  }, [btnReactName]);

  const onlineStatus = useOnlineStatus();

  const cartItemsLength = useSelector((store) => store.cart.totalItems);
  console.log("cartItems", cartItemsLength);

  return (
    <div className="flex justify-between items-center bg-neutral-300">
      <div className="logo-container">
        <img className="logo w-24" src={CDN_URL} />
      </div>
      <div className="flex p-4 items-center">
        <ul className="flex">
          <li className="px-2 m-3">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 m-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 m-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 m-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 m-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* <li className="px-2 m-3">
            <Link to="/cart">Cart - {cartItemsLength}</Link>
          </li> */}
          <li className="px-2 m-3 hover:text-orange-500">
            <Link to="/cart">
              <span className="absolute mt-1">
                <svg
                  className="fill-gray-300 stroke-[#282c3f] "
                  viewBox="-1 0 37 32"
                  height="20"
                  width="20"
                >
                  <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
                </svg>
                <span className="absolute top-0 left-[30%] text-sm font-semibold">
                  {cartItemsLength}
                </span>
              </span>
              <span className="p-6">Cart</span>
            </Link>
          </li>

          {/* <button
            className="login px-2 m-3"
            onClick={() => {
              btnReactName === "Login"
                ? setBtnReactName("Logout")
                : setBtnReactName("Login");
            }}
          >
            {" "}
            {btnReactName}{" "}
          </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
