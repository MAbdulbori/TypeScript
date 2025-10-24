export default function About() {
  return (
    <section
      id="about"
      className="
        py-20 px-6 text-center
        bg-white text-gray-800
        dark:bg-gray-950 dark:text-gray-100
        transition-colors duration-500
      "
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="
            text-4xl font-extrabold mb-6
            text-indigo-600 dark:text-indigo-400
            tracking-tight
          "
        >
          Biz haqimizda
        </h2>

        <p
          className="
            text-lg leading-relaxed text-gray-600 dark:text-gray-300
          "
        >
          <span className="font-semibold text-indigo-500 dark:text-indigo-400">
            FigmaMaster
          </span>{" "}
          — bu dizaynerlar, dasturchilar va startaplar uchun yaratilgan onlayn
          platforma. Maqsadimiz — sizning g‘oyalaringizni vizual shaklga
          keltirish va ilhom beruvchi interfeyslar yaratish.
        </p>

        <div
          className="
            mt-10 h-px w-24 mx-auto
            bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
            dark:from-indigo-500 dark:via-purple-600 dark:to-pink-600
            rounded-full
          "
        ></div>
      </div>
    </section>
  );
}
