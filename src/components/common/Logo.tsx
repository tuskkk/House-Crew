import { Link } from "react-router";
import logoDesktop from "../../assets/logo_desktop.webp";
import logoMobile from "../../assets/logo_mobile.webp";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link to="/" aria-label="HouseCrew - strona główna" className={className}>
      <picture>
        <source media="(min-width: 768px)" srcSet={logoDesktop} />

        <img src={logoMobile} alt="HouseCrew" className="h-10 w-auto" />
      </picture>
    </Link>
  );
};

export default Logo;
