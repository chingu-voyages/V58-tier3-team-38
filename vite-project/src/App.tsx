import { Routes, Route } from "react-router-dom";
import MapView from "./components/MapView";
import Home from "./components/Home";
import HandleView from "./components/HandleView.tsx";
import TableView from "./components/TableView.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route
          path="/mapview"
          element={
            <>
              <Header />
              <MapView />
            </>
          }
        />
        <Route
          path="/listview"
          element={
            <>
              <Header />
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
