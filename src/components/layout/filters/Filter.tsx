import Button from "../../ui/Button";
import { DateFilterDropdown } from "../../layout/filters/DateFilterDropdown";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FilterDropdown } from "./FilterDropdown";
import { CountBadge } from "../../ui/CountBadge";
import type { DateFiltersType } from "../../../types/task";

type FilterProps<T extends string> = {
  filterName: string;
  options: {
    id: T;
    name: string;
  }[];
  isDisabled?: boolean;
  selectedOptions: T[] | DateFiltersType;
  submitOptions: (options: T[]) => void;
  dropdownChildren?: React.ReactNode;
  className?: string;
};

export const Filter = <T extends string>({
  filterName,
  options,
  isDisabled = false,
  selectedOptions,
  submitOptions,
  dropdownChildren,
  ...props
}: FilterProps<T>) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });

  const dueDateFiltersCount = (dateObj: DateFiltersType) =>
    +!!dateObj.from + +!!dateObj.to;
  const isDateFilter = !Array.isArray(selectedOptions);
  const filtersChosenCount = isDateFilter
    ? dueDateFiltersCount(selectedOptions as DateFiltersType)
    : selectedOptions.length;
  const showCountBadge = filtersChosenCount > 0;

  useEffect(() => {
    if (!isFilterOpen || !filterButtonRef.current) return;

    const updatePosition = () => {
      const rect = filterButtonRef.current?.getBoundingClientRect();

      if (!rect) return;

      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isFilterOpen]);

  const handleSubmitFilters = (filters: T[]) => {
    submitOptions(filters);
    setIsFilterOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <Button
        ref={filterButtonRef}
        className={`${props.className || ""} md:w-36`}
        onClick={() => setIsFilterOpen((prev) => !prev)}
        aria-expanded={isFilterOpen}
        aria-haspopup="menu"
        disabled={isDisabled}
      >
        <div className="flex items-center justify-center gap-1">
          <span className="text-sm font-medium">{filterName}</span>
          {isFilterOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        {showCountBadge && (
          <CountBadge
            className="absolute top-1 right-1 md:top-1.5 md:right-4"
            count={filtersChosenCount}
            label="elements chosen"
          />
        )}
      </Button>
      {filterName !== "Due date" &&
        isFilterOpen &&
        !isDisabled &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: dropdownPosition.top,
              left: dropdownPosition.left + 10,
              zIndex: 2,
            }}
          >
            <FilterDropdown
              options={options}
              selectedOptions={selectedOptions as T[]}
              handleSubmitFilters={handleSubmitFilters}
              children={dropdownChildren}
            />
          </div>,
          document.body,
        )}
      {filterName === "Due date" &&
        isFilterOpen &&
        !isDisabled &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: dropdownPosition.top,
              left: dropdownPosition.left - 28,
              zIndex: 2,
            }}
          >
            <DateFilterDropdown
              closeDateDropdown={() => setIsFilterOpen(false)}
            />
          </div>,
          document.body,
        )}
    </div>
  );
};
