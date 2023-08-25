const Grocery = () => {
  return (
    <>
      <div className="m-auto w-3/4 flex mt-24">
        <div className="">
          <h2 className="font-bold text-lg m-5">Swiggy One</h2>
          <p className="text-lg m-5 relative z-[1] text-[#686b78]">
            Get free delivery and extra discounts all across Swiggy.
            <br />
            Your Swiggy One benefits can be availed only on the Swiggy App.
          </p>
          <div className="flex">
            <img
              className="mx-6"
              alt=""
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            />
            <img
              alt=""
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            />
          </div>
        </div>
        <img
          className="w-[360px] h-[330px]"
          alt=""
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_660/swiggy_one/my_account_super"
        />
      </div>
    </>
    // <h1>
    //   Our grocery online store, and we have a lot of child components inside
    //   this web page!!!
    // </h1>
  );
};

export default Grocery;
