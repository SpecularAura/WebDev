import React, { useContext } from "react";
import MessageContext from "../Context";

const ChatBox = ({ message }) => {
  const { name } = useContext(MessageContext);
  return (
    <ul className="chat-display">
      {message.map((el) => {
        let liClassName = "post";
        if (el.name === name) {
          liClassName += " post--left";
        } else if (el.name !== "Admin") {
          liClassName += " post--right";
        }
        if (el.name !== "Admin") {
          return (
            <li className={liClassName}>
              <div
                className={`post__header ${
                  el.name === name
                    ? "post__header--user"
                    : "post__header--reply"
                }`}
              >
                <span className="post__header--name">{el.name}</span>
                <span className="post__header--time">{el.time}</span>
              </div>
              <div className="post__text">{el.text}</div>
            </li>
          );
        } else {
          return (
            <li className={liClassName}>
              <div className="post__text">{el.text}</div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ChatBox;
