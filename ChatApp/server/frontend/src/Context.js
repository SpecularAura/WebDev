import { createContext, useState } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [name, setName] = useState();
  const [room, setRoom] = useState();
  return (
    <MessageContext.Provider value={{ name, room, setName, setRoom }}>
      {children}
    </MessageContext.Provider>
  );
}

export default MessageContext;
