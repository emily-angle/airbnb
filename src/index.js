import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@/App";

import "@/assets/css/normalize.css";
import "@/assets/css/reset.less";
import "@/assets/css/common.less";

import store from "@/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Suspense fallback={<div>loadding...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </HashRouter>
);
