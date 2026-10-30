import GitHub from "../../assets/svg/GitHub.svg";
import Logo from "../common/Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background px-4 py-8 md:px-8 md:py-10 xl:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
        <Logo />
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HouseCrew on GitHub"
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-text-secondary transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <img src={GitHub} alt="" aria-hidden="true" className="size-5" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};
