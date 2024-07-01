import React from "react";
import ReactDOM from "react-dom/client";

import "src/app/reset.css";
import "src/app/style.css";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
