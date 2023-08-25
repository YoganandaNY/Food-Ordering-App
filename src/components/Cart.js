import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemQuantity from "./ItemQuantity";
import useTotalCartItems from "../utils/useTotalCartItemsl";
import CartAddress from "./CartAddress";
import { Link } from "react-router-dom";
import { isEmptyObject } from "../utils/helper";
import CartFallback from "./CartFallback";
import { BiSolidOffer } from "react-icons/bi";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const address = useSelector((store) => store.cart.deliveryAddress);
  const payment = useSelector((store) => store.cart.paymentMethod);
  const dispatch = useDispatch();
  const getItemTotal = useTotalCartItems();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return Object.values(cartItems).length > 0 ? (
    <>
      <div className="flex mt-5 mx-6 p-20 pt-4 justify-between float-right w-2/5">
        <div className="bg-white drop-shadow-md flex-2 p-6 h-[520px] overflow-auto">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg mt-2.5 text-title font-bold ">Cart Items</h1>
            <button
              className="w-[80px] h-[28px] rounded-md  bg-red-500 text-white text-sm"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
          {Object.values(cartItems).map((item) => {
            return (
              <>
                <div className="my-3">
                  <div className="flex items-center mt-2">
                    <p className="px-2 w-48 text-sm font-thin">{item.name}</p>
                    <div className="px-5">
                      <ItemQuantity item={item} key={item.id} />
                    </div>

                    <p className="font-thin text-sm">
                      {"₹ " + (item.price / 100) * item.quantity}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="text-sm p-3 rounded-sm bg-gray-100 w-[95%] text-gray-500">
            <span>Any Suggestions? We will pass it on....</span>
          </div>

          <div className="flex my-4 border p-1 text-sm border-gray-400 w-[95%] ">
            <div className="block pr-2">
              <input type="checkbox" className="p-2" name="check" />
            </div>
            <div aria-hidden="">
              <div className="font-semibold">
                Opt in for No-contact Delivery
              </div>
              <div className="text-gray-400">
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </div>
            </div>
          </div>

          <div className="border border-dotted border-gray-400 my-4 p-4 w-[95%] text-sm font-semibold text-center">
            <span className="flex">
              <BiSolidOffer />
              <span className="px-6">Apply Coupon</span>
            </span>
          </div>

          <div className="text-xs font-medium">Bill Details</div>
          <div className="text-xs text-gray-600 my-2">
            <span>Item Total</span>
            <span className="float-right px-5">{"₹ " + getItemTotal()}</span>
          </div>
          <div className="text-xs text-gray-600 my-2">
            <span>Delivery Fee | 4.5 kms</span>
            <span className="float-right px-5">₹43</span>
          </div>

          <div className="border border-b-0 my-4 pr-4 mr-5"></div>

          <div className="text-xs text-gray-600 my-1">
            <span>GST and Restaurant Charges</span>
            <span className="float-right px-5">₹82.25</span>
          </div>

          <div className="border border-black my-2 mt-4 mr-3 "></div>
          <div className="sticky bottom-[-25px] bg-slate-50">
            <div className="flex justify-between my-2 ">
              <p className="font-bold text-sm">TO PAY</p>
              <p className="font-bold  text-sm px-4">{"₹ " + getItemTotal()}</p>
            </div>
          </div>

          {/* {!isEmptyObject(address) ||
          (!isEmptyObject(payment) && (
            <>
              <div className="border border-black my-2"></div>
              {!isEmptyObject(address) && (
                <div className="flex flex-col justify-between my-2">
                  <h1 className="text-lg mt-2.5 text-title font-bold ">
                    Delivery Address
                  </h1>
                  <h2 className="font-semibold mt-2.5 text-title text-base">
                    {address.addressType}
                  </h2>
                  <p className="text-sm text-bio text-ellipsis">
                    {address.addressDescription}
                  </p>
                </div>
              )}
              {!isEmptyObject(payment) && (
                <div className="flex flex-col justify-between mb-2">
                  <h1 className="text-lg mt-2.5 text-title font-bold ">
                    Payment
                  </h1>
                  <h2 className="font-semibold mt-2.5 text-title text-base">
                    {payment.paymentType}
                  </h2>
                  <p className="text-sm text-bio text-ellipsis">
                    {payment?.paymentMethod}
                  </p>
                </div>
              )}
              <div className="flex justify-center my-10">
                <Link to="/payment">
                  <button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
                    {" "}
                    PROCEED TO PAYMENT
                  </button>
                </Link>
              </div>
            </>
          ))} */}
        </div>
      </div>
    </>
  ) : (
    <div className="container mx-auto">
      <CartFallback
        text={"Your cart is empty ! "}
        btnText={"SEE RESTAURANTS NEAR YOU"}
      />
    </div>
  );
};

export default Cart;
