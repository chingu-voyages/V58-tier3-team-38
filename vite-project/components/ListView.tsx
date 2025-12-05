import SearchFilter from "../src/components/SearchFilter";
import React from "react";
import { useContext } from "react";
import { FilterContext } from "../src/components/FilterBasis";
import { Link } from "react-router-dom";


const ListView = () => {
  const { filters, updateFilter, clearFilters, setAllFilters } = useContext(FilterContext)!;
  return <div><SearchFilter 
                onSubmit={async (filters) => setAllFilters(filters)}
                onClear={() => clearFilters()}
                  />

                <Link to="/mapview"><button style={{ backgroundColor: 'blue' }} className="bg-blue-500 text-black px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                  Explore Map
                </button></Link>
          </div>;
};

export default ListView;
