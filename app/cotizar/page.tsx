import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { TELEFONO } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Cotiza tu sistema solar — Sunia",
  description: "Solicita una cotización de energía solar y almacenamiento en Colombia.",
};

const BENEFICIOS = [
  "Adquiere un sistema solar y de almacenamiento de última generación.",
  "Protégete contra los cortes de energía.",
  "Descubre por qué cada vez más colombianos generan su propia energía.",
];

export default async function CotizarPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Los botones del hero envían ?tipo=residencial|industrial para preseleccionar el formulario
  const { tipo } = await searchParams;
  const tipoInicial = tipo === "industrial" ? "industrial" : "residencial";

  return (
    <>
      <Header />
      <main
        className="pt-14"
        style={{ background: "linear-gradient(180deg, #fdfbee 0%, #e9eff4 45%, #aacafb 100%)" }}
      >
        <section className="max-w-[1120px] mx-auto px-4 md:px-10 pt-16 md:pt-24 pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Columna izquierda */}
            <div>
              <p className="text-[11px] font-semibold tracking-wider uppercase text-[#393c41] mb-3 max-w-xs">
                Energía solar y almacenamiento con baterías en Colombia
              </p>
              <h1 className="text-[#171a20] text-[34px] md:text-[56px] leading-[1.08] tracking-tight mb-4">
                Toma el control de tu energía hoy mismo.
              </h1>
              <p className="text-[#5c5e62] text-lg mb-10 max-w-md">
                Suministro eléctrico confiable, facturas de energía predecibles.
              </p>
              <ol className="space-y-5">
                {BENEFICIOS.map((texto, i) => (
                  <li key={texto} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#3f435e] text-white text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-[#171a20] text-base pt-0.5">{texto}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Columna derecha: formulario */}
            <div className="w-full max-w-[480px] lg:justify-self-end">
              <QuoteForm tipoInicial={tipoInicial} />
            </div>
          </div>

          <p className="text-center text-[#171a20] text-lg mt-14">
            ¿Tienes dudas? Habla con un asesor:{" "}
            <a href={TELEFONO.href} className="block md:inline text-[#1a4fd6] underline underline-offset-2">
              {TELEFONO.visible}
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
