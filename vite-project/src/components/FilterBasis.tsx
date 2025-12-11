import React, { useState, createContext, useMemo } from 'react';
import type { FilterContextType } from '../types/filter-context';
import type { FilterCriteria } from '../types/filter';


export const FilterContext = createContext<FilterContextType | null>(null);

export interface User {
  country: string;
  gender?: string;
  yearJoined?: number;
  role?: string;
  roleType?: string;
  soloProjectTier?: string;
  currentVoyageTier?: string;
  currentVoyage?: string;
}

const FilterBasis = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<FilterCriteria>({
    Gender: [],
    Country: '',
    JoinYear: 0,
    RoleType: [],
    Role: [],
    SoloProjectTier: [],
    VoyageTier: [],
    Voyage: []
  });

  const [rawData, setRawData] = useState<User[]>([]); 

  const [selectedFilterType, setSelectedFilterTypeState] = useState<string>('');

  const updateFilter = (field: keyof FilterCriteria, value: any) => {
    setFilters((prev: FilterCriteria) => ({ ...prev, [field]: value }));
  };

  const clearFilters = () => {
    setFilters({
      Gender: [],
      Country: '',
      JoinYear: 0,
      RoleType: [],
      Role: [],
      SoloProjectTier: [],
      VoyageTier: [],
      Voyage: []
    });
    setSelectedFilterTypeState('');
  };

  const setAllFilters = (newFilters: FilterCriteria) => {
    setFilters(newFilters);
  };

  const setSelectedFilterType = (type: string) => {
    setSelectedFilterTypeState(type);
  };

  
  const filteredData = useMemo(() => {
    return rawData.filter(user => {
      
      if (filters.Country && user.country !== filters.Country) return false;

      
      if (filters.Gender.length > 0 && user.gender && !filters.Gender.includes(user.gender)) return false;

      
      if (filters.JoinYear && user.yearJoined && user.yearJoined !== filters.JoinYear) return false;

      
      if (filters.Role.length > 0 && user.role && !filters.Role.includes(user.role)) return false;

     
      if (filters.RoleType.length > 0 && user.roleType && !filters.RoleType.includes(user.roleType)) return false;

    
      if (filters.SoloProjectTier.length > 0 && user.soloProjectTier && !filters.SoloProjectTier.includes(user.soloProjectTier)) return false;

    
      if (filters.VoyageTier.length > 0 && user.currentVoyageTier && !filters.VoyageTier.includes(user.currentVoyageTier)) return false;

      
      if (filters.Voyage.length > 0 && user.currentVoyage && !filters.Voyage.includes(user.currentVoyage)) return false;

      return true;
    });
  }, [rawData, filters]);

  return (
    <FilterContext.Provider value={{
      filters,
      updateFilter,
      clearFilters,
      setAllFilters,
      selectedFilterType,
      setSelectedFilterType,
      rawData,         
      setRawData,      
      filteredData     
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterBasis;
