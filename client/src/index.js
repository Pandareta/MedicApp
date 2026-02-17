import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";

const backendBase = process.env.REACT_APP_BACKEND_URL || "http://localhost:3004";
const useFake = process.env.REACT_APP_USE_FAKE_DB === "true";
axios.defaults.baseURL = useFake ? `${backendBase.replace(/\/$/, "")}/dummy` : backendBase;

console.log("URL Backend: ", axios.defaults.baseURL, "USE_FAKE_DB:", useFake);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || "31532081050-nrgri514im6srt8c3e4thvg2dg6ionem.apps.googleusercontent.com"}>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
