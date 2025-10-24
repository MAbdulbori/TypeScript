const plans = [
  {
    name: "Basic",
    price: "$9 / oy",
    features: ["10 ta loyiha", "Asosiy qo‘llab-quvvatlash", "Cheklangan komponentlar"],
  },
  {
    name: "Pro",
    price: "$29 / oy",
    features: ["Cheksiz loyiha", "Premium shablonlar", "24/7 qo‘llab-quvvatlash"],
    highlight: true,
  },
  {
    name: "Business",
    price: "$59 / oy",
    features: ["Jamoa uchun hisob", "Maxsus dizayn xizmatlari", "Hamkorlik imkoniyati"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        py-20 px-6
        bg-gray-50 text-gray-900
        dark:bg-gray-950 dark:text-gray-100
        transition-colors duration-500
      "
    >
      <h2 className="text-4xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-14">
        Tarif rejalari
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`
              relative rounded-2xl p-8 shadow-lg
              bg-white/80 dark:bg-gray-900/70
              backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50
              hover:-translate-y-2 hover:shadow-2xl transition-all duration-500
              ${p.highlight ? "border-4 border-indigo-500 dark:border-indigo-400 scale-105" : ""}
            `}
          >
            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 dark:bg-indigo-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                Tavsiya qilinadi
              </div>
            )}

            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{p.name}</h3>
            <p className="text-3xl font-extrabold my-6">{p.price}</p>

            <ul className="text-gray-600 dark:text-gray-300 mb-8 space-y-2">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2">
                  <span className="text-green-500 dark:text-green-400">✔️</span> {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`
                w-full inline-block text-center
                px-6 py-3 rounded-full font-semibold shadow-md
                transition-all duration-300
                ${p.highlight
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-purple-600 hover:to-indigo-500"
                  : "bg-indigo-100 dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {p.highlight ? "Tanlash" : "Boshlash"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
