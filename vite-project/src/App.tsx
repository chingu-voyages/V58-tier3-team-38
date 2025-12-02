import { Routes, Route } from "react-router-dom";
import MapView from "./components/MapView.tsx";
import ListView from "./components/ListView.tsx";
import Home from "./components/Home";
import HandleView from "./components/HandleView.tsx";
import "./App.css";
import TableView from "./components/TableView.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/mapview"
          element={
            <>
              <HandleView />
              <MapView />
            </>
          }
        />
        <Route
          path="/listview"
          element={
            <>
              <HandleView />
              <TableView />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
