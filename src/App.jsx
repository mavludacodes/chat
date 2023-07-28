import React, { useEffect } from "react";
import { useChatControllerContext } from "./contexts/Context";
import "./App.css";
import Header from "./layout/Header";
import ChatContainer from "./components/chat/ChatContainer";

function App() {
  const savedContent = localStorage.getItem("chatList");
  const savedCurrentChat = localStorage.getItem("currentChat");

  const [state, setState] = useChatControllerContext();

  useEffect(() => {
    setState((state) => ({
      ...state,
      activeChats: savedContent ? JSON.parse(savedContent) : [],
      currentChat: savedContent ? JSON.parse(savedCurrentChat) : undefined,
    }));
  }, []);

  return (
    <>
      <Header setState={setState} activeChats={state.activeChats} />
      <ChatContainer state={state} setState={setState} />
    </>
  );
}

export default App;
