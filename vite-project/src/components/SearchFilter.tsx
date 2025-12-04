import React, { useContext, useState } from 'react';
import type { FilterCriteria, SearchFilterProps } from '../types/filter';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "../components/ui/select";
import { FilterContext } from './FilterBasis';

const SearchFilter: React.FC<SearchFilterProps> = ({ onSubmit, onClear }) => {
  const { filters, updateFilter, clearFilters } = useContext(FilterContext)!;

  const [selectedFilterType, setSelectedFilterType] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleFilterTypeChange = (type: string) => {
    setSelectedFilterType(type);
    setSelectedValue('');
  };

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    updateFilter(selectedFilterType as keyof FilterCriteria, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(filters);
  };

  const handleClear = () => {
    setSelectedFilterType('');
    setSelectedValue('');
    clearFilters();
    onClear(true);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Search & Filter Members</h3>

      <div className="space-y-4">
        {/* Filter Type Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-2">Filter By</label>
          <Select onValueChange={handleFilterTypeChange} value={selectedFilterType}>
            <SelectTrigger>
              <SelectValue placeholder="Choose filter type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter Types</SelectLabel>
                <SelectItem value="Gender">Gender</SelectItem>
                <SelectItem value="Country">Country</SelectItem>
                <SelectItem value="JoinYear">Join Year</SelectItem>
                <SelectItem value="RoleType">Role Type</SelectItem>
                <SelectItem value="Role">Role</SelectItem>
                <SelectItem value="SoloProjectTier">Solo Project Tier</SelectItem>
                <SelectItem value="VoyageTier">Voyage Tier</SelectItem>
                <SelectItem value="Voyage">Voyage</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Value Dropdown */}
        {selectedFilterType && (
          <div>
            {selectedFilterType === 'Gender' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'Country' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                    <SelectItem value="GB">United Kingdom</SelectItem>
                    <SelectItem value="DE">Germany</SelectItem>
                    <SelectItem value="FR">France</SelectItem>
                    <SelectItem value="BR">Brazil</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'JoinYear' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select join year" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Join Year</SelectLabel>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'RoleType' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select role type" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Role Type</SelectLabel>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'Role' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select role" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Role</SelectLabel>
                    <SelectItem value="Developer">Web Developers</SelectItem>
                    <SelectItem value="Smaster">Scrum Master</SelectItem>
                    <SelectItem value="Powner">Product Owner</SelectItem>
                    <SelectItem value="Guide">Guide</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'SoloProjectTier' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select Solo project tier" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Solo Project</SelectLabel>
                    <SelectItem value="tier1">Tier 1</SelectItem>
                    <SelectItem value="tier2">Tier 2</SelectItem>
                    <SelectItem value="tier3">Tier 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'VoyageTier' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select Voyage tier" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Voyage Tier</SelectLabel>
                    <SelectItem value="tier1">Voyage tier 1</SelectItem>
                    <SelectItem value="tier2">Voyage tier 2</SelectItem>
                    <SelectItem value="tier3">Voyage tier 3</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {selectedFilterType === 'Voyage' && (
              <Select onValueChange={handleValueChange} value={selectedValue}>
                <SelectTrigger><SelectValue placeholder="Select Voyage" /></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Voyage</SelectLabel>
                    {Array.from({ length: 57 }, (_, i) => (
                      <SelectItem key={i+1} value={`voyage-${i+1}`}>Voyage {i+1}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button type="submit" className="px-6 py-2 bg-blue-500 text-gray-700 rounded-md hover:bg-blue-600 transition-colors">
          Apply Filter
        </button>
        <button type="button" onClick={handleClear} className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
