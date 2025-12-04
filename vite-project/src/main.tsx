import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import FilterBasis from "./components/FilterBasis.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterBasis>
        <App />
      </FilterBasis>
    </BrowserRouter>
  </React.StrictMode>
);
