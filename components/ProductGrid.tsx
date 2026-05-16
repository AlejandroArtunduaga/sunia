"use client";

import { useRef, useState, useEffect } from "react";

const PRODUCTS = [
  {
    id: "paneles",
    title: "Paneles Solares",
    subtitle: "Genera tu propia energía desde el techo",
    image: "/panlestecho.avif",
    quoteHref: "#cotizar-paneles",
    learnHref: "#paneles",
  },
  {
    id: "almacenamiento",
    title: "Almacenamiento",
    subtitle: "Guarda la energía solar para usarla cuando la necesitas",
    image: "/bateriaresidencial.avif",
    quoteHref: "#cotizar-baterias",
    learnHref: "#almacenamiento",
  },
  {
    id: "cargadores",
    title: "Cargadores EV",
    subtitle: "Recarga tu vehículo eléctrico con energía 100% solar",
    image: "/cargadorresidencial.avif",
    quoteHref: "#cotizar-ev",
    learnHref: "#cargadores",
  },
  {
    id: "monitoreo",
    title: "Monitoreo AI",
    subtitle: "Gestión inteligente de tu sistema en tiempo real",
    image: "/app1.avif",
    quoteHref: "#cotizar-ia",
    learnHref: "#monitoreo",
  },
];

export default function ProductGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="productos" className="bg-white my-12 relative w-full overflow-hidden">
      <div className="max-w-[93.5%] mx-auto relative">
        {/* Botón Izquierdo */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="relative shrink-0 snap-center w-[85vw] md:w-[65vw] lg:w-[1020px] flex flex-col items-center justify-end pb-10 pt-48 px-0 min-h-[75vh] rounded-lg overflow-hidden border border-black/0"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

              {/* Imagen de fondo */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="text-left w-full z-10 px-4 md:px-10">
                <h3 className="text-white text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                  {product.title}
                </h3>

                <p className="text-white/90 text-lg md:text-xl font-medium mb-8">
                  {product.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-start">
                  <a
                    href={product.quoteHref}
                    className="text-sm font-medium px-8 py-2 rounded bg-[#3e6ae1] text-white hover:bg-[#3457b1] transition-all duration-300 text-center shadow-sm"
                  >
                    Cotización
                  </a>
                  <a
                    href={product.learnHref}
                    className="text-sm font-medium px-8 py-2 rounded bg-[#f4f4f4] text-[#171a20] hover:bg-white transition-all duration-300 text-center border border-transparent hover:border-black/10"
                  >
                    Más información
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botón Derecho */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-black p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
