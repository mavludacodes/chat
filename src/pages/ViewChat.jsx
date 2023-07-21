import React, { useRef, useEffect } from "react";

function ViewChat({ currentChat }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
  }, [currentChat]);

  return (
    <div className="bg-[#D0E5FA] w-full overflow-auto" ref={bottomRef}>
      {currentChat &&
        currentChat.messages.map((message, index) => (
          <div
            key={index}
            className={
              message.user_id === 12345
                ? "flex justify-end"
                : "flex justify-start"
            }
          >
            <div
              className={
                message.user_id === 12345
                  ? "bg-red-300 m-2 p-3 rounded-xl max-w-[500px]"
                  : "bg-teal-400 m-2 p-3 rounded-xl max-w-[500px]"
              }
            >
              {message.content}
              <p className="text-xs text-end">
                {new Date(message.timestamp).toTimeString().slice(0, 5)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ViewChat;
