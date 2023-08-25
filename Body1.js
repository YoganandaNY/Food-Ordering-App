import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import { LIST_API } from "../utils/constant";
import ShimmerCard from "./Shimmer/ShimmerCard";
import ShimmerCardContainer from "./Shimmer/ShimmerCardContainer ";

const Body1 = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [offset, setOffset] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantData();
  }, [offset]);

  const fetchRestaurantData = async () => {
    if (offset < 0) {
      //fetch 1st 15 restaurants
      const data = await fetch(LIST_API);
      const jsonData = await data.json();
      const modifiedData = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants?.map(
        (card) => {
          return card?.info;
        }
      );
      console.log("Modifieddd....", modifiedData)
      setRestaurantsData(modifiedData);
      setFilteredRestuarant(modifiedData);
    } else {
      //fetch restaurant data for infinite scrolling
      let FETCH_MORE_RESTAURANT_DATA_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&offset=${offset}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
      const data = await fetch(FETCH_MORE_RESTAURANT_DATA_URL);
      const jsonData = await data.json();
      const modifiedData = jsonData?.data?.cards?.map((card) => {
        return card?.card?.card?.gridElements?.infoWithStyle?.info;
      });
      console.log("Modify...", modifiedData);
      setRestaurantsData((prev) => prev.concat(modifiedData));
      setFilteredRestuarant(prev => prev.concat(modifiedData));
    }
    setLoading(false);
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setOffset((prev) => prev + 16);
      // console.log('changing offset value')
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //early return
  if (!restaurantsData) return null;
  // console.log(restaurantsData)

  return restaurantsData.length === 0 ? (
    <ShimmerCardContainer numberOfCards={12} />
  ) : (
    <div className="mt-6 mx-auto ">
      <div className="flex">
        <div className="px-8 cursor-pointer">
          <input className="border border-black rounded-sm" value={searchText} onChange={(e)=> {setSearchText(e.target.value)}}/>
          <button className="bg-green-400 m-1 px-2 text-center rounded-md" onClick={()=>{
            const filteredData = restaurantsData?.filter(val => val?.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestuarant(filteredData);
          }}>Search</button>
        </div>
        <button className="m-1 px-4 bg-gray-300 rounded-md" onClick={() => { 
            const filteredList = restaurantsData?.filter(
              (res) => res.avgRating > "4.0"
            );
            console.log(filteredList);
            setFilteredRestuarant(filteredList);
          }}>Top Rated Restaurants</button>
      </div>
      <div className="flex flex-wrap">
      {filteredRestuarant?.map((restaurant) => (
        <Link
          to={`/restaurants/${restaurant?.id}`}
          key={restaurant?.id}
        >
          <ResturantCard key={restaurant?.id} resData={...restaurant} />
        </Link>
      ))}
      {loading && <ShimmerCard />}
      </div>
    </div>
  );
};

export default Body1;
