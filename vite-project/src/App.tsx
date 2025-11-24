import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import MapView from "../components/MapView.tsx";
import ListView from "../components/ListView.tsx";
import Home from './components/Home'
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mapview" element={<MapView />} />
        <Route path="/listview" element={<ListView />} />
      </Routes>
    </div>
  );
}

export default App;
