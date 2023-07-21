import React from "react";
import { useChatControllerContext } from "./contexts/Context";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import ViewChat from "./pages/ViewChat";

function App() {
  const [state, setState] = useChatControllerContext();
  console.log(state, setState);
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
