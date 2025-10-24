import React from "react";
import { motion } from "framer-motion";

type Feature = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Tez boshlash",
    description: "Figma dizaynlaringizni tez va aniq kodga aylantiring.",
  },
  {
    id: 2,
    title: "Moslashuvchan dizayn",
    description: "Har qanday ekran o'lchamiga moslashadi — mobildan desktopgacha.",
  },
  {
    id: 3,
    title: "Qayta foydalanish",
    description: "Komponentlar modul tarzda tuzilgan, qayta ishlatish oson.",
  },
];

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 mt-20">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Figma dizaynlaringizni <span className="text-indigo-600">TypeScript</span> komponentlariga aylantiring
          </h1>
          <p className="text-gray-600 max-w-xl">
            Ushbu demo Home bo'limi — Figma dan kelgan dizayn asosida tuzilgan, TailwindCSS va framer-motion bilan
            interaktiv va moslashuvchan layout.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button className="px-5 py-3 bg-indigo-600 text-white rounded-md font-medium shadow">Bepul boshlash</button>
            <button className="px-5 py-3 border border-gray-200 rounded-md font-medium">Demo ko‘rish</button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="text-sm text-gray-500">Ishlatganlar:</div>
            <div className="flex -space-x-2">
              <img src="https://via.placeholder.com/40" alt="logo" className="w-10 h-10 rounded-full border-2 border-white shadow" />
              <img src="https://via.placeholder.com/40" alt="logo" className="w-10 h-10 rounded-full border-2 border-white shadow" />
              <img src="https://via.placeholder.com/40" alt="logo" className="w-10 h-10 rounded-full border-2 border-white shadow" />
            </div>
          </div>
        </motion.div>

        {/* Right - card / mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full flex justify-center"
        >
          <div className="w-full max-w-md md:max-w-lg bg-white rounded-2xl shadow-lg p-6">
            <div className="h-44 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
              {/* this would be where a design/mockup image goes */}
              <img src="https://via.placeholder.com/420x200" alt="mockup" className="rounded-md shadow-inner" />
            </div>

            <div className="mt-4">
              <h3 className="font-semibold">Dashboard preview</h3>
              <p className="text-sm text-gray-500">Figma dizaynidan olingan hero va karta namunasi.</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg text-center">Stat 1</div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">Stat 2</div>
                <div className="p-3 bg-gray-50 rounded-lg text-center">Stat 3</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <article key={f.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center font-semibold text-indigo-600">{f.id}</div>
              <h4 className="mt-4 font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-gray-500">{f.description}</p>
              <button className="mt-4 text-sm text-indigo-600 font-medium">Batafsil</button>
            </article>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Figma dan to'liq TypeScript komponentlariga</h2>
            <p className="text-indigo-100 mt-2 max-w-xl">Start building faster with consistent components and responsive styles.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 bg-white text-indigo-600 rounded-md font-medium">Endi boshlash</button>
            <button className="px-5 py-3 border border-white/30 rounded-md font-medium">Kontakt</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-500">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Figma2TS. Barcha huquqlar himoyalangan.</div>
          <div className="mt-3 md:mt-0">Made with ♥ — Tailwind + TypeScript</div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
