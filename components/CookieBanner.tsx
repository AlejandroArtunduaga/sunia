"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

const CLAVE = "sunia-cookies-cerrado";
const EVENTO = "sunia-cookies";

// localStorage puede fallar (modo privado, datos bloqueados): en ese caso se muestra el aviso.
function leerCerrado(): boolean {
  try {
    return window.localStorage.getItem(CLAVE) === "1";
  } catch {
    return false;
  }
}

function suscribir(callback: () => void) {
  window.addEventListener(EVENTO, callback);
  return () => window.removeEventListener(EVENTO, callback);
}

export default function CookieBanner() {
  // En el servidor se asume cerrado para no mostrar el aviso antes de hidratar
  const cerrado = useSyncExternalStore(suscribir, leerCerrado, () => true);

  if (cerrado) return null;

  const cerrar = () => {
    try {
      window.localStorage.setItem(CLAVE, "1");
    } catch {
      // sin almacenamiento: se oculta solo en esta visita
    }
    window.dispatchEvent(new Event(EVENTO));
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed z-[200] bottom-3 left-3 right-3 md:right-auto md:max-w-sm rounded-2xl bg-[#0c0d11] text-white p-6 shadow-2xl"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <p className="text-xs font-bold tracking-[0.15em] uppercase">Este sitio usa cookies</p>
        <button onClick={cerrar} aria-label="Cerrar aviso de cookies" className="-mt-1 -mr-1 p-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>
      </div>
      <p className="text-sm leading-relaxed mb-5">
        Usamos cookies técnicas y servicios de terceros, como el mapa de cobertura (Mapbox), para
        que el sitio funcione y recordar tus preferencias. Al usar nuestro sitio aceptas su uso
        conforme a nuestra{" "}
        <Link href="/privacidad" className="underline underline-offset-2">Política de Tratamiento de Datos</Link>
        {" "}y la Ley 1581 de 2012.
      </p>
      <Link
        href="/privacidad#cookies"
        onClick={cerrar}
        className="block w-full text-center rounded-full border border-white py-3 text-sm font-medium hover:bg-white hover:text-[#0c0d11] transition-colors"
      >
        Gestionar preferencias
      </Link>
    </div>
  );
}
