import { Routes, Route } from "react-router-dom";
import MapView from "./components/MapView";
import Home from "./components/Home";
import TableView from "./components/TableView";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex-1 overflow-auto w-full flex justify-center pt-[390px]">
        <div className="w-full max-w-7xl px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapview" element={<MapView />} />
            <Route path="/listview" element={<TableView />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
