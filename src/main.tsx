import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AboutUs from "./components/AboutUs/AboutUs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import "./index.css";

export const ReactStrictMode = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

export const rootElement = document.getElementById("root");

ReactDOM.render(ReactStrictMode, rootElement);
