import React, { useContext, useEffect } from "react";
import MyForm from "../ComponentsExp/MyForm";
import { Link, useNavigate } from "react-router-dom";
const TeacherDashboard = () => {
  return (
    <>
      <MyForm />
      <Link to="/logout">
        <button className="btn btn-primary">Logout</button>
      </Link>
    </>
  );
};

export default TeacherDashboard;
