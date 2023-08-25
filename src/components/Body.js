import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { LIST_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //const [listOfRestaurents, setlistOfRestaurents] = useState(resList);

  const [listOfRestaurents, setlistOfRestaurents] = useState([]);

  const [filteredRestuarant, setFilteredRestuarant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   if (!isFetching) return;
  //   fetchData();
  // }, [isFetching]);

  const fetchData = async () => {
    const data = await fetch(LIST_API);

    const json = await data.json();

    //console.log(json);
    //Optional Chaining
    setlistOfRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );

    //setFilteredRestuarant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestuarant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internent connection
      </h1>
    );

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="px-4">
          <input
            type="text"
            className="m-4 px-2 border-solid border-2 hover:border-blue-500 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-400 m-1 px-3 rounded-md"
            onClick={() => {
              // Filter the resturant cards and upadate the UI
              // SearchText
              //console.log(searchText);

              const filteredResList = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestuarant(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-4 px-4 bg-gray-300 rounded-md"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.0
            );
            setlistOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarant.map((resturants) => (
          <Link
            key={resturants.info.id}
            to={"/restaurants/" + resturants.info.id}
          >
            {<ResturantCard resData={resturants} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
