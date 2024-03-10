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
import Dashboard from './components/dashBoard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </StoreProvider>
  </ThemeProvider>
);
