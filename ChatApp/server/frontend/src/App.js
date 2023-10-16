import React, { useEffect, useState, useRef } from "react";
import { socket } from "./socket";
import Room from "./components/Room";
import ChatArea from "./components/ChatArea";
import { MessageProvider } from "./Context";

function App() {
  const [message, setMessage] = useState([]);
  const [activity, setActivity] = useState("");
  const [userList, setUserList] = useState([]);
  const [roomList, setRoomList] = useState([]);
  const activityTimer = useRef();
  useEffect(() => {
    console.log(message);
  }, [message]);

  function handleMessage(data) {
    setMessage((prev) => [...prev, data]);
  }
  function handleActivity(name) {
    setActivity(name);
    clearTimeout(activityTimer.current);
    activityTimer.current = setTimeout(() => {
      setActivity(null);
    }, 1000);
  }
  function handleUser({ users }) {
    setUserList(users);
  }
  function handleRoom({ rooms }) {
    setRoomList(rooms);
  }

  useEffect(() => {
    socket.on("message", handleMessage);
    socket.on("activity", handleActivity);
    socket.on("userList", handleUser);
    socket.on("roomList", handleRoom);

    return () => {
      socket.off("message", handleMessage);
      socket.off("activity", handleActivity);
      socket.off("userList", handleUser);
      socket.off("roomList", handleRoom);
    };
  }, []);
  return (
    <main className="App">
      <MessageProvider>
        <Room />
        <ChatArea
          message={message}
          activity={activity}
          userList={userList}
          roomList={roomList}
        />
      </MessageProvider>
    </main>
  );
}

export default App;
