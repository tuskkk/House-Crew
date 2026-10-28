import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fff8f0]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-5 lg:px-12">
        <Logo />
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-primary px-6 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary/5"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get started
          </Link>
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex size-11 items-center justify-center rounded-lg text-[#111d4a] transition-colors hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
        >
          {isMenuOpen ? (
            <X size={26} strokeWidth={1.8} />
          ) : (
            <Menu size={26} strokeWidth={1.8} />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-black/5 bg-background px-8 pb-6 pt-4 shadow-lg md:px-8 lg:hidden"
        >
          <div className="mt-5 flex flex-col gap-3 border-t border-black/10 pt-5">
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Get started
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary px-5 font-semibold text-primary transition-colors hover:bg-primary/5"
            >
              Log in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
