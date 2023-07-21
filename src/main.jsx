import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ChatContextProvider } from "./contexts/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </React.StrictMode>
);
