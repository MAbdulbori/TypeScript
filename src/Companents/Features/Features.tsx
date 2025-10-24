const features = [
  {
    title: "⚡️ Tezkor Ishlash",
    text: "Dizayn jarayonini bir necha baravar tezlashtiring.",
  },
  {
    title: "🎨 Cheksiz Kreativlik",
    text: "Har bir loyiha — bu o‘ziga xos san’at asari.",
  },
  {
    title: "📱 Responsive Dizayn",
    text: "Har qanday qurilmada mukammal ko‘rinish.",
  },
  {
    title: "🤝 Hamkorlik",
    text: "Dasturchilar va dizaynerlar bir jamoada ishlaydi.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="
        py-20 px-6
        bg-gray-50 text-gray-800
        dark:bg-gray-950 dark:text-gray-100
        transition-colors duration-500
      "
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="
            text-center text-4xl font-extrabold mb-14
            text-indigo-600 dark:text-indigo-400
            tracking-tight
          "
        >
          Afzalliklarimiz
        </h2>

        <div
          className="
            grid gap-8
            sm:grid-cols-2 lg:grid-cols-4
          "
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="
                group
                rounded-2xl p-8 text-center
                bg-white/70 dark:bg-gray-900/60
                backdrop-blur-lg shadow-lg
                border border-gray-200/50 dark:border-gray-800/50
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-500
              "
            >
              <h3
                className="
                  text-xl font-semibold mb-3
                  text-indigo-600 dark:text-indigo-400
                  group-hover:text-purple-500 dark:group-hover:text-purple-400
                  transition
                "
              >
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
