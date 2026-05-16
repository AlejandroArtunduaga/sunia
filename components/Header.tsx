"use client";

import { useEffect, useState } from "react";
import LogoSunia from '@/components/LogoSunia';

const NAV_LINKS = [
  { label: "Productos", href: "#productos" },
  { label: "Energía", href: "#energia" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Empresa", href: "#empresa" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
        setMenuOpen(false); 
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transform transition-all duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        background: "#ffffff",
        // Suavizado el sombreado del scroll para mantener consistencia con el diseño limpio
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.05)"
      }}
    >
      {/* AHORA: El contenedor interno se alinea perfectamente a la cuadrícula global de la app */}
      <nav className="max-w-[93.5%] mx-auto px-4 md:px-10 flex items-center justify-between h-14 w-full"> 
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 select-none">
          <img 
            src="/diseño-nombre.png" 
            alt="Logo Sunia" 
            className="h-6 w-auto object-contain" 
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-black text-sm font-semibold hover:text-[#cc0000] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#cotizar"
            // Se cambia bg-white por un tono sutil grisáceo/azul que haga mejor contraste o hover limpio
            className="bg-[#f4f4f4] text-[#171a20] text-sm font-bold px-5 py-2 rounded hover:bg-gray-200 transition-colors duration-200 border border-transparent hover:border-black/5"
          >
            Obtener cotización
          </a>
        </div>

        {/* Mobile hamburger */}
        {/* CORREGIDO: de 'text-white' a 'text-[#171a20]' para que se vea sobre el fondo blanco del header */}
        <button
          className="md:hidden text-[#171a20] p-1 raw-button-focus"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#171a20] border-t border-[#393c41]">
          {/* Se hereda el mismo colchón izquierdo px-4 en móvil para el menú desplegable */}
          <ul className="flex flex-col py-2 px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-3 text-white text-sm font-semibold hover:text-[#cc0000] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-4">
              <a
                href="#cotizar"
                className="block bg-[#cc0000] text-white text-sm font-bold px-5 py-3 rounded text-center hover:bg-red-700 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Cotizar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}