"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Cada imagen vende un beneficio distinto; "tipo" preselecciona el formulario de cotización
const SLIDES = [
  {
    image: "/residencial.avif",
    title: "Hogar",
    subtitle: "Genera tu propia energía y baja tu factura desde el primer mes",
    datos: ["Un año de mantenimiento incluido", "Vende tus excedentes a la red", "25 a 30 años de energía limpia"],
    tipo: "residencial",
    info: "/hogar",
  },
  {
    image: "/industrial1.avif",
    title: "Industrial",
    info: "/industrial",
    subtitle: "Hasta 50 % de tu inversión deducible en renta",
    datos: ["Sin IVA en equipos", "Depreciación acelerada en 3 años", "Respaldo de la Ley 1715"],
    tipo: "industrial",
  },
  {
    image: "/industrial-remoto.avif",
    title: "Generación Remota",
    info: "/generacion-remota",
    subtitle: "Energía limpia para tu empresa, aunque no tengas espacio para paneles",
    datos: ["Menos emisiones de CO₂", "Cumple tus metas de sostenibilidad", "Protégete de alzas en la tarifa"],
    tipo: "industrial",
  },
];

export default function HeroSection() {
  const slides = SLIDES;
  
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  // Avance automático cada 5 s; se reinicia cuando el usuario cambia de imagen
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section
      onClick={nextSlide}
      className="relative h-[74vh] flex items-center justify-center overflow-hidden cursor"
      
    >
      {/* Decorative solar grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(204,0,0,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204,0,0,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Sun glow */}
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(204,0,0,0.25) 0%, rgba(204,0,0,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Carousel Images */}
      <div className="absolute inset-0 pointer-events-none">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt="Energía"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/26" />
      </div>

      {/* Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Evita que se dispare el click del fondo
          prevSlide();
        }}
        className="absolute bottom-55 left-12 z-20 bg-gray-300 rounded-sm p-2 hover:bg-gray-200 transition outline-none cursor-pointer shadow-lg"
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = "inset 0 0 0 1px white, inset 0 0 0 3px #383333";
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute bottom-55 right-12 z-20 bg-gray-300 rounded-sm p-2 hover:bg-gray-200 transition outline-none cursor-pointer shadow-lg"
        onFocus={(e) => {
          e.currentTarget.style.boxShadow = "inset 0 0 0 1px white, inset 0 0 0 3px #383333";
        }}
        onBlur={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}  
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5l7 7-7 7" />
        </svg>
      </button>
  
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-10 max-w-[93.5%] w-full -translate-y-34">
        {/* Text Carousel */}
        {/* Todas las diapositivas en la misma celda: el bloque toma la altura de la más alta */}
        <div className="grid mb-4">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`col-start-1 row-start-1 w-full transition-opacity duration-700 ease-in-out ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-none mb-3">
                {slide.title}
              </h1>
              <p className="text-white text-lg md:text-xl">
                {slide.subtitle}
              </p>
              {/* Celular: un dato por línea; escritorio: en una línea separados por puntos */}
              <ul className="mt-3 flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/90 text-sm font-medium">
                {slide.datos.map((dato, j) => (
                  <li key={dato} className="flex items-center gap-2">
                    {j > 0 && <span aria-hidden className="hidden md:inline text-[#00d166]">•</span>}
                    {dato}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-center mt-1">
          <Link
            href={`/cotizar?tipo=${slides[current].tipo}`}
            onClick={(e) => e.stopPropagation()} // Previene que el click en el enlace cambie la foto
            className="btn-tech"
          >
            ¡Cotizar ahora!
          </Link>
          <Link
            href={slides[current].info}
            onClick={(e) => e.stopPropagation()}
            // bg-white: fondo blanco | text-gray-500: letra gris
            className="text-sm font-semibold px-13 py-2 rounded transition-all cursor-pointer bg-white text-gray-800 hover:bg-gray-100"
          >
            Más información
          </Link>
        </div>
      </div>
    </section>
  );
}
