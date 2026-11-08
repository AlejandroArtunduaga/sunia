"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TELEFONO } from "@/lib/contacto";

const NAV_LINKS = [
  { label: "Productos", href: "/#productos" },
  { label: "Energía", href: "/#energia" },
  { label: "Cobertura", href: "/#cobertura" },
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
      // Celular: barra oscura como el modelo de referencia; escritorio: barra blanca
      className={`fixed top-0 left-0 right-0 z-[100] transform transition-all duration-700 ease-in-out bg-[#0c0d11] md:bg-white ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        // Suavizado el sombreado del scroll para mantener consistencia con el diseño limpio
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "none" : "1px solid rgba(0,0,0,0.05)"
      }}
    >
      <nav className="md:max-w-[93.5%] mx-auto px-4 md:px-10 flex items-center justify-between h-14 w-full">
        <div className="flex items-center gap-4">
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
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

          {/* Logo: versión transparente sobre la barra oscura del celular */}
          <Link href="/" className="flex items-center gap-1 select-none">
            <img src="/logo-sunia-transparente.png" alt="Logo Sunia" className="md:hidden h-5 w-auto object-contain" />
            <img src="/diseño-nombre.png" alt="Logo Sunia" className="hidden md:block h-6 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-black text-sm font-semibold hover:text-[#cc0000] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/cotizar"
            // Se cambia bg-white por un tono sutil grisáceo/azul que haga mejor contraste o hover limpio
            className="bg-[#f4f4f4] text-[#171a20] text-sm font-bold px-5 py-2 rounded hover:bg-gray-200 transition-colors duration-200 border border-transparent hover:border-black/5"
          >
            Obtener cotización
          </Link>
        </div>

        {/* Right actions (celular): cotizar + llamar */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/cotizar"
            className="bg-white text-[#0c0d11] text-sm font-medium px-4 py-1.5 rounded-full"
          >
            Cotizar
          </Link>
          <a
            href={TELEFONO.href}
            aria-label={`Llamar al ${TELEFONO.visible}`}
            className="w-9 h-9 rounded-full bg-white text-[#0c0d11] flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#171a20] border-t border-[#393c41]">
          {/* Se hereda el mismo colchón izquierdo px-4 en móvil para el menú desplegable */}
          <ul className="flex flex-col py-2 px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-white text-sm font-semibold hover:text-[#cc0000] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
