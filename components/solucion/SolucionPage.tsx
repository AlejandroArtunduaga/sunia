import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IconoPaso from "@/components/solucion/IconoPaso";
import { NOTAS_LEGALES, type Solucion } from "@/lib/soluciones";

// Plantilla de las páginas de información, con la estructura de las páginas de producto de Tesla:
// portada a pantalla completa → cifras → texto centrado → imagen ancha → filas alternadas →
// cómo funciona → respaldo legal → preguntas → cierre oscuro con notas al pie.
export default function SolucionPage({ s }: { s: Solucion }) {
  const cotizar = `/cotizar?tipo=${s.tipo}`;

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Portada */}
        <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
          <img src={s.hero} alt={s.nombre} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/45" />
          <div className="relative z-10 h-full flex flex-col items-center justify-between text-center px-6 pt-28 pb-16">
            <div>
              {s.proximamente && (
                <span className="inline-block mb-4 rounded-full bg-white/90 text-[#171a20] text-xs font-semibold tracking-wide px-3 py-1">
                  Próximamente
                </span>
              )}
              <h1 className="text-white text-4xl md:text-[44px] font-semibold tracking-tight">{s.nombre}</h1>
              <p className="mt-2 text-white/95 text-base md:text-lg max-w-xl mx-auto">{s.subtitulo}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link href={cotizar} className="btn-tech sm:min-w-[220px]">
                {s.proximamente ? "Quiero que me avisen" : "Cotizar ahora"}
              </Link>
              <a
                href="#beneficios"
                className="text-sm font-semibold px-8 py-2.5 rounded bg-white/90 text-[#171a20] hover:bg-white transition-colors text-center sm:min-w-[220px]"
              >
                Ver beneficios
              </a>
            </div>
          </div>
        </section>

        {/* Cifras */}
        {s.cifras && (
          <section className="max-w-5xl mx-auto px-6 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-black/10 gap-8 sm:gap-0">
              {s.cifras.map((c) => (
                <div key={c.texto} className="text-center sm:px-6">
                  <p className="text-[#171a20] text-4xl font-semibold tracking-tight">
                    {c.valor}
                    {c.unidad && <span className="text-xl font-medium ml-1">{c.unidad}</span>}
                  </p>
                  <p className="text-[#5c5e62] text-sm mt-1">{c.texto}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Texto centrado */}
        <section id="beneficios" className="scroll-mt-14 max-w-2xl mx-auto px-6 py-16 text-center">
          <h2 className="text-[#171a20] text-3xl font-semibold tracking-tight mb-4">{s.intro.titulo}</h2>
          <p className="text-[#393c41] leading-relaxed">{s.intro.texto}</p>
        </section>

        {/* Imagen ancha con texto encima */}
        <section className="relative w-full h-[70vh] min-h-[420px] overflow-hidden">
          <img src={s.destacado.imagen} alt={s.destacado.titulo} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 md:px-16 pb-12 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">{s.destacado.titulo}</h2>
            <p className="max-w-2xl text-white/90 leading-relaxed">{s.destacado.texto}</p>
          </div>
        </section>

        {/* Filas alternadas */}
        <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          {s.bloques.map((b, i) => (
            <div key={b.titulo} className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={b.imagen} alt={b.titulo} className="w-full aspect-[16/10] object-cover rounded-lg" />
              </div>
              <div className="md:col-span-2">
                <p className="text-[#5c5e62] text-sm mb-1">{b.etiqueta}</p>
                <h3 className="text-[#171a20] text-2xl font-semibold tracking-tight mb-3">{b.titulo}</h3>
                <p className="text-[#393c41] leading-relaxed">{b.texto}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Cómo funciona */}
        <section className="bg-[#f4f4f4] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-[#171a20] text-3xl font-semibold tracking-tight text-center mb-14">Cómo funciona</h2>
            <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Línea que une los pasos (escritorio) */}
              <div aria-hidden className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#c8c9cc]" />
              {s.pasos.map((p, i) => (
                <li key={p.titulo} className="relative text-center">
                  <div className="relative mx-auto w-16 h-16 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#171a20] shadow-sm">
                    <IconoPaso icono={p.icono} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#00d166] text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[#171a20] font-semibold">{p.titulo}</h3>
                  <p className="mt-1 text-[#5c5e62] text-sm leading-relaxed">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Respaldo legal */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-[#5c5e62] text-sm text-center mb-1">Normativa colombiana vigente</p>
          <h2 className="text-[#171a20] text-3xl font-semibold tracking-tight text-center mb-12">Respaldo legal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.normas.map((n) => (
              <article key={n.norma + n.titulo} className="rounded-lg border border-black/10 p-6 flex flex-col">
                <p className="text-xs font-semibold tracking-wide uppercase text-[#00a050] mb-2">{n.norma}</p>
                <h3 className="text-[#171a20] text-lg font-semibold mb-2">{n.titulo}</h3>
                <p className="text-[#393c41] text-sm leading-relaxed flex-1">{n.texto}</p>
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-[#171a20] underline underline-offset-2"
                >
                  Ver norma oficial
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <h2 className="text-[#171a20] text-3xl font-semibold tracking-tight text-center mb-10">Preguntas frecuentes</h2>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {s.preguntas.map((q) => (
              <details key={q.p} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none text-[#171a20] font-medium">
                  {q.p}
                  <span aria-hidden className="ml-4 text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[#393c41] text-sm leading-relaxed">{q.r}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Cierre */}
        <section className="bg-[#0c0d11] text-white px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">{s.cierre.titulo}</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{s.cierre.texto}</p>
          <Link href={cotizar} className="btn-tech min-w-[220px]">
            {s.proximamente ? "Quiero que me avisen" : "Cotizar ahora"}
          </Link>
          <div className="mt-16 max-w-2xl mx-auto space-y-2">
            {NOTAS_LEGALES.map((n) => (
              <p key={n} className="text-white/50 text-xs leading-relaxed">{n}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
