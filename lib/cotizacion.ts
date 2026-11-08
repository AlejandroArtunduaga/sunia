// Validación compartida entre el formulario (cliente) y la API (servidor).

// Versión de la Política de Tratamiento de Datos aceptada (Ley 1581 de 2012).
// Se guarda con cada solicitud como prueba de la autorización.
export const POLITICA_VERSION = "2026-10";

export type Cotizacion = {
  nombre: string;
  correo: string;
  ciudad: string;
  telefono: string;
  // Solo dígitos en el formulario; a la API llega como número entero de kWh
  consumoKwh: string;
  tipoPropiedad: "residencial" | "industrial";
  propietario: "si" | "no";
};

export type CampoCotizacion = keyof Cotizacion;

// Reglas de cada campo (se aplican igual en el formulario y en la API)
// Nombre: solo letras (con tildes y ñ), al menos nombre y apellido separados por un espacio
const NOMBRE_RE = /^\p{L}+(?: \p{L}+)+$/u;
// Correo: texto@dominio.ext, sin espacios
const CORREO_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Ciudad: solo letras, espacios y los signos de los nombres de lugares (", . -"), sin números
const CIUDAD_RE = /^\p{L}[\p{L} .,'-]{1,79}$/u;
// Celular (3xx xxx xxxx) o fijo con indicativo nacional (60x xxx xxxx)
const TELEFONO_RE = /^(3\d{9}|60\d{8})$/;

// Solo dígitos. Si viene con el indicativo 57 (12 dígitos) se quita; cualquier otro carácter lo invalida.
export function normalizarTelefono(valor: string): string {
  const v = valor.trim();
  return /^57\d{10}$/.test(v) ? v.slice(2) : v;
}

// Filtros para el formulario: descartan al escribir o pegar lo que el campo no admite
export const filtrarNombre = (v: string) => v.replace(/[^\p{L} ]/gu, "").replace(/ {2,}/g, " ").replace(/^ /, "");
export const filtrarCorreo = (v: string) => v.replace(/\s/g, "");
export const filtrarCiudad = (v: string) =>
  v.replace(/[^\p{L} .,'-]/gu, "").replace(/ {2,}/g, " ").replace(/ ,/g, ",").replace(/^ /, "");
export const filtrarTelefono = (v: string) => {
  const d = v.replace(/\D/g, "");
  return (d.length === 12 && d.startsWith("57") ? d.slice(2) : d).slice(0, 10);
};
export const filtrarDigitos = (v: string, max: number) => v.replace(/\D/g, "").slice(0, max);

export function validarCampos(datos: Cotizacion): Partial<Record<CampoCotizacion, string>> {
  const errores: Partial<Record<CampoCotizacion, string>> = {};
  const nombre = datos.nombre.trim();
  const ciudad = datos.ciudad.trim();

  if (nombre.length > 100 || !NOMBRE_RE.test(nombre)) {
    errores.nombre = "Escribe tu nombre y apellido, solo con letras.";
  }
  if (!CORREO_RE.test(datos.correo.trim()) || datos.correo.length > 254) {
    errores.correo = "Escribe un correo válido, por ejemplo nombre@correo.com.";
  }
  if (!CIUDAD_RE.test(ciudad)) {
    errores.ciudad = "Selecciona tu ciudad o escribe tu municipio.";
  }
  if (!TELEFONO_RE.test(normalizarTelefono(datos.telefono))) {
    errores.telefono = "Escribe un celular (3xx) o fijo (60x) de 10 dígitos, solo números.";
  }
  // Solo números enteros: sin letras, puntos, comas ni signos
  const consumo = /^\d{1,7}$/.test(datos.consumoKwh) ? Number(datos.consumoKwh) : NaN;
  if (!(consumo >= 1 && consumo <= 5_000_000)) {
    errores.consumoKwh = "Escribe tu consumo mensual promedio en kWh (lo encuentras en tu factura).";
  }
  if (datos.tipoPropiedad !== "residencial" && datos.tipoPropiedad !== "industrial") {
    errores.tipoPropiedad = "Indica si la propiedad es residencial o industrial.";
  }
  if (datos.propietario !== "si" && datos.propietario !== "no") {
    errores.propietario = "Indica si eres propietario.";
  }
  return errores;
}

type Resultado =
  | { ok: true; data: Cotizacion }
  | { ok: false; errores: Partial<Record<CampoCotizacion | "autoriza", string>> };

// Valida el cuerpo crudo que llega a la API.
export function validarSolicitud(body: unknown): Resultado {
  if (typeof body !== "object" || body === null) {
    return { ok: false, errores: { nombre: "Solicitud inválida." } };
  }
  const b = body as Record<string, unknown>;
  const texto = (v: unknown) => (typeof v === "string" ? v : "");

  const datos: Cotizacion = {
    nombre: texto(b.nombre).trim().replace(/ {2,}/g, " "),
    correo: texto(b.correo).trim().toLowerCase(),
    ciudad: texto(b.ciudad).trim(),
    telefono: normalizarTelefono(texto(b.telefono)),
    // La API solo acepta un número entero (un texto como "250" se rechaza)
    consumoKwh: typeof b.consumoKwh === "number" && Number.isInteger(b.consumoKwh) ? String(b.consumoKwh) : "",
    // validarCampos rechaza valores fuera de las opciones permitidas
    tipoPropiedad: texto(b.tipoPropiedad) as Cotizacion["tipoPropiedad"],
    propietario: texto(b.propietario) as Cotizacion["propietario"],
  };

  const errores: Partial<Record<CampoCotizacion | "autoriza", string>> = validarCampos(datos);
  if (b.autoriza !== true) {
    errores.autoriza = "Debes autorizar el tratamiento de tus datos para continuar.";
  }

  if (Object.keys(errores).length > 0) return { ok: false, errores };
  return { ok: true, data: datos };
}
