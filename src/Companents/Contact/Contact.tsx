export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 px-6 text-center
        bg-gray-50 text-gray-800
        dark:bg-gray-950 dark:text-gray-100
        transition-colors duration-500
      "
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="
            text-4xl font-extrabold mb-8
            text-indigo-600 dark:text-indigo-400
            tracking-tight
          "
        >
          Biz bilan bog‘laning
        </h2>

        <form
          className="
            bg-white/70 dark:bg-gray-900/60
            backdrop-blur-xl shadow-xl
            rounded-2xl p-8
            flex flex-col gap-5
            border border-gray-200/50 dark:border-gray-800/50
            transition-all duration-500
          "
        >
          <input
            type="text"
            placeholder="Ismingiz"
            required
            className="
              p-3 rounded-lg
              bg-gray-100 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-800 dark:text-gray-200
              focus:ring-2 focus:ring-indigo-500 focus:outline-none
              transition
            "
          />

          <input
            type="email"
            placeholder="Email manzilingiz"
            required
            className="
              p-3 rounded-lg
              bg-gray-100 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-800 dark:text-gray-200
              focus:ring-2 focus:ring-indigo-500 focus:outline-none
              transition
            "
          />

          <textarea
            placeholder="Xabaringizni yozing..."
            required
            className="
              p-3 h-40 rounded-lg resize-none
              bg-gray-100 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-800 dark:text-gray-200
              focus:ring-2 focus:ring-indigo-500 focus:outline-none
              transition
            "
          />

          <button
            type="submit"
            className="
              py-3 rounded-full font-semibold
              bg-gradient-to-r from-indigo-500 to-purple-600
              dark:from-indigo-600 dark:to-purple-700
              text-white shadow-md
              hover:opacity-90 active:scale-95
              transition-all duration-300
            "
          >
            Yuborish
          </button>
        </form>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Biz har bir xabaringizni qadrlaymiz va imkon qadar tez javob beramiz.
        </p>
      </div>
    </section>
  );
}
