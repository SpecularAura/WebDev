import React, { useContext, useEffect, useState } from "react";
import AllUpdate from "./AllUpdate";
import CurrentUpdate from "./CurrentUpdate";
import AuthContext from "../context/AuthContext";
import { redirect } from "react-router-dom";

const ParentPortal = () => {
  const [isAllUpdate, setIsAllUpdate] = useState(false);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log(auth.username);
  });
  if (!auth?.username) {
    return redirect("/login");
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>Hi {auth.username}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsAllUpdate((prev) => !prev);
          }}
        >
          Click To View All Updates
        </button>
      </div>
      <div>{isAllUpdate ? <AllUpdate /> : <CurrentUpdate />}</div>
    </>
  );
};

export default ParentPortal;
