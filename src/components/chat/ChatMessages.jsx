import React, { useRef, useEffect } from "react";
import ChatMessageItem from "./ChatMessageItem";

function ChatMessages({ currentChat }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
  }, [currentChat]);

  return (
    <div className="bg-[#D0E5FA] w-full overflow-auto" ref={bottomRef}>
      {currentChat?.messages.map((message, index) => (
        <ChatMessageItem key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatMessages;
