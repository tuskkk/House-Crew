import { Search } from "lucide-react";
import type { SubmitEvent } from "react";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch?: (query: string) => void;
  placeholder: string;
}

const SearchBar = ({
  onSearch,
  placeholder,
  query,
  setQuery,
}: SearchBarProps) => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-11.5 max-w-md overflow-hidden rounded-sm border border-disabled bg-white"
    >
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label="{placeholder}"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Search tasks"
        className="flex w-12 shrink-0 items-center justify-center bg-accent text-white transition-colors cursor-pointer hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
      >
        <Search size={20} strokeWidth={2} aria-hidden="true" />
      </button>
    </form>
  );
};

export default SearchBar;
