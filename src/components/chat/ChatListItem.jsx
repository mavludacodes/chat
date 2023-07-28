import React from "react";

function ChatListItem({ currentChat, item, handleClick }) {
  return (
    <li
      className={
        currentChat && currentChat.user.id == item.user.id
          ? "h-[50px] bg-yellow-200 p-3 border-b-[1px] cursor-pointer"
          : "h-[50px]  hover:bg-slate-200 p-3 border-b-[1px] cursor-pointer"
      }
      onClick={(e) => handleClick(e, item)}
    >
      <p>{item.user.name}</p>
    </li>
  );
}

export default ChatListItem;
