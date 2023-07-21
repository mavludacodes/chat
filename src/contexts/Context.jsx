import React, { useState, useContext, createContext } from "react";

const ChatContext = createContext([{}, () => {}]);

export function useChatControllerContext() {
  return useContext(ChatContext);
}

export function ChatContextProvider({ children }) {
  const savedContent = localStorage.getItem("chatList");
  const savedCurrentChat = localStorage.getItem("currentChat");
  const [state, setState] = useState({
    activeChats: savedContent ? JSON.parse(savedContent) : [],
    archivedChats: [],
    currentChat: savedContent ? JSON.parse(savedCurrentChat) : undefined,
  });

  return (
    <ChatContext.Provider value={[state, setState]}>
      {children}
    </ChatContext.Provider>
  );
}
