import { Check } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import Button from "../../ui/Button";
import { useState } from "react";

type FilterDropdownProps<T extends string> = {
  options: {
    id: T;
    name: string;
  }[];
  selectedOptions: T[];
  handleSubmitFilters: (options: T[]) => void;
  children?: React.ReactNode;
};

export const FilterDropdown = <T extends string>({
  options,
  selectedOptions,
  handleSubmitFilters,
  children,
}: FilterDropdownProps<T>) => {
  const [optionsChosen, setOptionsChosen] = useState<T[]>(selectedOptions);

  const handleOptionClick = (option: T) => {
    if (!optionsChosen.includes(option)) {
      setOptionsChosen([...optionsChosen, option]);
    } else {
      setOptionsChosen(optionsChosen.filter((o) => o !== option));
    }
  };
  return (
    <Dropdown className="-left-6 flex flex-col overflow-hidden max-h-96 z-50">
      <div className="relative flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent py-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-1 py-2 text-sm text-text-primary transition hover:bg-secondary lg:px-3"
            onClick={() => handleOptionClick(option.id)}
          >
            <Check
              size={16}
              className={
                optionsChosen.includes(option.id) ? "visible" : "invisible"
              }
            />
            <span>{option.name}</span>
          </button>
        ))}
        <div className="pl-2 py-1">{children}</div>
      </div>
      <div className="shrink-0 border-t border-disabled p-2">
        <Button
          className="w-full py-2"
          onClick={() => handleSubmitFilters(optionsChosen)}
          version="secondary"
        >
          Done
        </Button>
      </div>
    </Dropdown>
  );
};
