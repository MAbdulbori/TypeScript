export default function Footer() {
  return (
    <footer
      className="
        relative py-8 px-4 text-center
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        dark:from-indigo-700 dark:via-purple-800 dark:to-pink-800
        text-white
        transition-colors duration-500
        overflow-hidden
      "
    >
      <div
        className="
          absolute top-0 left-0 w-full h-1
          bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
          dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500
        "
      ></div>

      <p className="relative z-10 text-sm sm:text-base font-medium tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white/90">FigmaMaster</span> — barcha huquqlar himoyalangan.
      </p>

      <div
        className="
          absolute inset-0 opacity-20
          bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
          from-white via-transparent to-transparent
          dark:from-gray-400
        "
      ></div>
    </footer>
  );
}
