import Button from "../../ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
/*import FilterDropdown from "./FilterDropdown";*/

interface FilterButtonProps {
  categoryName: string;
  isDisabled?: boolean;
}

export default function FilterButton({
  categoryName,
  isDisabled = false,
}: FilterButtonProps) {
  const [isFilterOpen, handleFilterToggle] = useState(false);
  return (
    <div className="relative">
      <Button
        onClick={() => handleFilterToggle(!isFilterOpen)}
        aria-expanded={isFilterOpen}
        aria-haspopup="menu"
        disabled={isDisabled}
      >
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm font-medium text-text-primary">
            {categoryName}
          </span>
          {isFilterOpen ? (
            <ChevronUp
              size={16}
              className="hidden text-text-secondary sm:block"
            />
          ) : (
            <ChevronDown
              size={16}
              className="hidden text-text-secondary sm:block"
            />
          )}
        </div>
      </Button>
      {/*(isFilterOpen && !isDisabled) &&(
        <FilterDropdown
          categoryName={categoryName}
          onOptionClick={onOptionClick}
          handleFilterToggle={handleFilterToggle}
        />
      )*/}
    </div>
  );
}
