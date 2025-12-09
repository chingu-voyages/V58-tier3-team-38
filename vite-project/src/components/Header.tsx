import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { FilterContext } from "../components/FilterBasis";

const Header: React.FC = () => {
  const location = useLocation();
  const { setAllFilters, clearFilters } = useContext(FilterContext)!;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Logo / Title */}
      <div className="max-w-7xl mx-auto px-6 py-2">
        <h1 className="text-2xl font-bold text-gray-800">
          Chingu Member Demographic
        </h1>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b bg-white">
        <ul className="flex justify-center gap-8 py-2">
          <li>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/mapview"
              className={`text-sm font-medium transition-colors ${
                isActive("/mapview") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Map
            </Link>
          </li>
          <li>
            <Link
              to="/listview"
              className={`text-sm font-medium transition-colors ${
                isActive("/listview") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              List
            </Link>
          </li>
        </ul>
      </nav>

      {/* SearchFilter */}
      <div className="border-t pb-2 bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-2">
          <SearchFilter
            onSubmit={async (filters) => setAllFilters(filters)}
            onClear={() => clearFilters()}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
