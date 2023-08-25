import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  useEffect(() => {
    // API CALL
    const timer = setInterval(() => {
      console.log("NAMASTE REACT EP-02");
    }, 1000);

    return () => {
      console.log("Functional Component Will Unmount");
      clearInterval(timer);
    };
  }, []);

  // console.log("User Rendered");

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count1}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Bangalore</h3>
      <h3>Conatct : @Yogananda27</h3>
    </div>
  );
};

export default User;
