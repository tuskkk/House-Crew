import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionProps = {
  title: string;
  initiallyOpen?: boolean;
  children: ReactNode;
};

const Accordion = ({ title, initiallyOpen, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(!!initiallyOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full mb-4">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between bg-background rounded shadow-md px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:py-2"
      >
        <h2 className="text-md text-primary font-semibold tracking-wide md:text-lg">
          {title}
        </h2>
        <div className="flex items-center justify-center bg-secondary rounded shadow-md px-2 py-2 md:px-3 md:py-3">
          {isOpen ? (
            <ChevronUp
              size={28}
              color="#92140c"
              strokeWidth={2}
              aria-hidden="true"
            />
          ) : (
            <ChevronDown
              size={28}
              color="#92140c"
              strokeWidth={2}
              aria-hidden="true"
            />
          )}
        </div>
      </button>
      {isOpen && <div className="px-10 py-6">{children}</div>}
    </div>
  );
};

export default Accordion;
