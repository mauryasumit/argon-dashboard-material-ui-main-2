/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 RainBow Tech (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import App from "App";
import store from "./store";

// Soft UI Context Provider
import { ArgonControllerProvider } from "context";

// react-perfect-scrollbar component
import PerfectScrollbar from "react-perfect-scrollbar";
import AlertTemplate from "react-alert-template-basic";

// react-perfect-scrollbar styles
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <ArgonControllerProvider>
          <PerfectScrollbar>
            <App />
          </PerfectScrollbar>
        </ArgonControllerProvider>
      </BrowserRouter>
    </AlertProvider>
  </Provider>
);
