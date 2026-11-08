"use client";

import { useState } from "react";
import Link from "next/link";
import { DEPARTAMENTOS, etiquetaCiudad } from "@/lib/ciudades";
import {
  filtrarCiudad,
  filtrarCorreo,
  filtrarDigitos,
  filtrarNombre,
  filtrarTelefono,
  validarCampos,
  type CampoCotizacion,
  type Cotizacion,
} from "@/lib/cotizacion";

const OTRA = "__otra";

const VACIO: Omit<Cotizacion, "ciudad"> = {
  nombre: "",
  correo: "",
  telefono: "",
  consumoKwh: "",
  tipoPropiedad: "residencial",
  propietario: "si",
};

type Estado = "inicial" | "enviando" | "exito" | "error";

const inputClass =
  "w-full h-12 px-3 rounded-md border bg-white text-[#171a20] text-base outline-none focus:border-[#171a20] transition-colors";
const labelClass = "block text-xs text-[#393c41] mb-1.5";

export default function QuoteForm({
  tipoInicial = "residencial",
}: {
  tipoInicial?: Cotizacion["tipoPropiedad"];
}) {
  const [campos, setCampos] = useState({ ...VACIO, tipoPropiedad: tipoInicial });
  // Ciudad: opción de la lista o "Otro municipio" escrito a mano
  const [ciudadLista, setCiudadLista] = useState("");
  const [ciudadOtra, setCiudadOtra] = useState("");
  // Los errores de un campo se muestran solo después de que el usuario sale de él
  const [tocados, setTocados] = useState<Set<CampoCotizacion>>(new Set());
  const [estado, setEstado] = useState<Estado>("inicial");
  const [mensajeError, setMensajeError] = useState("");

  const datos: Cotizacion = { ...campos, ciudad: ciudadLista === OTRA ? ciudadOtra.trim() : ciudadLista };
  const errores = validarCampos(datos);
  // Igual que el modelo: el botón queda gris hasta completar todos los campos
  const completo = Object.keys(errores).length === 0;

  const tocar = (campo: CampoCotizacion) => () => setTocados((t) => new Set(t).add(campo));
  const error = (campo: CampoCotizacion) => (tocados.has(campo) ? errores[campo] : undefined);
  const borde = (campo: CampoCotizacion) => (error(campo) ? "border-[#cc0000]" : "border-[#c8c9cc]");

  const poner = (campo: keyof typeof campos, filtro?: (v: string) => string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = filtro ? filtro(e.target.value) : e.target.value;
      setCampos((c) => ({ ...c, [campo]: v }));
    };

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!completo || estado === "enviando") return;
    setEstado("enviando");
    setMensajeError("");
    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Al enviar, el cliente acepta el texto de autorización (conducta inequívoca, Decreto 1377 de 2013)
        body: JSON.stringify({ ...datos, consumoKwh: Number(datos.consumoKwh), autoriza: true }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setMensajeError(json.error ?? "No pudimos enviar tu solicitud. Intenta de nuevo.");
        setEstado("error");
        return;
      }
      setCampos({ ...VACIO, tipoPropiedad: tipoInicial });
      setCiudadLista("");
      setCiudadOtra("");
      setTocados(new Set());
      setEstado("exito");
    } catch {
      setMensajeError("No hay conexión. Revisa tu internet e intenta de nuevo.");
      setEstado("error");
    }
  };

  // Función (no componente) para no recrear un componente en cada render
  const mensajeDe = (campo: CampoCotizacion) =>
    error(campo) ? (
      <p id={`${campo}-error`} className="mt-1.5 text-[11px] text-[#cc0000]">
        {error(campo)}
      </p>
    ) : null;

  return (
    <div className="w-full rounded-xl bg-[#fffdf1] shadow-[0_2px_24px_rgba(23,26,32,0.08)] px-6 py-8 md:px-10 md:py-10">
      <h2 className="text-[#171a20] text-[26px] md:text-[28px] leading-tight font-medium mb-3">
        Recibe tu cotización <span className="font-bold">gratis y sin compromiso</span>
      </h2>
      <p className="text-sm text-[#393c41] mb-2">
        Completa tus datos en menos de un minuto y un asesor te enviará una propuesta a la medida de tu consumo.
      </p>
      <p className="text-xs text-[#5c5e62] mb-6">Todos los campos son obligatorios.</p>

      {estado === "exito" ? (
        <div role="status" className="rounded-md border border-[#00d166]/40 bg-[#00d166]/10 px-4 py-5 text-[#171a20]">
          <p className="font-semibold mb-1">¡Recibimos tu solicitud!</p>
          <p className="text-sm text-[#393c41]">
            Un asesor de Sunia te contactará pronto con tu cotización.
          </p>
          <button
            type="button"
            onClick={() => setEstado("inicial")}
            className="mt-4 text-sm font-semibold underline underline-offset-2"
          >
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <form onSubmit={enviar} noValidate className="space-y-4">
          <div>
            <label htmlFor="nombre" className={labelClass}>Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              autoComplete="name"
              maxLength={100}
              value={campos.nombre}
              onChange={poner("nombre", filtrarNombre)}
              onBlur={tocar("nombre")}
              aria-invalid={!!error("nombre")}
              aria-describedby="nombre-error"
              className={`${inputClass} ${borde("nombre")}`}
            />
            {mensajeDe("nombre")}
          </div>

          <div>
            <label htmlFor="correo" className={labelClass}>Correo electrónico</label>
            <input
              id="correo"
              name="correo"
              type="email"
              autoComplete="email"
              maxLength={254}
              value={campos.correo}
              onChange={poner("correo", filtrarCorreo)}
              onBlur={tocar("correo")}
              aria-invalid={!!error("correo")}
              aria-describedby="correo-error"
              className={`${inputClass} ${borde("correo")}`}
            />
            {mensajeDe("correo")}
          </div>

          {/* En celular un campo por fila; en escritorio Ciudad y Teléfono lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ciudad" className={labelClass}>Ciudad</label>
              <div className="relative">
                <select
                  id="ciudad"
                  name="ciudad"
                  value={ciudadLista}
                  onChange={(e) => setCiudadLista(e.target.value)}
                  onBlur={() => ciudadLista !== OTRA && tocar("ciudad")()}
                  aria-invalid={!!error("ciudad")}
                  aria-describedby="ciudad-error"
                  className={`${inputClass} ${borde("ciudad")} appearance-none pr-9 ${ciudadLista ? "" : "text-[#8e8f93]"}`}
                >
                  <option value="" disabled>Selecciona…</option>
                  {DEPARTAMENTOS.map(({ departamento, ciudades }) => (
                    <optgroup key={departamento} label={departamento}>
                      {ciudades.map((c) => (
                        <option key={c} value={etiquetaCiudad(c, departamento)} className="text-[#171a20]">
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value={OTRA} className="text-[#171a20]">Otro municipio…</option>
                </select>
                <svg aria-hidden className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5c5e62]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              {ciudadLista !== OTRA && mensajeDe("ciudad")}
            </div>
            <div>
              <label htmlFor="telefono" className={labelClass}>Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="3001234567"
                value={campos.telefono}
                onChange={poner("telefono", filtrarTelefono)}
                onBlur={tocar("telefono")}
                aria-invalid={!!error("telefono")}
                aria-describedby="telefono-error"
                className={`${inputClass} ${borde("telefono")}`}
              />
              {mensajeDe("telefono")}
            </div>
          </div>

          {ciudadLista === OTRA && (
            <div>
              <label htmlFor="ciudadOtra" className={labelClass}>Municipio y departamento</label>
              <input
                id="ciudadOtra"
                name="ciudadOtra"
                autoComplete="address-level2"
                maxLength={80}
                placeholder="Ej.: Aipe, Huila"
                value={ciudadOtra}
                onChange={(e) => setCiudadOtra(filtrarCiudad(e.target.value))}
                onBlur={tocar("ciudad")}
                aria-invalid={!!error("ciudad")}
                aria-describedby="ciudad-error"
                className={`${inputClass} ${borde("ciudad")}`}
              />
              {mensajeDe("ciudad")}
            </div>
          )}

          <div>
            <label htmlFor="consumoKwh" className={labelClass}>Consumo mensual promedio (kWh)</label>
            <input
              id="consumoKwh"
              name="consumoKwh"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Ej.: 250"
              aria-describedby="consumoKwh-ayuda consumoKwh-error"
              value={campos.consumoKwh}
              // Solo se aceptan dígitos: cualquier otro carácter se descarta al escribir o pegar
              onChange={poner("consumoKwh", (v) => filtrarDigitos(v, 7))}
              onBlur={tocar("consumoKwh")}
              aria-invalid={!!error("consumoKwh")}
              className={`${inputClass} ${borde("consumoKwh")}`}
            />
            <p id="consumoKwh-ayuda" className="mt-1.5 text-[11px] text-[#5c5e62]">
              Lo encuentras en tu factura de energía.
            </p>
            {mensajeDe("consumoKwh")}
          </div>

          {/* Mismo estilo que la pregunta de propietario: solo se puede escoger una opción */}
          <fieldset className="pt-2">
            <legend className="text-[15px] text-[#171a20] mb-3">Tipo de propiedad</legend>
            <div className="flex items-center gap-6">
              {(
                [
                  ["residencial", "Residencial"],
                  ["industrial", "Industrial"],
                ] as const
              ).map(([valor, texto]) => (
                <label key={valor} className="flex items-center gap-2 text-sm text-[#171a20] cursor-pointer">
                  <input
                    type="radio"
                    name="tipoPropiedad"
                    value={valor}
                    checked={campos.tipoPropiedad === valor}
                    onChange={poner("tipoPropiedad")}
                    className="w-5 h-5 accent-[#171a20]"
                  />
                  {texto}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="pt-2">
            <legend className="text-[15px] text-[#171a20] mb-3">¿Eres propietario?</legend>
            <div className="flex items-center gap-6">
              {(["si", "no"] as const).map((op) => (
                <label key={op} className="flex items-center gap-2 text-sm text-[#171a20] cursor-pointer">
                  <input
                    type="radio"
                    name="propietario"
                    value={op}
                    checked={campos.propietario === op}
                    onChange={poner("propietario")}
                    className="w-5 h-5 accent-[#171a20]"
                  />
                  {op === "si" ? "Sí" : "No"}
                </label>
              ))}
            </div>
          </fieldset>

          <p className="text-[11px] leading-relaxed text-[#5c5e62] pt-2">
            Al hacer clic a continuación, autorizo de manera previa, expresa e informada a Sunia para
            tratar los datos personales que ingresé (nombre, correo, ciudad, teléfono, consumo de energía y datos de la propiedad) con el fin de
            contactarme por llamada, WhatsApp o correo electrónico para enviarme la cotización
            solicitada e información sobre sus productos y servicios, conforme a la Ley 1581 de 2012.
            Puedo conocer, actualizar, rectificar y suprimir mis datos, o revocar esta autorización, en
            cualquier momento. También acepto la{" "}
            <Link href="/privacidad" className="underline underline-offset-2">
              Política de Tratamiento de Datos
            </Link>
            .
          </p>

          {estado === "error" && (
            <p role="alert" className="text-sm text-[#cc0000]">{mensajeError}</p>
          )}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={!completo || estado === "enviando"}
              className="rounded-full px-10 py-3.5 text-sm font-semibold text-white bg-[#171a20] hover:bg-[#393c41] transition-colors disabled:bg-[#d6d7da] disabled:cursor-not-allowed"
            >
              {estado === "enviando" ? "Enviando…" : "Obtén una cotización"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
