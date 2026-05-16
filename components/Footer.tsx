"use client";

const FOOTER_LINKS: Record<string, string[]> = {
  Productos: ["Paneles Solares", "Almacenamiento", "Cargadores EV", "Monitoreo IA"],
  Empresa: ["Nosotros", "Blog", "Empleo", "Prensa"],
  Soporte: ["Instalación", "Garantía", "Servicio técnico", "FAQ"],
  Legal: ["Privacidad", "Términos de uso", "Cookies", "PQRS"],
};

export default function Footer() {
  return (
    // Mantenemos el footer ocupando el 100% del ancho con un borde superior sutil unificado (border-black/5)
    <footer className="bg-white border-t border-black/5" id="contacto">
      
      {/* AHORA: max-w-[93.5%] centrado con px-4 en móvil y md:px-10 en desktop */}
      {/* Cambiado py-14 a py-10 para mantener la misma altura de colchón vertical */}
      <div className="max-w-[93.5%] mx-auto px-4 md:px-10 py-10">
        
        {/* Links grid */}
        {/* Unificado mb-12 a mb-10 para mantener simetría de distancias */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[#171a20] text-sm font-bold mb-4 tracking-wide">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#5c5e62] text-xs hover:text-[#171a20] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="text-[#171a20] font-bold text-base tracking-widest">
            MH<span className="text-[#cc0000]">Energy</span>
          </span>

          <p className="text-[#5c5e62] text-xs text-center font-bold">
            SUNIA © {new Date().getFullYear()}   &nbsp; Todos los derechos reservados. · Colombia
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-[#5c5e62] text-xs hover:text-[#171a20] transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-[#5c5e62] text-xs hover:text-[#171a20] transition-colors">
              Términos
            </a>
            <a href="#" className="text-[#5c5e62] text-xs hover:text-[#171a20] transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
