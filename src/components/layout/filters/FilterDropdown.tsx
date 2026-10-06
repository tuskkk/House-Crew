import { Check } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import Button from "../../ui/Button";
import type { Category } from "../../../types/category";
import { useState } from "react";

interface FilterDropdownProps {
  options: Category[];
  selectedOptions: string[];
  handleSubmitFilters: (options: string[]) => void;
  children?: React.ReactNode;
}

export default function FilterDropdown({
  options,
  selectedOptions,
  handleSubmitFilters,
  children,
}: FilterDropdownProps) {
  const [optionsChosen, setOptionsChosen] = useState<string[]>(selectedOptions);

  const handleOptionClick = (option: string) => {
    if (!optionsChosen.includes(option)) {
      setOptionsChosen([...optionsChosen, option]);
    } else {
      setOptionsChosen(optionsChosen.filter((o) => o !== option));
    }
  };
  return (
    <Dropdown className="-left-6 flex h-80 flex-col overflow-hidden">
      <div className="relative flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent py-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-text-primary transition hover:bg-secondary"
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
}
