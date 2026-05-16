import React from 'react';

interface LogoProps {
  className?: string;
}

export default function LogoSunia({ className = "w-64 h-64" }: LogoProps) {
  // Cálculo matemático perfecto para la estrella de 7 puntas
  const starPoints = Array.from({ length: 14 }).map((_, i) => {
    // 14 vértices alternando entre el radio exterior y el interior
    const angle = (i * Math.PI) / 7 - Math.PI / 2;
    const radius = i % 2 === 0 ? 230 : 130; 
    return `${250 + radius * Math.cos(angle)},${250 + radius * Math.sin(angle)}`;
  }).join(' ');

  return (
    <svg 
      viewBox="0 0 500 500" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <defs>
        {/* Filtro para el efecto Neón Blanco */}
        <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gradiente Azul Tech con estilo minimalista */}
        <linearGradient id="techBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B1A30" />
          <stop offset="50%" stopColor="#123B6B" />
          <stop offset="100%" stopColor="#1C61A8" />
        </linearGradient>
      </defs>

      {/* Base: Sol de 7 puntas */}
      <polygon 
        points={starPoints} 
        fill="url(#techBlue)" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />

      {/* Anillo delimitador interior */}
      <circle 
        cx="250" cy="250" r="110" 
        fill="url(#techBlue)" 
        stroke="#ffffff" 
        strokeWidth="3" 
        filter="url(#neonGlow)" 
      />

      {/* Núcleo del Logo: Cerebro / Circuitos AI */}
      <g 
        stroke="#ffffff" 
        strokeWidth="4" 
        fill="none" 
        filter="url(#neonGlow)" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* Hemisferio Izquierdo */}
        <path d="M240,160 C210,150 170,170 160,210 C150,240 160,270 170,290 C160,310 170,330 190,340 C210,350 230,340 240,330 Z" />
        {/* Hemisferio Derecho */}
        <path d="M260,160 C290,150 330,170 340,210 C350,240 340,270 330,290 C340,310 330,330 310,340 C290,350 270,340 260,330 Z" />

        {/* Rutas de datos y Nodos - Izquierda */}
        <circle cx="200" cy="200" r="6" fill="#ffffff" />
        <path d="M200,206 L200,240 L230,260" />
        <circle cx="230" cy="260" r="6" fill="#ffffff" />
        <path d="M190,280 L220,280 L230,266" />
        <circle cx="190" cy="280" r="6" fill="#ffffff" />

        {/* Rutas de datos y Nodos - Derecha */}
        <circle cx="300" cy="200" r="6" fill="#ffffff" />
        <path d="M300,206 L300,240 L270,260" />
        <circle cx="270" cy="260" r="6" fill="#ffffff" />
        <path d="M310,280 L280,280 L270,266" />
        <circle cx="310" cy="280" r="6" fill="#ffffff" />

        {/* Puente neuronal central */}
        <path d="M230,260 L270,260" />
      </g>
    </svg>
  );
}