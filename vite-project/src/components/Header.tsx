import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { FilterContext } from "../components/FilterBasis";

const Header: React.FC = () => {
  const location = useLocation();
  const { clearFilters, setAllFilters } = useContext(FilterContext)!;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const isActive = (path: string) => location.pathname === path;

  const isListView = location.pathname === "/listview";

  return (
    <header className="top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <h1 className="text-2xl font-bold text-gray-800">
          Chingu Member Demographic
        </h1>
        <p className="text-gray-600 text-sm mt-1">{today}</p>
      </div>

      <nav className="border-t border-b bg-white">
        <ul className="flex justify-center gap-8 py-2">
          <li>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/mapview"
              className={`text-sm font-medium transition-colors ${
                isActive("/mapview")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Map
            </Link>
          </li>
          <li>
            <Link
              to="/listview"
              className={`text-sm font-medium transition-colors ${
                isActive("/listview")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              List
            </Link>
          </li>
        </ul>
      </nav>

      <div className="pb-4 bg-white">
        <div className="max-w-5xl mx-auto px-6 pt-4">
          {!isListView && (
            <SearchFilter
              onSubmit={async (filters) => setAllFilters(filters)}
              onClear={() => clearFilters()}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
