import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import AppLayout from "./components/layout/AppLayout.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppLayout>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 className={"text-5xl font-bold text-primary"}>
            Czy są tu polskie litery? Nękać. Dźwirzyno. Kroplówa. Żaden. Bąbel.
          </h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </AppLayout>
  );
}

export default App;
