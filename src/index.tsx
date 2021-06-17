import React from "react";
import ReactDOM from "react-dom";
import { Drizzle, IDrizzleOptions } from "@drizzle/store";
import { DrizzleContext } from "@drizzle/react-plugin";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import RibonGov from "./contracts/RibonGov.json";
import Ribon from "./contracts/Ribon.json";

const options = {
  contracts: [RibonGov, Ribon],
};

const drizzle = new Drizzle(options as any);

ReactDOM.render(
  <React.StrictMode>
    <DrizzleContext.Provider drizzle={drizzle}>
      <App />
    </DrizzleContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
