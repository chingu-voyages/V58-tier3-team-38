import { Routes, Route } from "react-router-dom";
import MapView from "./components/MapView.tsx";
import Home from "./components/Home";
import HandleView from "./components/HandleView.tsx";
import TableView from "./components/TableView.tsx";
import Footer from "./components/Footer.tsx";

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
      <Footer></Footer>
    </div>
  );
}

export default App;
