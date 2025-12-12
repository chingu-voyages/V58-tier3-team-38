import React from "react";
import image1 from "../assets/chinguPicture.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-[430px]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Welcome to Chingu Member Demographic Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This platform provides comprehensive demographic insights and
            geographic distribution data for analysis and research purposes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Map View</h3>
           <p className="text-gray-600 mb-4">
            Visualize member distribution geographically with interactive maps.
          </p>
          <Link to="/mapview">
            <button  style={{"backgroundColor": "blue"}} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              Explore Map
            </button>
          </Link>
          </div>
              
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Table View</h3>
          <p className="text-gray-600 mb-4">
            Access detailed member information in a structured table format.
          </p>
          <Link to="/listview">
            <button style={{"backgroundColor": "green"}} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors">
              View Table
            </button>
          </Link>
        </div>
        </div>
      </main>
      </div>
  );
};

export default Home;
