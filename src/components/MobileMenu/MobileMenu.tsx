import { useState } from 'react'
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="">
      <button 
        onClick={toggle} 
        aria-label="Open Menu"
        className="cursor-pointer"
      >
        <Menu />
      </button>

      {isOpen && (
        <nav className="absolute top-0 left-0 z-30 w-screen min-h-screen dark:bg-zinc-950/70 flex flex-col items-center justify-center gap-8 ">
          <button 
            onClick={closeMenu}
            aria-label="Close Menu"
            className="absolute right-4 top-4 cursor-pointer text-zinc-200"
          >
            <X size={28} />
          </button>
          <a 
            href="#home" 
            onClick={closeMenu}
            className="text-base text-zinc-200 hover:text-zinc-50"
          >Home</a>
          <a 
            href="#about" 
            onClick={closeMenu}
            className="text-base text-zinc-200 hover:text-zinc-50"
          >Sobre</a>
          <a 
            href="#projects" 
            onClick={closeMenu}
            className="text-base text-zinc-200 hover:text-zinc-50"
          >Projetos</a>
          <a 
            href="#skills" 
            onClick={closeMenu}
            className="text-base text-zinc-200 hover:text-zinc-50"
          >Habilidades</a>
          <a 
            href="#article" 
            onClick={closeMenu}
            className="text-base text-zinc-200 hover:text-zinc-50"
          >Artigos</a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="text-base text-zinc-200 hover:text-zinc-50"
          >Contato</a>
          
          

        </nav>
      )}
    </div>
  )
}
