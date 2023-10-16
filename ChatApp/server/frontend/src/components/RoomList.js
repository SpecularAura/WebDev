import React from "react";

const RoomList = ({ roomList }) => {
  console.log(roomList);
  return (
    <>
      {roomList && (
        <p className="room-list">
          Active Rooms:{" "}
          {roomList.map((el) => (
            <span>{el + ", "}</span>
          ))}
        </p>
      )}
    </>
  );
};

export default RoomList;
