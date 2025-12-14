
export interface FilterCriteria {
  Gender: string;        
  Country: string;       
  JoinYear: number | ""; 
  RoleType: string;
  Role: string;
  SoloProjectTier: string;
  VoyageTier: string;
  Voyage: string;
}


export interface SearchFilterProps {
    onSubmit: (filters: FilterCriteria) => Promise<void>,
    onClear: (resetToDefault: boolean) => void
}