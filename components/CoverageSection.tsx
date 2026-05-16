"use client";

import { useState, useRef, useEffect } from "react";
import Map, { Marker, Popup, MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const CITIES = [
  { name: "Bogotá", installed: "", lat: 4.7110, lng: -74.0721 },
  { name: "Medellín", installed: "", lat: 6.2442, lng: -75.5812 },
  { name: "Cali", installed: "", lat: 3.4372, lng: -76.5197 },
  { name: "Barranquilla", installed: "", lat: 10.9639, lng: -74.7964 },
  { name: "Bucaramanga", installed: "", lat: 7.1298, lng: -73.1198 },
  { name: "Cartagena", installed: "", lat: 10.3932, lng: -75.4794 },
];

const INITIAL_VIEW = { longitude: -74.0721, latitude: 4.7110, zoom: 5.5 };

export default function CoverageSection() {
  const [popupInfo, setPopupInfo] = useState<typeof CITIES[0] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const mapRef = useRef<MapRef | null>(null);

  const PAN_DISTANCE = 150;
  const zoomIn = () => mapRef.current?.zoomIn();
  const zoomOut = () => mapRef.current?.zoomOut();
  const panUp = () => mapRef.current?.panBy([0, -PAN_DISTANCE]);
  const panDown = () => mapRef.current?.panBy([0, PAN_DISTANCE]);
  const panLeft = () => mapRef.current?.panBy([-PAN_DISTANCE, 0]);
  const panRight = () => mapRef.current?.panBy([PAN_DISTANCE, 0]);

  return (
    <section
      id="cobertura"
      className="max-w-[93.5%] mx-auto my-12 bg-[#f4f4f4] rounded-lg overflow-hidden shadow-sm"
    >
      <div className="px-4 md:px-10 py-10 max-w-screen-2xl w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#cc0000] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Presencia nacional
          </p>
          <h2 className="text-[#171a20] text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Cobertura en Colombia
          </h2>
          <p className="text-[#5c5e62] text-lg max-w-xl mx-auto opacity-90">
            Instalamos y damos servicio técnico en las principales ciudades del país.
          </p>
        </div>

        {/* Map */}
        <div
          className="relative rounded-xl overflow-hidden mb-10 border border-black/5"
          style={{ aspectRatio: "16/7" }}
        >
          <Map
            ref={mapRef}
            initialViewState={INITIAL_VIEW}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            attributionControl={false}
            minZoom={4}
            maxZoom={10}
            scrollZoom={true}
            dragRotate={false}
            touchPitch={false}
            boxZoom={false}
            doubleClickZoom={true}
            projection="mercator"
          >
              {CITIES.map((city) => (
                <Marker
                  key={city.name}
                  longitude={city.lng}
                  latitude={city.lat}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setPopupInfo(city);
                  }}
                >
                  <div className="relative cursor-pointer group">
                    <div className="w-4 h-4 bg-[#cc0000] rounded-full shadow-lg group-hover:scale-125 transition-transform duration-200" />
                    <div className="absolute w-8 h-8 border-2 border-[#cc0000] rounded-full -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </Marker>
              ))}

              {popupInfo && (
                <Popup
                  longitude={popupInfo.lng}
                  latitude={popupInfo.lat}
                  onClose={() => setPopupInfo(null)}
                  closeButton
                  closeOnClick={false}
                  anchor="bottom"
                >
                  <div className="p-3 bg-white rounded-lg">
                    <p className="font-bold text-[#171a20] text-sm mb-1">{popupInfo.name}</p>
                    <p className="text-[#5c5e62] text-xs">{popupInfo.installed}</p>
                  </div>
                </Popup>
              )}
            </Map>

          {/* Custom expandable menu */}
          <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú del mapa"
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-all duration-200 text-[#171a20]"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="12 4 8 8 16 8 12 4" />
                  <polyline points="12 20 8 16 16 16 12 20" />
                  <polyline points="4 12 8 8 8 16 4 12" />
                  <polyline points="20 12 16 8 16 16 20 12" />
                </svg>
              )}
            </button>

            <div
              className={`flex flex-col items-center gap-2 transition-all duration-300 origin-top-right ${
                menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              {/* D-pad direccional */}
              <button
                onClick={panUp}
                aria-label="Mover arriba"
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-colors duration-200 text-[#171a20]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 14 12 8 18 14" />
                </svg>
              </button>
              <div className="flex gap-2">
                <button
                  onClick={panLeft}
                  aria-label="Mover izquierda"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-colors duration-200 text-[#171a20]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="14 6 8 12 14 18" />
                  </svg>
                </button>
                <button
                  onClick={panRight}
                  aria-label="Mover derecha"
                  className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-colors duration-200 text-[#171a20]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="10 6 16 12 10 18" />
                  </svg>
                </button>
              </div>
              <button
                onClick={panDown}
                aria-label="Mover abajo"
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-colors duration-200 text-[#171a20]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 10 12 16 18 10" />
                </svg>
              </button>

              {/* Separador */}
              <div className="w-6 h-px bg-black/10 my-1" />

              {/* Zoom */}
              <button
                onClick={zoomIn}
                aria-label="Acercar"
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-colors duration-200 text-[#171a20]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <button
                onClick={zoomOut}
                aria-label="Alejar"
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#cc0000] hover:text-white transition-colors duration-200 text-[#171a20]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
