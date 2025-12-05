import type { FilterCriteria } from "./filter"

export interface FilterContextType {
    filters: FilterCriteria,
    
    updateFilter: (field: keyof FilterCriteria, value: any) => void,

    clearFilters: () => void,

    setSelectedFilterType: (type: string) => void

    setAllFilters: (newFilters: FilterCriteria) => void,

    selectedFilterType: string;
    
}