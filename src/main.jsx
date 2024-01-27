import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import 'draft-js/dist/Draft.css';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import "./assets/css/styles.css";
import "./assets/scss/styles.scss";



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
);
