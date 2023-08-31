import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "./index.css";
import { Provider } from "react-redux";
import store from "./context/index.js";

axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
