import { getPool } from "@/lib/db";
import { POLITICA_VERSION, validarSolicitud } from "@/lib/cotizacion";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Solicitud inválida." }, { status: 400 });
  }

  const resultado = validarSolicitud(body);
  if (!resultado.ok) {
    return Response.json(
      { ok: false, error: "Revisa los datos del formulario.", errores: resultado.errores },
      { status: 422 }
    );
  }

  const { nombre, correo, ciudad, telefono, consumoKwh, tipoPropiedad, propietario } = resultado.data;

  try {
    // El esquema (tabla, roles, permisos) se administra aparte, con el rol
    // de administrador — esta conexión (app_sunia) solo puede insertar.
    await getPool().query(
      `INSERT INTO cotizaciones
         (nombre, correo, ciudad, telefono, consumo_kwh, tipo_propiedad, propietario, politica_version, autorizado_en)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        nombre,
        correo,
        ciudad,
        telefono,
        Number(consumoKwh),
        tipoPropiedad,
        propietario,
        POLITICA_VERSION,
        new Date().toISOString(),
      ]
    );
  } catch (error) {
    console.error("Error guardando cotización:", error);
    return Response.json(
      { ok: false, error: "No pudimos guardar tu solicitud. Intenta de nuevo o llámanos." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true }, { status: 201 });
}
