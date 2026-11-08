import { Pool } from "pg";

// Conexión a PostgreSQL (Azure Database for PostgreSQL - servidor flexible).
// La cadena de conexión vive en DATABASE_URL (.env.local, nunca se sube a git).
const globalForDb = globalThis as unknown as { suniaPool?: Pool };

export function getPool(): Pool {
  if (!globalForDb.suniaPool) {
    if (!process.env.DATABASE_URL) {
      throw new Error("Falta la variable de entorno DATABASE_URL.");
    }
    globalForDb.suniaPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Azure exige TLS; el certificado es gestionado por Azure, no por una CA propia.
      ssl: { rejectUnauthorized: false },
      // Evita conexiones "colgadas" o cortadas por el servidor/red que causan ECONNRESET.
      keepAlive: true,
      connectionTimeoutMillis: 20_000,
      idleTimeoutMillis: 10_000,
      max: 5,
    });

    // Una conexión del pool puede caerse en cualquier momento (red, reinicio del
    // servidor, etc.). Sin este manejador, Node tumba todo el proceso con un
    // error no controlado. Con él, el pool simplemente descarta esa conexión.
    globalForDb.suniaPool.on("error", (err) => {
      console.error("Error inesperado en el pool de PostgreSQL:", err);
    });
  }
  return globalForDb.suniaPool;
}
