import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const CurrentUpdate = () => {
  const [currentUpdates, setCurrentUpdates] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchItems();
    return () => {
      setIsLoaded(false);
    };
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      "http://localhost:5000/api/parent/getCurrentUpdate",
      {
        credentials: "include",
      }
    );
    const data = await response.json();
    setCurrentUpdates(data);
    console.log(data);
    setIsLoaded(true);
  };
  return (
    <div>
      <ListGroup as="ol" numbered>
        {isLoaded &&
          currentUpdates.map((el) => {
            return (
              <ListGroup.Item as="li">
                <h3>{el.heading}</h3>
                <p>{el.lessons}</p>
                Posted On: <span>{el.created.toString()}</span>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsLoaded(false);
          navigate("/logout");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default CurrentUpdate;
