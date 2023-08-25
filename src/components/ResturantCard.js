import { LOGO_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  //console.log("ResDATA", resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div
      className="m-4 p-4 w-[270px] hover:border border-inherit"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="py-4">
        <img src={LOGO_URL + cloudinaryImageId} />
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-[13px] pb-4">{cuisines.join(", ")}</div>
      </div>
      <div className="flex items-center text-[12px]">
        <div className="m-1 px-1 bg-green-300">
          <span className="icon-star px-1">☆</span>
          <span>{avgRating}</span>
        </div>
        <div className="m-1 px-1">
          •
          <span className="m-1 px-1">
            {resData?.info?.sla?.deliveryTime} MINS
          </span>
        </div>
        <div>
          •<span className="m-1 px-1">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
