import React, { useEffect } from "react";
import { useChatControllerContext } from "./contexts/Context";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ViewChat from "./pages/ViewChat";

function App() {
  const [state, setState] = useChatControllerContext();
  const savedContent = localStorage.getItem("chatList");
  const savedCurrentChat = localStorage.getItem("currentChat");

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
      <div className="mx-10 flex h-[450px]">
        <Sidebar
          activeChats={state.activeChats}
          setState={setState}
          currentChat={state.currentChat}
        />
        <ViewChat currentChat={state.currentChat} />
      </div>
    </>
  );
}

export default App;
