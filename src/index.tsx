import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import store from "./store/store";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/poppins-v9-latin-regular.ttf';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
