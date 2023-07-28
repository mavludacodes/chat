import React from "react";

export default function ChatMessageItem({ message }) {
  return (
    <div
      className={
        message.user_id === 12345 ? "flex justify-end" : "flex justify-start"
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
  );
}
