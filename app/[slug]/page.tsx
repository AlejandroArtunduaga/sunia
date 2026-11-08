import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolucionPage from "@/components/solucion/SolucionPage";
import { SOLUCIONES, getSolucion } from "@/lib/soluciones";

// Solo existen las páginas definidas en lib/soluciones.ts; cualquier otra ruta da 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUCIONES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getSolucion((await params).slug);
  if (!s) return {};
  return { title: `${s.nombre} — Sunia`, description: s.metaDescripcion };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSolucion((await params).slug);
  if (!s) notFound();
  return <SolucionPage s={s} />;
}
