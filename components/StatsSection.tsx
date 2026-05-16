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
    <section id="marcas" className="bg-white my-12 relative w-full overflow-hidden font-sans">
      
      <div className="max-w-[93.5%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        
        {/* Columna Izquierda: Imagen con bordes redondeados */}
        <div className="flex-1 w-full">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/marcas-tecnologia.avif" 
              alt="Tecnología solar premium"
              className="w-full h-full object-cover"
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
          
          {/* LÍNEA MODIFICADA: Aquí verás el recuadro de color en tu editor para cambiarlo libremente */}
          <p className="text-[#171a20] text-lg mb-8 leading-relaxed">
            Trabajamos con marcas líderes
          </p>

          {/* Lista de características con tipografía Inter y color negro optimizado */}
          <div className="space-y-5 mb-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {/* Icono Check Minimalista y Tecnológico */}
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
                {/* Texto en negro puro, fuente Inter mediana y tracking limpio */}
                <p className="text-black text-lg font-medium leading-snug tracking-wide">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Botón Estilo Premium */}
          <a
            href="#cotizar"
            className="inline-block text-sm font-semibold px-8 py-3 rounded-full bg-black text-white hover:bg-[#171a20] transition-all duration-300 border border-black tracking-wide"
          >
            Ver catálogo
          </a>
        </div>

      </div>
    </section>
  );
}