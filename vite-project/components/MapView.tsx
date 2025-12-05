import React from "react";
import SearchFilter from "../src/components/SearchFilter";
import { useContext } from "react";
import { FilterContext } from "../src/components/FilterBasis";

const MapView = () => {
  const { filters, updateFilter, clearFilters, setAllFilters } = useContext(FilterContext)!;
  return (<div><SearchFilter 
                onSubmit={async (filters) => setAllFilters(filters)}
                onClear={() => clearFilters()}
                  />
          </div>);
};

export default MapView;
