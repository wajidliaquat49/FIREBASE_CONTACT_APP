import React from "react";

const NotFoundContact = () => {
  return (
    <div
      className="flex justify-center  items-center gap-2"
      style={{
        width: "279.45px",
        height: "72px",
        // marginTop: "150px",
        // marginLeft: "50px",
        margin: "150px auto",
      }}
    >
      <img src="/Hands Contact.png" />
      <h1
        className="text-white font-semibold gap-2"
        style={{ fontSize: "24px" }}
      >
        No Contact Found
      </h1>
    </div>
  );
};

export default NotFoundContact;
