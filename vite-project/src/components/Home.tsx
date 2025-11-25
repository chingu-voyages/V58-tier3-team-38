import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  // faUsers,
  // faMapMarkerAlt,
  // faGlobeAmericas,
  // faDatabase,
  // faShieldAlt,
  // faRocket,
  // faUserFriends,
  // faChartBar,
  // faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Welcome to Chingu member Demographic Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This platform provides comprehensive demographic insights and
            geographic distribution data for analysis and research purposes.
          </p>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-blue-600 text-3xl"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Members
              </h3>
              <p className="text-gray-600">
                Explore detailed member information and demographic statistics.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
