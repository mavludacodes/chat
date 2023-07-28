import React from "react";
import ChatListItem from "./ChatListItem";

function ChatList({ activeChats, setState, currentChat }) {
  const handleClick = (e, user) => {
    e.preventDefault();
    setState((state) => ({
      ...state,
      currentChat: user,
    }));
    localStorage.setItem("currentChat", JSON.stringify(user));
  };

  return (
    <div className="w-[300px] overflow-auto">
      <ul>
        {activeChats?.map((el, index) => (
          <ChatListItem
            key={index}
            item={el}
            currentChat={currentChat}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
