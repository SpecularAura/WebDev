import React from "react";
import ChatBox from "./ChatBox";
import RoomList from "./RoomList";
import UserList from "./UserList";
const MainChat = ({ message, userList, roomList }) => {
  return (
    <div className="chat-display-container">
      <UserList userList={userList} />
      <ChatBox message={message} />
      <RoomList roomList={roomList} />
    </div>
  );
};

export default MainChat;
