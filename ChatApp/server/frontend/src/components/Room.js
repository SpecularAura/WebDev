import React, { useContext, useState } from "react";
import MessageContext from "../Context";
import { socket } from "../socket";

const Room = () => {
  const { name, room, setName, setRoom } = useContext(MessageContext);
  const [tempName, setTempName] = useState(name);
  const [tempRoom, setTempRoom] = useState(room);
  function joinRoom(_name, _room) {
    console.log("This is called");
    socket.emit("enterRoom", {
      name: _name,
      room: _room,
    });
    setName(_name);
    setRoom(_room);
  }
  function handleRoomChange(event) {
    setTempRoom(event.target.value);
  }
  function handleNameChange(event) {
    setTempName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    joinRoom(tempName, tempRoom);
    // console.log(name, room);
  }
  return (
    <form className="form-join" onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        maxlength="8"
        placeholder="Your name"
        value={tempName}
        onChange={handleNameChange}
        size="5"
        required
      />
      <input
        type="text"
        id="room"
        placeholder="Chat room"
        value={tempRoom}
        onChange={handleRoomChange}
        size="5"
        required
      />
      <button id="join" type="submit">
        Join
      </button>
    </form>
  );
};

export default Room;
