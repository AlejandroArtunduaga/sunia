import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { POLITICA_VERSION } from "@/lib/cotizacion";
import { TELEFONO } from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos — Sunia",
  description: "Política de tratamiento de datos personales de Sunia conforme a la Ley 1581 de 2012.",
};

// Datos del responsable: reemplazar los marcados [EJEMPLO] por los reales de la empresa.
const RESPONSABLE = {
  razonSocial: "Sunia [EJEMPLO: razón social]",
  nit: "[EJEMPLO: NIT 900.000.000-0]",
  direccion: "[EJEMPLO: dirección], Colombia",
  correo: "privacidad@sunia.co [EJEMPLO]",
};

const h2 = "text-[#171a20] text-xl font-bold mt-10 mb-3";
const p = "text-[#393c41] leading-relaxed mb-3";
const li = "text-[#393c41] leading-relaxed";

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="pt-14 bg-white">
        <article className="max-w-3xl mx-auto px-4 md:px-10 py-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#5c5e62] mb-3">
            Versión {POLITICA_VERSION}
          </p>
          <h1 className="text-[#171a20] text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className={p}>
            En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 (compilado en el Decreto
            1074 de 2015), Sunia informa cómo recolecta, usa, almacena y protege los datos personales
            de las personas que solicitan una cotización a través de este sitio web.
          </p>

          <h2 className={h2}>1. Responsable del tratamiento</h2>
          <ul className="space-y-1 mb-3">
            <li className={li}><strong>Razón social:</strong> {RESPONSABLE.razonSocial}</li>
            <li className={li}><strong>NIT:</strong> {RESPONSABLE.nit}</li>
            <li className={li}><strong>Dirección:</strong> {RESPONSABLE.direccion}</li>
            <li className={li}><strong>Correo:</strong> {RESPONSABLE.correo}</li>
            <li className={li}><strong>Teléfono:</strong> {TELEFONO.visible}</li>
          </ul>

          <h2 className={h2}>2. Datos que recolectamos</h2>
          <p className={p}>
            A través del formulario de cotización recolectamos únicamente: nombre completo, correo
            electrónico, ciudad, teléfono, consumo mensual de energía, tipo de propiedad (residencial o industrial) y si eres propietario de la propiedad. No recolectamos datos
            sensibles ni datos de menores de edad.
          </p>

          <h2 className={h2}>3. Finalidades</h2>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li className={li}>Contactarte por llamada, WhatsApp o correo electrónico para elaborar y enviarte la cotización solicitada.</li>
            <li className={li}>Enviarte información sobre nuestros productos y servicios de energía solar.</li>
            <li className={li}>Atender tus consultas, peticiones y reclamos.</li>
          </ul>

          <h2 className={h2}>4. Autorización</h2>
          <p className={p}>
            Al enviar el formulario de cotización, después de leer el texto de autorización que
            aparece junto al botón, otorgas tu autorización previa, expresa e informada para el
            tratamiento de tus datos con las finalidades anteriores (artículo 7 del Decreto 1377 de
            2013). Guardamos la fecha de la autorización y la versión de esta política como prueba.
          </p>

          <h2 className={h2}>5. Tus derechos como titular</h2>
          <p className={p}>De acuerdo con el artículo 8 de la Ley 1581 de 2012, puedes:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li className={li}>Conocer, actualizar y rectificar tus datos personales.</li>
            <li className={li}>Solicitar prueba de la autorización otorgada.</li>
            <li className={li}>Ser informado sobre el uso que se ha dado a tus datos.</li>
            <li className={li}>Revocar la autorización y/o solicitar la supresión de tus datos.</li>
            <li className={li}>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
            <li className={li}>Acceder en forma gratuita a tus datos personales.</li>
          </ul>

          <h2 className={h2}>6. Consultas y reclamos</h2>
          <p className={p}>
            Puedes ejercer tus derechos escribiendo a {RESPONSABLE.correo}. Las consultas se
            responden en máximo diez (10) días hábiles y los reclamos en máximo quince (15) días
            hábiles, prorrogables en los términos de los artículos 14 y 15 de la Ley 1581 de 2012.
          </p>

          <h2 className={h2}>7. Seguridad y conservación</h2>
          <p className={p}>
            Tus datos se almacenan con medidas de seguridad razonables para evitar su pérdida, uso o
            acceso no autorizado, y se conservan mientras sean necesarios para las finalidades
            descritas o hasta que solicites su supresión.
          </p>

          <h2 id="cookies" className={h2}>8. Cookies</h2>
          <p className={p}>
            Este sitio usa cookies y almacenamiento local técnicos, necesarios para su funcionamiento
            y para recordar tus preferencias (por ejemplo, que ya cerraste el aviso de cookies). El
            mapa de cobertura usa el servicio de Mapbox, que puede almacenar información técnica en tu
            navegador. Puedes borrar o bloquear las cookies desde la configuración de tu navegador.
          </p>

          <h2 className={h2}>9. Vigencia</h2>
          <p className={p}>
            Esta política rige desde su publicación (versión {POLITICA_VERSION}). Cualquier cambio
            sustancial será informado en este sitio.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
