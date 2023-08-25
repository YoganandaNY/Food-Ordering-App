import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { TIME_URL, CURRENCY_URL } from "../utils/constant";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // Custom Hooks
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { lastMileTravelString, slaString } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) =>
        val?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const nestedCategory =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (val) =>
        val?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log("resInfo", nestedCategory);

  return (
    <>
      <div className="max-w-3xl mt-5 mx-auto mb-0">
        <div className="flex mx-3 p-3 justify-between items-center">
          <div className="">
            <p className="font-medium">{name}</p>
            <p className="text-[12px]">{cuisines.join(", ")}</p>
            <p className="text-[12px]">
              {areaName} {","} {lastMileTravelString}
            </p>
          </div>
          <div className="p-1 m-1 border border-b-2">
            <p className="pl-4 border-b text-[14px] font-medium text-green-600">
              <span className="">✭</span> {avgRating}
            </p>
            <p className="text-xs pb-1">{totalRatingsString}</p>
          </div>
        </div>
        <div className="mx-5 border-b"></div>
        <div className="mx-4 p-2 flex">
          <span className="flex items-center">
            <img src={TIME_URL} className="w-5" />
            <span className="mx-4 font-bold">{slaString}</span>
            <span>
              <img className="w-8" src={CURRENCY_URL} />
            </span>
            <span className="mx-2 font-bold">{costForTwoMessage}</span>
          </span>
        </div>
        <div className="ml-5 mr-36 w-[95%] overflow-y-hidden overflow-x-auto">
          <ul className="flex justify-between">
            {offers?.map((item) => (
              <div key={item?.info?.offerIds[0]}>
                <section className="m-1 p-2 min-w-[205px] text-sm border border-black hover:cursor-pointer rounded-lg overflow-auto">
                  <p className="font-bold opacity-60">{item.info.header}</p>
                  <p className="text-xs font-semibold opacity-40">
                    {item.info.couponCode} | {item.info.description}
                  </p>
                </section>
              </div>
            ))}
          </ul>
        </div>

        <h2 className="m-5 font-bold">Menu</h2>
      </div>
      {category?.map((item) => (
        <RestaurantMenuItem
          key={item?.card?.card?.title}
          data={item?.card?.card}
        />
      ))}
      {nestedCategory?.map((val) => (
        <RestaurantMenuItem
          key={val?.card?.card?.title}
          dataList={val?.card?.card}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;
