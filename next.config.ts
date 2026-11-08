import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto: hay un package-lock.json suelto en C:\Users\aleja
  // y sin esto Turbopack vigila toda la carpeta del usuario y la página no carga.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
