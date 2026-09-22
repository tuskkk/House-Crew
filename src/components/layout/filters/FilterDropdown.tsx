import { Check } from "lucide-react";
import Dropdown from "../../ui/Dropdown";
import Button from "../../ui/Button";
import type { Task } from "../../../types/task";
import { useState } from "react";

interface FilterDropdownProps {
  categoryName: string;
  options: Task[];
  selectedOptions: string[];
  handleSubmitFilters: (options: string[]) => void;
}

export default function FilterDropdown({
  categoryName,
  options,
  selectedOptions,
  handleSubmitFilters,
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
    <Dropdown>
      {options.map((option) => (
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 text-sm text-text-primary transition hover:bg-secondary"
          onClick={() => handleOptionClick(option.id)}
        >
          {optionsChosen.includes(categoryName) && (
            <Check size={16} className="text-primary" />
          )}
          <span>{option.name}</span>
        </button>
      ))}
      <Button
        className="w-full"
        onClick={() => handleSubmitFilters(optionsChosen)}
        version="secondary"
      >
        Done
      </Button>
    </Dropdown>
  );
}
