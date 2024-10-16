import React from "react";

const Navbar = () => {
  return (
    <div
      className=" gap-2  bg-white  my-4 flex justify-center items-center"
      style={{ width: "361px", height: "60px", borderRadius: "10px" }}
    >
      <img src="/logos_firebase.png" />
      <h1 className="text-xl font-medium ">Firebase Contact App</h1>
    </div>
  );
};

export default Navbar;
