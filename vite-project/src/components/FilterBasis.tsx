import React, { createContext, useEffect, useState } from "react";
import type { FilterContextType } from "../types/filter-context";
import type { FilterCriteria } from "../types/filter";
import type { User } from "../types/user";
import { entries } from "./Data";

export const FilterContext = createContext<FilterContextType | null>(null);

const FilterBasis = ({ children }: { children: React.ReactNode }) => {
  const [rawData, setRawData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);

  useEffect(() => {
    const normalized: User[] = entries.map((item, index) => ({
      id: index + 1,
      Gender: (item.Gender || "").toLowerCase(),
      Country: item["Country Code"] || "",
      JoinYear: 2025,
      RoleType: item["Role Type"] || item["Voyage Role"] || "",
      Role: item["Voyage Role"] || "",
      SoloProjectTier: item["Solo Project Tier"] || "",
      VoyageTier: item["Voyage Tier"] || "",
      Voyage: item["Voyage (from Voyage Signups)"] || "",
    }));
    setRawData(normalized);
    setFilteredData(normalized);
  }, []);

  const [filters, setFilters] = useState<FilterCriteria>({
    Gender: "",
    Country: "",
    JoinYear: 0,
    RoleType: "",
    Role: "",
    SoloProjectTier: "",
    VoyageTier: "",
    Voyage: "",
  });

  const [selectedFilterType, setSelectedFilterType] = useState("");

  const applyFilters = (updated: FilterCriteria) => {
    const result = rawData.filter((user) => {
      return Object.entries(updated).every(([key, value]) => {
        if (!value || value === 0) return true;
        switch (key) {
          case "Country":
            return user.Country === value;
          case "Gender":
            return user.Gender.toLowerCase() === String(value).toLowerCase();
          case "RoleType":
            return user.RoleType.toLowerCase() === String(value).toLowerCase();
          case "Role":
            return user.Role.toLowerCase() === String(value).toLowerCase();
          case "SoloProjectTier":
            return user.SoloProjectTier === value;
          case "VoyageTier":
            return user.VoyageTier === value;
          case "Voyage":
            return user.Voyage === value;
          case "JoinYear":
            return user.JoinYear === Number(value);
          default:
            return true;
        }
      });
    });
    setFilteredData(result);
  };

  const updateFilter = (field: keyof FilterCriteria, value: any) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    applyFilters(updated);
  };

  const clearFilters = () => {
    const cleared: FilterCriteria = {
      Gender: "",
      Country: "",
      JoinYear: 0,
      RoleType: "",
      Role: "",
      SoloProjectTier: "",
      VoyageTier: "",
      Voyage: "",
    };
    setFilters(cleared);
    setFilteredData(rawData);
  };

  const setAllFilters = (newFilters: FilterCriteria) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  return (
    <FilterContext.Provider
      value={{
        rawData,
        filteredData,
        filters,
        updateFilter,
        clearFilters,
        setAllFilters,
        selectedFilterType,
        setSelectedFilterType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterBasis;
