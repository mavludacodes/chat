import React, { useState, useContext, createContext } from "react";

const ChatContext = createContext([{}, () => {}]);

export function useChatControllerContext() {
  return useContext(ChatContext);
}

export function ChatContextProvider({ children }) {
  const [state, setState] = useState({
    activeChats: [],
    archivedChats: [],
    currentChat: undefined,
  });

  return (
    <ChatContext.Provider value={[state, setState]}>
      {children}
    </ChatContext.Provider>
  );
}
