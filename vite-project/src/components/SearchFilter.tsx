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
  const selectedValue: string =
    typeof rawValue === "number" ? String(rawValue) : rawValue || "";

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
                {[
                  "Gender",
                  "Country",
                  "RoleType",
                  "Role",
                  "VoyageTier",
                  "Voyage",
                ].map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
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
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "Country" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="DZ">Alergia</SelectItem>
                  <SelectItem value="AR">Argentina</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                  <SelectItem value="BR">Brazil</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="CR">Costa Rica</SelectItem>
                  <SelectItem value="DK">Denmark</SelectItem>
                  <SelectItem value="EC">Ecuador</SelectItem>
                  <SelectItem value="EG">Egypt</SelectItem>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="GE">Georgia</SelectItem>
                  <SelectItem value="DE">Germany</SelectItem>
                  <SelectItem value="GH">Ghana</SelectItem>
                  <SelectItem value="GR">Greece</SelectItem>
                  <SelectItem value="HU">Hungary</SelectItem>
                  <SelectItem value="IN">India</SelectItem>
                  <SelectItem value="ID">Indonesia</SelectItem>
                  <SelectItem value="IR">Iran</SelectItem>
                  <SelectItem value="IQ">Iraq</SelectItem>
                  <SelectItem value="IT">Italy</SelectItem>
                  <SelectItem value="JM">Jamaica</SelectItem>
                  <SelectItem value="JP">Japan</SelectItem>
                  <SelectItem value="KE">Kenya</SelectItem>
                  <SelectItem value="KR">South Korea</SelectItem>
                  <SelectItem value="LB">Lebanon</SelectItem>
                  <SelectItem value="MA">Morocco</SelectItem>
                  <SelectItem value="NP">Nepal</SelectItem>
                  <SelectItem value="NL">Netherlands</SelectItem>
                  <SelectItem value="NZ">New Zealand</SelectItem>
                  <SelectItem value="NG">Nigeria</SelectItem>
                  <SelectItem value="PK">Pakistan</SelectItem>
                  <SelectItem value="PH">Philippines</SelectItem>
                  <SelectItem value="PL">Poland</SelectItem>
                  <SelectItem value="SA">Saudia Arabia</SelectItem>
                  <SelectItem value="ZA">South Africa</SelectItem>
                  <SelectItem value="ES">Spain</SelectItem>
                  <SelectItem value="SE">Sweden</SelectItem>
                  <SelectItem value="TW">Taiwan</SelectItem>
                  <SelectItem value="TH">Thailand</SelectItem>
                  <SelectItem value="UG">Uganda</SelectItem>
                  <SelectItem value="UA">Ukraine</SelectItem>
                  <SelectItem value="GB">United Kingdom</SelectItem>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="VN">Vietnam</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "RoleType" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "Role" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Developer">Developer</SelectItem>
                  <SelectItem value="Smaster">Scrum Master</SelectItem>
                  <SelectItem value="Powner">Product Owner</SelectItem>
                  <SelectItem value="Udesigner">UI/UX Designer</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "VoyageTier" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Voyage Tier" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="tier1">Tier 1</SelectItem>
                  <SelectItem value="tier2">Tier 2</SelectItem>
                  <SelectItem value="tier3">Tier 3</SelectItem>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === "Voyage" && (
              <Select value={selectedValue} onValueChange={handleValueChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Voyage" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectContent className="bg-white">
                    <SelectItem value="v59">V59</SelectItem>
                    <SelectItem value="v58">V58</SelectItem>
                    <SelectItem value="v57">V57</SelectItem>
                    <SelectItem value="v56">V56</SelectItem>
                    <SelectItem value="v52">V52</SelectItem>
                    <SelectItem value="v??">V??</SelectItem>
                  </SelectContent>
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
