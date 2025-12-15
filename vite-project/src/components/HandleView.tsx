import { useState } from "react";
import { List, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HandleView: React.FC = () => {
  const [viewMode, setViewMode] = useState("list");
  const navigate = useNavigate();
  return (
    <div className="bg-blue-100 from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col text-start">
          <h1 className="mb-4">Demographics Dashboard</h1>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <div onClick={() => setViewMode("list")} className="gap-2">
              {viewMode === "list" ? (
                <div
                  className="flex items-center justify-center p-2 bg-black text-white rounded-lg text-md font-medium cursor-pointer"
                  onClick={() => navigate("/listview")}
                >
                  <List className="" />
                  <p className="ml-2">List View</p>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center p-2 bg-white rounded-lg text-md font-medium border-1 border-gray-200 cursor-pointer"
                  onClick={() => navigate("/listview")}
                >
                  <List className="" />
                  <p className="ml-2">List View</p>
                </div>
              )}
            </div>
            <div onClick={() => setViewMode("map")} className="gap-2">
              {viewMode === "map" ? (
                <div
                  className="flex items-center justify-center p-2 bg-black text-white rounded-lg text-md font-medium cursor-pointer"
                  onClick={() => navigate("/mapview")}
                >
                  <Map className="" />
                  <p className="ml-2">Map View</p>
                </div>
              ) : (
                <div
                  className="flex items-center justify-center p-2 bg-white rounded-lg text-md font-medium border-1 border-gray-200 cursor-pointer"
                  onClick={() => navigate("/mapview")}
                >
                  <Map className="" />
                  <p className="ml-2">Map View</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleView;
