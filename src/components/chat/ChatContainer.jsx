import React from "react";
import ChatList from "./ChatList";
import ChatMessages from "./ChatMessages";

function ChatContainer({ state, setState }) {
  return (
    <div className="mx-10 flex h-[450px]">
      <ChatList
        activeChats={state.activeChats}
        setState={setState}
        currentChat={state.currentChat}
      />
      <ChatMessages currentChat={state.currentChat} />
    </div>
  );
}

export default ChatContainer;
