const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 text-sm text-text-secondary md:flex-row md:justify-between md:px-6">
        <p>© 2026 HouseCrew</p>

        <nav aria-label="Footer navigation">
          <ul className="flex gap-4">
            <li>
              <a href="#" className="transition-colors hover:text-text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-text-primary">
                Terms of Service
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
