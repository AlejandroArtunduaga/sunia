import type { Icono } from "@/lib/soluciones";

// Ilustraciones de línea para la sección "Cómo funciona" (viewBox 24x24, trazo actual)
const TRAZOS: Record<Icono, React.ReactNode> = {
  sol: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  panel: (
    <>
      <path d="M4 5h16l-2 10H6L4 5z" />
      <path d="M8.7 5 8 15M15.3 5 16 15M5 10h14M12 15v4M8 19h8" />
    </>
  ),
  inversor: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 9c1.3-2 2.7-2 4 0s2.7 2 4 0M8 15h8" />
    </>
  ),
  casa: (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10M10 20v-5h4v5" />
    </>
  ),
  fabrica: (
    <>
      <path d="M3 20V10l5 3V10l5 3V10l5 3V5h3v15H3z" />
      <path d="M7 16h2M12 16h2M17 16h1" />
    </>
  ),
  red: (
    <>
      <path d="M12 2 7 22M12 2l5 20M8.5 9h7M7.5 14h9M6 20h12" />
      <path d="M12 2v3" />
    </>
  ),
  bateria: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M10 2h4M13 8l-3 5h4l-3 5" />
    </>
  ),
  carro: (
    <>
      <path d="M5 16V12l2-5h10l2 5v4" />
      <path d="M3 16h18v3H3zM7 19v2M17 19v2M7.5 13h.01M16.5 13h.01" />
    </>
  ),
  app: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 15v2M12 12v5M14 9v8" />
    </>
  ),
  grafica: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </>
  ),
  documento: (
    <>
      <path d="M6 2h9l4 4v16H6z" />
      <path d="M14 2v5h5M9 13l2 2 4-4" />
    </>
  ),
  rayo: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  hoja: (
    <>
      <path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16z" />
      <path d="M5 21 13 13" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

export default function IconoPaso({ icono, className = "w-7 h-7" }: { icono: Icono; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {TRAZOS[icono]}
    </svg>
  );
}
