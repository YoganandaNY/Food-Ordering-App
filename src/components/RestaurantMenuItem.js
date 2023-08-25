import { useState } from "react";
import RestaurantItemList from "./RestaurantItemList";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const RestaurantMenuItem = ({ data, dataList }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    if (data) {
      setShowItems(!showItems);
    } else {
      setShowItems(true);
    }
  };

  return (
    <div className="max-w-3xl m-auto px-4 mt-3">
      <div
        className="font-bold flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data ? (
            <span>
              {data?.title} ({data?.title?.length})
            </span>
          ) : (
            <span>{dataList?.title}</span>
          )}
        </span>
        <span>
          {showItems && data ? (
            <SlArrowUp className="float-right text-sm" />
          ) : dataList ? (
            ""
          ) : (
            <SlArrowDown className="float-right text-sm" />
          )}
        </span>
      </div>
      {showItems && (
        <div>
          {data?.itemCards?.map((item) => (
            <RestaurantItemList
              key={item?.card?.info?.id}
              item={item?.card?.info}
            />
          ))}
        </div>
      )}
      {showItems && <RestaurantItemList itemList={dataList?.categories} />}
      <div className="my-3 px-2 border border-b-[16px] border-[#f1f1f6]"></div>
    </div>
  );
};

export default RestaurantMenuItem;
