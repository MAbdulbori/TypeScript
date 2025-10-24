export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md flex justify-between items-center px-8 py-4 z-50">
      <h1 className="text-2xl font-bold text-primary">FigmaMaster</h1>
      <nav>
        <ul className="flex gap-6 text-text font-medium">
          <li><a href="#about" className="hover:text-primary">Haqimizda</a></li>
          <li><a href="#features" className="hover:text-primary">Afzalliklar</a></li>
          <li><a href="#pricing" className="hover:text-primary">Narxlar</a></li>
          <li><a href="#contact" className="hover:text-primary">Aloqa</a></li>
        </ul>
      </nav>
      <a href="#pricing" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition">
        Boshlash
      </a>
    </header>
  );
}
