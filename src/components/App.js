import React from "react";
import { useSelector } from "react-redux";
import { breakActions } from "../store/break-slice";

import "../styles.css";
import Break from "./Break";
import Session from "./Session";

export default function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      {/* <Break />
      <Session /> */}
    </div>
  );
}
