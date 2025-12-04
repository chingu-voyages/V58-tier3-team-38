import type { FilterCriteria } from "./filter"

export interface FilterContextType {
    filters: FilterCriteria,
    
    updateFilter: (field: keyof FilterCriteria, value: any) => void,

    clearFilters: () => void,

    setAllFilters: (newFilters: FilterCriteria) => void
}