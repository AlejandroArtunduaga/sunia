"use client";

import { useState, useEffect } from 'react';

interface ProductSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  gradient?: string;
  theme?: string;
  quoteHref?: string;
  learnHref?: string;
}

export default function ProductSection({
  id,
  title = "Colombia se transforma con energía limpia",
  subtitle = "Ahora únete y sé parte de esto",
  label,
  gradient,
  theme = "light",
  quoteHref = "#",
  learnHref = "#",
}: ProductSectionProps) {
  
  const [kilowatts, setKilowatts] = useState(800000);

  useEffect(() => {
    const timer = setInterval(() => {
      setKilowatts(prev => prev + Math.floor(Math.random() * 50) + 1);
    }, 65); 

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const isDark = theme === "dark";

  const textGradientEmeraldStyle = {
    backgroundImage: `linear-gradient(
      165deg, 
      #0e2617 15%,   
      #22c55e 35%,  
      #1f2513 80%,  
      #0f2417 70%,  
      #081f0f 100%    
    )`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
    filter: 'contrast(1.1) brightness(1.1)',
    letterSpacing: '-0.02em',
  };

  return (
    <section
      id={id}
      // El contenedor externo mantiene la alineación global de la aplicación
      className="max-w-[93.5%] mx-auto my-12 rounded-lg overflow-hidden flex items-center justify-center shadow-sm"
      style={{ background: gradient || "#ededed" }}
    >
      {/* El grid interno aplica el px-4 md:px-10 para mantener la plomada del texto intacta */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-10 py-12 w-full">
        
        <div className="flex flex-col justify-center text-left"> 
          {label && (
            <p className="text-sm font-semibold tracking-widest uppercase mb-8 opacity-70">
              {label}
            </p>
          )}
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            <span style={textGradientEmeraldStyle}>
              Colombia se transforma <br />
              con energía limpia
            </span>
          </h2>
          
          <p className="text-lg mb-8 opacity-80 max-w-md text-[#393c41]">
            {subtitle}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-sm">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-[#171a20]">
                +450
              </p>
              <p className="text-sm text-[#393c41] opacity-80 mt-1 font-medium">
                Proyectos nacionales
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-semibold text-[#171a20] tracking-tight">
                {formatNumber(kilowatts)}
              </p>
              <p className="text-sm text-[#393c41] opacity-80 mt-1 font-medium">
                kW Generados (Total CO)
              </p>
            </div>
          </div>
          
          {/* Botones unificados con el carrusel de productos */}
          <div className="flex flex-col sm:flex-row gap-4 mt-1">
            <a 
              href={quoteHref} 
              className="text-sm font-medium px-8 py-2 rounded bg-[#3e6ae1] text-white hover:bg-[#3457b1] transition-all duration-300 text-center shadow-sm"
            >
              Cotización
            </a>
            <a 
              href={learnHref} 
              className="text-sm font-medium px-8 py-2 rounded bg-white text-[#171a20] hover:bg-[#f4f4f4] transition-all duration-300 text-center border border-black/5 hover:border-black/10"
            >
              Más información
            </a>
          </div>
        </div>

        {/* Contenedor Multimedia optimizado en altura */}
        <div className="relative flex items-stretch justify-center w-full h-full min-h-[300px] lg:min-h-[400px]">
           <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-inner flex items-center justify-center border border-black/5">
              <p className="text-[#393c41] opacity-50 font-medium">Contenido Multimedia</p>
           </div>
        </div>

      </div>
    </section>
  );
}
