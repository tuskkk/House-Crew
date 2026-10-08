import Button from "../../ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { FilterDropdown } from "./FilterDropdown";

type FilterProps<T extends string> = {
  filterName: string;
  options: {
    id: T;
    name: string;
  }[];
  isDisabled?: boolean;
  selectedOptions: T[];
  submitOptions: (options: T[]) => void;
  dropdownChildren?: React.ReactNode;
};

export const Filter = <T extends string>({
  filterName,
  options,
  isDisabled = false,
  selectedOptions,
  submitOptions,
  dropdownChildren,
}: FilterProps<T>) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmitFilters = (filters: T[]) => {
    submitOptions(filters);
    setIsFilterOpen((prev) => !prev);
  };
  return (
    <div className="relative">
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
};
