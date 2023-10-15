import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const AllUpdate = () => {
  const [allUpdates, setAllUpdates] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "http://localhost:5000/api/parent/getAllUpdate",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    setAllUpdates(data);
    console.log(data);
  };
  return (
    <div>
      <ListGroup as="ol" numbered>
        {allUpdates
          ? allUpdates.map((el) => {
              return (
                <ListGroup.Item as="li">
                  <h3>{el.heading}</h3>
                  <p>{el.lessons}</p>
                </ListGroup.Item>
              );
            })
          : ""}
      </ListGroup>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/logout");
        }}
      >
        Logout{" "}
      </button>
    </div>
  );
};

export default AllUpdate;
