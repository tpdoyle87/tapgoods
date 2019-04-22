import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import createStore from "./store";
import App from "./components/app";

const store = createStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div className="total-style">
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-center"
        />
      </Provider>
    </div>,
    document.getElementById('root')
  );
});
