import { LOGO_URL } from "../utils/constant";
import { TiArrowSortedUp, TiMediaRecord } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

const RestaurantNestedItemList = ({ nestedData }) => {
  console.log("nestedData...", nestedData);
  return (
    <div>
      {nestedData?.map((item) => (
        <div key={item?.card?.info?.id} className="border-b-2 my-2 py-2">
          <div className="flex justify-between">
            <div className="w-10/12">
              <div className="flex">
                <span>
                  {item?.card?.info?.isVeg ? (
                    <TiMediaRecord className="text-green-600  mb-2 border-[2px] border-green-600" />
                  ) : (
                    <TiArrowSortedUp className="text-red-500  border border-red-500" />
                  )}
                </span>
                <span className="px-2 font-medium text-[#ee9c00] text-xs font-sans">
                  {item?.card?.info?.isBestseller ? (
                    <span className="flex text-[#ee9c00] items-center">
                      <FaStar />
                      <span className="px-1">
                        {item?.card?.info?.ribbon?.text}
                      </span>
                    </span>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <div className="font-semibold text-sm my-1 py-1">
                {item?.card?.info?.name}
              </div>
              <div className="text-sm mb-3">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice}
              </div>
              <p className="text-xs my-1 py-1">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="">
              <button className="absolute bg-black text-white text-center mx-12 my-16 p-1 text-xs">
                - ADD +
              </button>
              <img
                className="w-[140px] rounded-lg"
                src={LOGO_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantNestedItemList;
