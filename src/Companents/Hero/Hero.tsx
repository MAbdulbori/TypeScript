export default function Hero() {
  return (
    <section
      className="
        flex flex-col md:flex-row items-center justify-between
        px-8 py-20
        bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
        dark:from-indigo-800 dark:via-purple-800 dark:to-pink-900
        text-white transition-colors duration-700
      "
    >
      <div className="max-w-lg">
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">
          Dizaynlar orqali <span className="text-yellow-300">ilhom</span> oling 🎨
        </h2>
        <p className="mb-8 text-lg text-white/90">
          <span className="font-semibold text-yellow-200">FigmaMaster</span> —
          bu professional UI/UX dizayn yaratishda yordam beradigan zamonaviy platforma.
          Kreativlik, tezlik va sifat — barchasi bu yerda.
        </p>
        <a
          href="#pricing"
          className="
            bg-white text-indigo-700 dark:text-indigo-800
            px-6 py-3 rounded-full font-semibold shadow-lg
            hover:bg-yellow-400 hover:text-indigo-900
            transition-all duration-300
          "
        >
          Tariflarni ko‘rish
        </a>
      </div>

      <div className="relative mt-12 md:mt-0 w-full md:w-1/2 flex justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div
            className="
              absolute inset-0 rounded-full
              bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500
              dark:from-pink-500 dark:via-purple-600 dark:to-indigo-600
              animate-pulse shadow-2xl blur-[2px]
            "
          ></div>

          <div
            className="
              absolute inset-8 rounded-full
              bg-white/20 dark:bg-white/10 backdrop-blur-xl
              shadow-inner border border-white/20
            "
          ></div>

          <div className="absolute -top-6 left-10 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 -left-6 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 right-10 w-5 h-5 bg-indigo-300 dark:bg-indigo-400 rounded-full animate-bounce"></div>

          <div
            className="
              absolute -inset-10 rounded-full
              bg-gradient-to-tr from-pink-400/40 via-purple-500/30 to-indigo-500/20
              blur-3xl opacity-70 animate-pulse
            "
          ></div>
        </div>
      </div>
    </section>
  );
}
