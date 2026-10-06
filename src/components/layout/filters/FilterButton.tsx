import Button from "../../ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import type { Category } from "../../../types/category";

interface FilterButtonProps {
  filterName: string;
  options: Category[];
  isDisabled?: boolean;
  selectedOptions: string[];
  submitOptions: (options: string[]) => void;
  dropdownChildren?: React.ReactNode;
}

export default function FilterButton({
  filterName,
  options,
  isDisabled = false,
  selectedOptions,
  submitOptions,
  dropdownChildren,
}: FilterButtonProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmitFilters = (filters: string[]) => {
    submitOptions(filters);
    setIsFilterOpen((prev) => !prev);
  };
  return (
    <div className="relative w-full">
      <Button
        className="md:w-36"
        onClick={() => setIsFilterOpen((prev) => !prev)}
        aria-expanded={isFilterOpen}
        aria-haspopup="menu"
        disabled={isDisabled}
      >
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm font-medium">{filterName}</span>
          {isFilterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </Button>
      {isFilterOpen && !isDisabled && (
        <FilterDropdown
          options={options}
          selectedOptions={selectedOptions}
          handleSubmitFilters={handleSubmitFilters}
          children={dropdownChildren}
        />
      )}
    </div>
  );
}
