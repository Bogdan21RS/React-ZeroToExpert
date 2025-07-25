import React from "react";
import ReactDom from "react-dom/client";
import HelloWorldApp from "./HelloWorldApp";
// import CounterApp from "./CounterApp";
import FirstApp from "./firstApp";
import "./styles.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <CounterApp value={10} /> */}
    <FirstApp title="hi" />
  </React.StrictMode>
);
