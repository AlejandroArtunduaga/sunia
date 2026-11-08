import Link from "next/link";

// Enlaces sin href se muestran como "Próximamente" (aún no existe la página)
const FOOTER_LINKS: Record<string, { label: string; href?: string }[]> = {
  Productos: [
    { label: "Paneles Solares", href: "/paneles-solares" },
    { label: "Cargadores", href: "/cargadores" },
    { label: "Almacenamiento", href: "/almacenamiento" },
    { label: "Almacenamiento BESS", href: "/almacenamiento-bess" },
    { label: "Monitoreo AI", href: "/monitoreo" },
  ],
  Soluciones: [
    { label: "Hogar", href: "/hogar" },
    { label: "Industrial", href: "/industrial" },
    { label: "Generación remota", href: "/generacion-remota" },
  ],
  Sunia: [
    { label: "Tecnología", href: "/#energia" },
    { label: "Cobertura", href: "/#cobertura" },
    { label: "Cotizar", href: "/cotizar" },
  ],
  Legal: [{ label: "Política de privacidad", href: "/privacidad" }],
};

export default function Footer() {
  return (
    // Mantenemos el footer ocupando el 100% del ancho con un borde superior sutil unificado (border-black/5)
    <footer className="bg-white border-t border-black/5" id="contacto">
      
      {/* max-w-[93.5%] centrado con px-4 en móvil y md:px-10 en desktop */}
      <div className="max-w-[93.5%] mx-auto px-4 md:px-10 py-10">
        
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[#171a20] text-sm font-bold mb-4 tracking-wide">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-[#5c5e62] text-xs hover:text-[#171a20] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <span className="text-[#5c5e62]/70 text-xs">
                        {link.label} · Próximamente
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar: Completamente centrada con diseño limpio */}
        <div className="border-t border-black/5 pt-8 flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-[#5c5e62] text-xs font-bold">
            SUNIA © {new Date().getFullYear()}   &nbsp; Todos los derechos reservados. · Colombia
          </p>
        </div>
        
      </div>
    </footer>
  );
}
