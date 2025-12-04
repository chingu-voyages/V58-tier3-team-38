import React, {useState} from 'react'
import type { FilterCriteria } from '@/types/filter';
import { createContext } from 'react';
import type {FilterContextType} from '../types/filter-context'


export const FilterContext = createContext<FilterContextType | null>(null);

const FilterBasis = ({children}: {children: React.ReactNode}) => {

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

  const updateFilter = (field: keyof FilterCriteria, value: any) => {
    setFilters(prev => ({ ...prev, [field]: value }));
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
  };

  const setAllFilters = (newFilters: FilterCriteria) => {
    setFilters(newFilters);
  };
  
    return (
  <FilterContext.Provider value={{ filters, updateFilter, clearFilters, setAllFilters }}>
    {children}
  </FilterContext.Provider>
)

  
}

export default FilterBasis