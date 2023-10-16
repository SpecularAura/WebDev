import React, { useContext, useState } from "react";
import MessageContext from "../Context";
import { socket } from "../socket";

const SendChat = () => {
  const [message, setMessage] = useState();
  const { name } = useContext(MessageContext);
  function setActivity(name) {
    socket.emit("activity", name);
  }
  function handleChange(event) {
    setActivity(name);
    setMessage(event.target.value);
  }

  function emitMessage(name, newMessage) {
    socket.emit("message", {
      name: name,
      text: newMessage,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(message);
    emitMessage(name, message);
    setMessage("");
  }
  return (
    <form className="form-msg" onSubmit={handleSubmit}>
      <input
        type="text"
        id="message"
        placeholder="Your message"
        value={message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendChat;
