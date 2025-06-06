import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-between relative h-16 px-4
    md:h-[70px] md:px-6 lg:h-20 lg:px-10">
      {/* Logo */}
      <section>
        <h1 className="font-bold text-base md:text-lg lg:text-xl">Tatyane Gonçalves</h1>
      </section>

      {/* Menu */}
      <nav className="hidden md:flex items-center gap-4 text-base  ">
        <a
          href="#home"
          className="text-zinc-700 hover:text-zinc-800 hover:font-semibold md:text-lg lg:text-xl"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-zinc-700 hover:text-zinc-800 hover:font-semibold md:text-lg lg:text-xl"
        >
          Sobre
        </a>
        <a
          href="#projects"
          className="text-zinc-700 hover:text-zinc-800 hover:font-semibold md:text-lg lg:text-xl"
        >
          Projetos
        </a>
        <a
          href="#skills"
          className="text-zinc-700 hover:text-zinc-800 hover:font-semibold md:text-lg lg:text-xl"
        >
          Habilidades
        </a>
        <a
          href="#article"
          className="text-zinc-700 hover:text-zinc-800 hover:font-semibold md:text-lg lg:text-xl"
        >
          Artigos
        </a>
        <a
          href="#contact"
          className="text-zinc-700 hover:text-zinc-800 hover:font-semibold md:text-lg lg:text-xl"
        >
          Contato
        </a>
      </nav>

      {/* Action (dark mode + menu mobile) */}
      <section className="flex items-center gap-4 md:hidden">
        <MobileMenu />
      </section>
    </header>
  );
}
