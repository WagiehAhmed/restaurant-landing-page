import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import { theme } from "./Styles/themes";
import { ThemeProvider } from "@emotion/react";
import StoreProvider from "./contexts/StoreProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/dashBoard/Login';
import Dashboard from './components/dashBoard/Dashboard';
import Orders from "./components/dashBoard/Orders";
import Main from "./components/dashBoard/Main";
import Admins from './components/dashBoard/Admins';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/admin" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Main />} />
          <Route path="admins" element={<Admins />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </StoreProvider>
  </ThemeProvider>
);
