
import type { FilterCriteria } from "./filter";
import type { User } from "./user";

export interface FilterContextType {
  rawData: User[];            
  filteredData: User[];       

  filters: FilterCriteria;

  updateFilter: (field: keyof FilterCriteria, value: any) => void;
  clearFilters: () => void;
  setAllFilters: (newFilters: FilterCriteria) => void;

  selectedFilterType: string;
  setSelectedFilterType: (type: string) => void;
}
