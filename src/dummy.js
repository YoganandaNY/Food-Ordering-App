import { TIME_URL, CURRENCY_URL, LOGO_URL } from "../utils/constant";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { TiArrowSortedUp, TiMediaRecord } from "react-icons/ti";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const RestaurantMenuItem = () => {
  //const [enabled, setEnabled] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  const { resId } = useParams();

  // Custom Hooks
  const resData = useRestaurantMenu(resId);

  const { itemCards } =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  const { cards } = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR || {};

  //console.log(cards);

  return (
    <>
      <div className="max-w-3xl mt-5 mx-auto mb-0">
        <div className="flex items-center m-5">
          <span className="pr-3 text-sm font-medium">Veg Only</span>
          {/* <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-green-800" : "bg-gray-400"}
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch> */}
        </div>
        <div className="mx-5 border-b"></div>
        <div className="my-4 px-5 ">
          <div className="">
            <div className=" py-4">
              {isVisible ? (
                <>
                  <ul>
                    {cards?.map((items, index) => {
                      return (
                        <div key={index}>
                          <li className="font-bold my-2 py-2">
                            <div>
                              <span key={index}>
                                {items?.card?.card?.title}
                                {items?.card?.card?.title ? (
                                  <>
                                    <span>
                                      ({items?.card?.card?.itemCards?.length})
                                    </span>
                                    <span>
                                      <BiChevronUp
                                        className="float-right text-2xl hover:cursor-pointer"
                                        onClick={() => {
                                          setIsVisible(false);
                                        }}
                                      />
                                    </span>
                                  </>
                                ) : (
                                  " "
                                )}
                              </span>
                            </div>
                          </li>
                          {items?.card?.card?.itemCards?.map(
                            ({ category, ...rest }) => {
                              return (
                                <li
                                  key={rest?.card?.info?.id}
                                  onClick={() => {
                                    setIsVisible(false);
                                  }}
                                >
                                  data
                                  <div className="flex justify-between items-center">
                                    <div className="w-full">
                                      {rest?.card?.info?.isVeg ? (
                                        <TiMediaRecord className="text-green-600  mb-2 border-[2px] border-green-600" />
                                      ) : (
                                        <TiArrowSortedUp className="text-red-500  border border-red-500" />
                                      )}
                                      <div className="font-medium">
                                        {rest?.card?.info?.name}
                                      </div>
                                      <div className="flex">
                                        ₹
                                        {rest.card.info.price / 100 ||
                                          rest.card.info.defaultPrice / 100}
                                      </div>
                                      <div className="my-2 text-xs text-[rgba(40,44,63,.45)]">
                                        {rest.card.info.description}
                                      </div>
                                    </div>
                                    <div className=""></div>
                                    <div>
                                      <span className="">
                                        <img
                                          className="w-[160px] m-4 p-4 rounded-2xl"
                                          src={
                                            LOGO_URL + rest.card.info.imageId
                                          }
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="border"></div>
                                </li>
                              );
                            }
                          )}
                          {/* <div className="my-3 px-2 border border-b-[16px] border-[#f1f1f6]"></div> */}
                        </div>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <BiChevronDown
                  className="float-right text-2xl hover:cursor-pointer"
                  onClick={() => {
                    setIsVisible(true);
                  }}
                />
              )}
              {/* {isVisible ? (
                <>
                  <BiChevronUp
                    className="float-right text-2xl hover:cursor-pointer"
                    onClick={() => {
                      setIsVisible(false);
                    }}
                  />
                  <ul className="">
                    {itemCards?.map((item) => (
                      <>
                        <li key={item?.card?.info?.id} className="my-2 px-1">
                          <div className="flex justify-between items-center">
                            <div className="w-full">
                              {item?.card?.info?.isVeg ? (
                                <TiMediaRecord className="text-green-600  mb-2 border-[2px] border-green-600" />
                              ) : (
                                <TiArrowSortedUp className="text-red-500  border border-red-500" />
                              )}
                              <div className="font-medium">
                                {item?.card?.info?.name}
                              </div>
                              <div className="flex">
                                ₹
                                {item.card.info.price / 100 ||
                                  item.card.info.defaultPrice / 100}
                              </div>
                              <div className="my-2 text-xs text-[rgba(40,44,63,.45)]">
                                {item.card.info.description}
                              </div>
                            </div>
                            <div className=""></div>
                            <div>
                              <span className="">
                                <img
                                  className="w-[160px] m-4 p-4 rounded-2xl"
                                  src={LOGO_URL + item.card.info.imageId}
                                />
                              </span>
                            </div>
                          </div>
                        </li>
                        <div className="border"></div>
                      </>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <BiChevronDown
                    className="float-right text-2xl hover:cursor-pointer"
                    onClick={() => {
                      setIsVisible(true);
                    }}
                  />
                </>
              )} */}
            </div>
            <div className="my-3 px-2 border border-b-[16px] border-[#f1f1f6]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenuItem;
