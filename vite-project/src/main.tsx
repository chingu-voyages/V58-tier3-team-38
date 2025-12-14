import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./App.tsx";
import FilterBasis from "./components/FilterBasis.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FilterBasis>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilterBasis>
  </React.StrictMode>
);
