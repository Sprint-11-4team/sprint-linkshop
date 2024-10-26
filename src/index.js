import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/Color.css"; // 루트 페이지 공통 css
import "./css/App.css"; // 루트 페이지 공통 css
import "./css/typography.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
