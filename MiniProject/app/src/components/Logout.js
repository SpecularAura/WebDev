import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  useEffect(() => {
    logout();
  }, []);

  const logout = async () => {
    const response = await fetch("http://localhost:5000/logout", {
      credentials: "include",
    });
    const data = await response.json();
    setAuth(null);
    navigate("/login");
  };
  return <div>Logout</div>;
};

export default Logout;
