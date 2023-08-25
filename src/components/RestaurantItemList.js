import { LOGO_URL } from "../utils/constant";
import { TiArrowSortedUp, TiMediaRecord } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import RestaurantNestedList from "./RestaurantNestedList";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const RestaurantItemList = ({ item, itemList }) => {
  console.log("itemList", itemList);
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const handleAddItems = (item) => {
    dispatch(addItem(item)); // redux send action object to store {payload : item}
    setItemCount(itemCount + 1);
  };

  const handleRemoveItems = (id) => {
    let updateItemCount;
    dispatch(removeItem(id));
    updateItemCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updateItemCount);
  };
  return (
    <>
      <div>
        <div key={item?.id} className="border-b-2 my-2 py-2">
          <div className="flex justify-between">
            <div className="w-10/12">
              <div className="flex">
                <span>
                  {item?.isVeg ? (
                    <TiMediaRecord className="text-green-600  mb-2 border-[2px] border-green-600" />
                  ) : (
                    <TiArrowSortedUp className="text-red-500  border border-red-500" />
                  )}
                </span>
                <span className="px-2 font-medium text-[#ee9c00] text-xs font-sans">
                  {item?.isBestseller ? (
                    <span className="flex text-[#ee9c00] items-center">
                      <FaStar />
                      <span className="px-1">{item?.ribbon?.text}</span>
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <div className="font-bold text-sm my-1 py-1">{item?.name}</div>
              <div className="text-sm mb-3">
                ₹{item?.price ? item?.price / 100 : item?.defaultPrice}
              </div>
              <p className="text-xs my-1 py-1">{item?.description}</p>
            </div>
            <div className="">
              {/* {item?.card?.info?.imageId ? (
                <>
                  <button className="absolute bg-black text-white text-center mx-12 my-16 p-1 text-xs">
                    - ADD +
                  </button>
                  <img
                    className="w-[140px] rounded-lg"
                    src={LOGO_URL + item?.card?.info?.imageId}
                  />
                </>
              ) : (
                <button className="absolute bg-black text-white text-center mx-12 my-16 p-1 text-xs">
                  - ADD +
                </button>
              )} */}
              <div className="absolute bg-[#fff] text-green-400 mx-8 my-16 mt-16 px-3 border-b-2 rounded-md text-lg">
                <button
                  className=""
                  onClick={() => {
                    handleRemoveItems(item.id);
                  }}
                >
                  {" "}
                  −
                </button>
                <span className="p-2 m-2 text-[.9rem]">{itemCount}</span>
                <button
                  className=""
                  onClick={() => {
                    handleAddItems(item);
                  }}
                >
                  +
                </button>
              </div>
              <img
                className="w-[140px] rounded-lg"
                src={LOGO_URL + item?.imageId}
              />
            </div>
          </div>
        </div>
        {itemList?.map((val) => (
          <RestaurantNestedList key={val?.title} itemList={val} />
        ))}
      </div>
    </>
  );
};

export default RestaurantItemList;
