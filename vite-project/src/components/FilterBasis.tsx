import React, { useState, createContext } from 'react';
import type { FilterContextType } from '../types/filter-context';
import type { FilterCriteria } from '@/types/filter';

export const FilterContext = createContext<FilterContextType | null>(null);

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

  return (
    <FilterContext.Provider value={{
      filters,
      updateFilter,
      clearFilters,
      setAllFilters,
      selectedFilterType,
      setSelectedFilterType
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterBasis;
