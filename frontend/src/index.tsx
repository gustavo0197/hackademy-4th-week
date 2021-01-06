import React from "react";
import ReactDOM from "react-dom";
import { App } from "app";
import "./index.scss";

const Root = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("app"));
