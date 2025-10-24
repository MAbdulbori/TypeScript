import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/60 shadow-md"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
          FigmaMaster
        </h1>

        <nav>
          <Link to="/hero" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Hero</Link>
          <Link to="/about" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">About</Link>
          <Link to="/features" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Features</Link>
          <Link to="/pricing" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Pricing</Link>
          <Link to="/contact" className="mx-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Contact</Link>
        </nav>

        <a
          href="#pricing"
          className="
            hidden sm:inline-block
            bg-gradient-to-r from-indigo-500 to-purple-600
            dark:from-indigo-600 dark:to-purple-700
            text-white px-5 py-2 rounded-full
            font-semibold shadow-md
            hover:opacity-90 active:scale-95
            transition-all duration-300
          "
        >
          Boshlash
        </a>
      </div>
    </header>
  );
}
