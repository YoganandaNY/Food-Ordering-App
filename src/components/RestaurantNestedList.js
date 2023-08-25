import { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import RestaurantNestedItemList from "./RestaurantNestedItemList";

const RestaurantNestedList = ({ itemList }) => {
  const [showNestedItems, setShowNestedItems] = useState(false);

  const handleClick = () => {
    setShowNestedItems(!showNestedItems);
  };

  return (
    <div className="mt-3">
      <div className="my-4 cursor-pointer" onClick={handleClick}>
        <div>
          <span>
            {itemList?.title} ({itemList?.title?.length})
          </span>
          <span>
            {showNestedItems ? (
              <SlArrowUp className="float-right text-sm hover:cursor-pointer" />
            ) : (
              <SlArrowDown className="float-right text-sm hover:cursor-pointer" />
            )}
          </span>
        </div>
      </div>
      <div className="border-b-2 "></div>
      {showNestedItems && (
        <RestaurantNestedItemList nestedData={itemList?.itemCards} />
      )}
    </div>
  );
};

export default RestaurantNestedList;
