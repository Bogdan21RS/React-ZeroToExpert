import React from "react";
import ReactDom from "react-dom/client";
import HelloWorldApp from "./HelloWorldApp";
import FirstApp from "./FirstApp";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp />
  </React.StrictMode>
);
