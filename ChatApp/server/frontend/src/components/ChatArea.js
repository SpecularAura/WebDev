import React from "react";
import SendChat from "./SendChat";
import Activity from "./Activity";
import MainChat from "./MainChat";
const ChatArea = ({ message, activity, userList, roomList, sendMessage }) => {
  return (
    <>
      <MainChat message={message} userList={userList} roomList={roomList} />
      <Activity activity={activity} />
      <SendChat />
    </>
  );
};

export default ChatArea;
