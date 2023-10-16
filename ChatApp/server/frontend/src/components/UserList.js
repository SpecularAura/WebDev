import React, { useContext } from "react";
import MessageContext from "../Context";

const UserList = ({ userList }) => {
  const { room } = useContext(MessageContext);
  return (
    <>
      {room && (
        <p className="user-list">
          Users in {room + ": "}
          {userList.map((el) => {
            return <span>{el.name},</span>;
          })}
        </p>
      )}
    </>
  );
};

export default UserList;
