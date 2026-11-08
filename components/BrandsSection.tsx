"use client";

const FEATURES = [
  { 
    text: "Paneles solares y almacenamiento de baterías de primera categoría." 
  },
  { 
    text: "Garantía internacional respaldada por fabricantes." 
  },
  {   
    text: "Equipos certificados con soporte técnico." 
  },
];

export default function BrandsSection() {
  return (
    <section id="energia"className="bg-white my-12 relative w-full overflow-hidden font-sans">
      
      <div className="max-w-[93.5%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        
        {/* Columna Izquierda: Imagen con tamaño automático basado en su resolución real */}
        <div className="flex-1 w-full flex justify-center lg:justify-start">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              src="/marcaslideres.avif"
              className="w-full h-auto max-w-full object-contain block"
              alt="Marcas líderes en tecnología solar"
            />
          </div>
        </div>

        {/* Columna Derecha: Contenido */}
        <div className="flex-1 w-full px-4 md:px-0">
          <p className="text-black text-sm font-semibold tracking-widest uppercase mb-3 opacity-60">
            RESPALDO TECNOLÓGICO
          </p>
          
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Tecnología solar de clase mundial
          </h2>
          
          <p className="text-black text-lg mb-8 leading-relaxed opacity-80">
            Trabajamos con marcas líderes
          </p>

          {/* Lista de características */}
          <div className="space-y-5 mb-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 text-black">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-black text-lg font-medium leading-snug tracking-wide">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}