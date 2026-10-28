import { Header } from "../components/landing/Header";
import { HeroSection } from "../components/landing/HeroSection";

export default function LandingPage() {
  return (
    <div className="flex min-w-0 flex-1 flex-col min-h-screen bg-background text-text-primary">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[var(--layout-width-xl)] px-2 pt-10 pb-6 md:px-4 lg:px-0 lg:pt-15">
          <HeroSection />
        </div>
      </main>
    </div>
  );
}
