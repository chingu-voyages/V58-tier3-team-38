import type { FilterCriteria } from "./filter";
import type { User } from "./user";

export interface FilterContextType {
  filters: FilterCriteria;
  updateFilter: (field: keyof FilterCriteria, value: any) => void;
  clearFilters: () => void;
  setSelectedFilterType: (type: string) => void;
  setAllFilters: (newFilters: FilterCriteria) => void;
  selectedFilterType: string;

  
  rawData: User[];
  setRawData: (data: User[]) => void;
  filteredData: User[];
}
