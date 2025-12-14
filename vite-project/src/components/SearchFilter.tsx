import React, { useContext } from "react";
import type { FilterCriteria, SearchFilterProps } from "../types/filter";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "../components/ui/select";
import { FilterContext } from "./FilterBasis";

const SearchFilter: React.FC<SearchFilterProps> = ({ onSubmit, onClear }) => {
  const context = useContext(FilterContext)!;
  const {
    filters,
    updateFilter,
    clearFilters,
    selectedFilterType,
    setSelectedFilterType,
  } = context;

  const rawValue = selectedFilterType
    ? filters[selectedFilterType as keyof FilterCriteria]
    : "";
  const selectedValue: string = typeof rawValue === "number" ? String(rawValue) : rawValue || "";

  const handleFilterTypeChange = (type: string) => {
    setSelectedFilterType(type);
    updateFilter(type as keyof FilterCriteria, type === "JoinYear" ? 0 : "");
  };

  const handleValueChange = (value: string) => {
    let val: string | number = value;
    if (selectedFilterType === "JoinYear") val = Number(value);
    updateFilter(selectedFilterType as keyof FilterCriteria, val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(filters);
  };

  const handleClear = () => {
    setSelectedFilterType("");
    clearFilters();
    onClear(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-auto p-6 border-1 rounded-lg bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-center"
    >
      <h3 className="text-xl font-semibold mr-8 mb-2 sm:mb-0">
        Search & Filter Members
      </h3>

      <div className="flex flex-row mb-2 sm:mb-0">
        <div className="">
          <Select
            onValueChange={handleFilterTypeChange}
            value={selectedFilterType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose filter type" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectLabel>Filter Types</SelectLabel>
                {["Gender","Country","JoinYear","RoleType","Role","SoloProjectTier","VoyageTier","Voyage"].map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {selectedFilterType && (
          <div>
            {selectedFilterType === "Gender" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="non-binary">Non-binary</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "Country" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="DE">Germany</SelectItem>
                  <SelectItem value="IN">India</SelectItem>
                  <SelectItem value="BR">Brazil</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "JoinYear" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select join year" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {[2024, 2023, 2022, 2021, 2020].map((y) => (
                    <SelectItem key={y} value={String(y)}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "RoleType" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="frontend">Frontend</SelectItem>
                  <SelectItem value="backend">Backend</SelectItem>
                  <SelectItem value="fullstack">Full Stack</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "Role" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Developer">Web Developers</SelectItem>
                  <SelectItem value="Smaster">Scrum Master</SelectItem>
                  <SelectItem value="Powner">Product Owner</SelectItem>
                  <SelectItem value="Guide">Guide</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "SoloProjectTier" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Solo Tier" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="tier1">Tier 1</SelectItem>
                  <SelectItem value="tier2">Tier 2</SelectItem>
                  <SelectItem value="tier3">Tier 3</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "VoyageTier" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Voyage Tier" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="tier1">Voyage Tier 1</SelectItem>
                  <SelectItem value="tier2">Voyage Tier 2</SelectItem>
                  <SelectItem value="tier3">Voyage Tier 3</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "Voyage" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Voyage" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {Array.from({ length: 57 }, (_, i) => (
                    <SelectItem key={i+1} value={`voyage-${i+1}`}>Voyage {i+1}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-4 ml-0 sm:ml-4">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-gray-700 rounded-md"
        >
          Apply Filter
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md"
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
