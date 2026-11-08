// Contenido de las páginas de información (/hogar, /industrial, /paneles-solares, ...).
// Regla: solo normativa colombiana VIGENTE y verificada (noviembre de 2026).
// Lo que no se pudo confirmar en fuente oficial se omitió (p. ej. beneficios tributarios para baterías).

export type Icono =
  | "sol" | "panel" | "inversor" | "casa" | "fabrica" | "red" | "bateria"
  | "carro" | "app" | "grafica" | "documento" | "rayo" | "hoja" | "escudo";

export type Norma = { norma: string; titulo: string; texto: string; url: string };

export type Solucion = {
  slug: string;
  nombre: string;
  subtitulo: string;
  metaDescripcion: string;
  tipo: "residencial" | "industrial";
  proximamente?: boolean;
  hero: string;
  cifras?: { valor: string; unidad?: string; texto: string }[];
  intro: { titulo: string; texto: string };
  destacado: { imagen: string; titulo: string; texto: string };
  bloques: { imagen: string; etiqueta: string; titulo: string; texto: string }[];
  pasos: { icono: Icono; titulo: string; texto: string }[];
  normas: Norma[];
  preguntas: { p: string; r: string }[];
  cierre: { titulo: string; texto: string };
};

// ── Normas reutilizadas (fuentes oficiales) ──────────────────────────────────

const LEY_1715_INCENTIVOS: Norma = {
  norma: "Ley 1715 de 2014 · Ley 2099 de 2021",
  titulo: "Incentivos tributarios",
  texto:
    "Deducción en renta del 50 % de la inversión (hasta 15 años, sin superar el 50 % de la renta líquida), exclusión de IVA en equipos y servicios, exención de aranceles para equipos no producidos en Colombia y depreciación acelerada hasta 33,33 % anual.",
  url: "https://normograma.dian.gov.co/dian/compilacion/docs/ley_2099_2021.htm",
};

const UPME_563: Norma = {
  norma: "Resolución UPME 563 de 2026",
  titulo: "Certificado de la UPME",
  texto:
    "Procedimiento vigente para obtener el certificado que da acceso a los incentivos, para proyectos de fuentes no convencionales de energía y de gestión eficiente de la energía.",
  url: "https://docs.upme.gov.co/Normatividad/563_2026.pdf",
};

const CREG_174: Norma = {
  norma: "Resolución CREG 174 de 2021",
  titulo: "Autogeneración a pequeña escala",
  texto:
    "Regula la conexión de sistemas de hasta 1 MW a la red. Permite entregar los excedentes y recibir créditos de energía; el comercializador está obligado a recibirlos.",
  url: "https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0174_2021.htm",
};

const LEY_2277: Norma = {
  norma: "Ley 2277 de 2022",
  titulo: "Sin límite del 3 %",
  texto:
    "La reforma tributaria limitó algunos beneficios de las empresas al 3 % de la renta líquida, pero la deducción de la Ley 1715 no está en esa lista.",
  url: "https://normograma.dian.gov.co/dian/compilacion/docs/ley_2277_2022.htm",
};

const NOTA_TRIBUTARIA =
  "Los beneficios tributarios requieren el certificado de la UPME y dependen de la situación de cada contribuyente. Esta información no constituye asesoría tributaria ni legal.";

// ── Páginas ──────────────────────────────────────────────────────────────────

export const SOLUCIONES: Solucion[] = [
  {
    slug: "hogar",
    nombre: "Energía solar para tu hogar",
    subtitulo: "Genera tu propia energía y baja tu factura desde el primer mes",
    metaDescripcion: "Paneles solares para hogares en Colombia: ahorro en la factura, venta de excedentes y un año de mantenimiento incluido.",
    tipo: "residencial",
    hero: "/residencial.avif",
    cifras: [
      { valor: "25–30", unidad: "años", texto: "de vida útil de los paneles" },
      { valor: "1", unidad: "año", texto: "de mantenimiento incluido" },
      { valor: "100", unidad: "%", texto: "energía renovable desde tu techo" },
    ],
    intro: {
      titulo: "Tu techo puede pagar tu luz",
      texto:
        "Cada kilovatio que producen tus paneles es uno que no le compras a la red. Durante el día tu casa usa primero la energía del sol, y la red solo completa lo que falte. El resultado se ve en la factura desde el primer mes.",
    },
    destacado: {
      imagen: "/panlestecho.avif",
      titulo: "Vende la energía que no usas",
      texto:
        "Si un día produces más de lo que consumes, los excedentes salen a la red y se te reconocen como créditos de energía, como lo establece la Resolución CREG 174 de 2021.",
    },
    bloques: [
      {
        imagen: "/bateriaresidencial.avif",
        etiqueta: "Almacenamiento",
        titulo: "Energía también de noche",
        texto: "Agrega baterías y guarda la energía del día para usarla en la noche o durante un corte de luz.",
      },
      {
        imagen: "/cargadorresidencial.avif",
        etiqueta: "Movilidad eléctrica",
        titulo: "Carga tu carro con el sol",
        texto: "Instala un cargador y alimenta tu vehículo eléctrico con la energía que produce tu propio techo.",
      },
      {
        imagen: "/techo.avif",
        etiqueta: "Instalación",
        titulo: "Nosotros nos encargamos",
        texto: "Diseño, instalación y trámite de conexión ante tu operador de red. Además, el primer año de mantenimiento va por nuestra cuenta.",
      },
    ],
    pasos: [
      { icono: "sol", titulo: "El sol", texto: "Ilumina tus paneles todos los días, incluso con nubes." },
      { icono: "panel", titulo: "Los paneles", texto: "Convierten la luz en electricidad." },
      { icono: "inversor", titulo: "El inversor", texto: "Adapta esa energía para tu casa." },
      { icono: "casa", titulo: "Tu hogar", texto: "Usa la energía y entrega a la red lo que sobra." },
    ],
    normas: [CREG_174, { ...LEY_1715_INCENTIVOS, texto: "Si declaras renta, también puedes acceder a la deducción del 50 % de la inversión y a la exclusión de IVA, con certificado de la UPME." }, UPME_563],
    preguntas: [
      { p: "¿Necesito baterías?", r: "No. Un sistema conectado a la red funciona sin baterías: lo que no produces lo tomas de la red. Las baterías son opcionales si quieres respaldo en cortes o usar tu energía de noche." },
      { p: "¿Qué pasa en días nublados?", r: "Los paneles producen menos, pero siguen generando. La red completa automáticamente lo que haga falta, así que nunca te quedas sin luz por eso." },
      { p: "¿Puedo instalar paneles si vivo en un conjunto?", r: "Sí, pero si la instalación va en zonas comunes como la cubierta, necesitas la autorización de la administración o de la asamblea de copropietarios." },
      { p: "¿Cuánto mantenimiento necesitan?", r: "Muy poco: limpieza periódica de los paneles y una revisión del sistema. El primer año de mantenimiento está incluido." },
    ],
    cierre: { titulo: "Empieza a generar tu propia energía", texto: "Cuéntanos sobre tu casa y te enviamos una cotización a la medida." },
  },

  {
    slug: "industrial",
    nombre: "Energía solar para empresas",
    subtitulo: "Hasta 50 % de tu inversión deducible en renta",
    metaDescripcion: "Energía solar para empresas en Colombia: deducción del 50 % en renta, sin IVA, sin aranceles y depreciación acelerada (Ley 1715 y Ley 2099).",
    tipo: "industrial",
    hero: "/industrial1.avif",
    cifras: [
      { valor: "50", unidad: "%", texto: "de la inversión deducible en renta" },
      { valor: "15", unidad: "años", texto: "de plazo para aplicar la deducción" },
      { valor: "33,33", unidad: "%", texto: "de depreciación anual máxima" },
    ],
    intro: {
      titulo: "Una inversión que se paga con beneficios",
      texto:
        "La energía es uno de los costos más grandes de una empresa. Con una planta solar propia reduces ese costo cada mes, lo vuelves más predecible y, gracias a la Ley 1715, recuperas parte de la inversión por la vía tributaria.",
    },
    destacado: {
      imagen: "/almacenamiento1.avif",
      titulo: "Sin IVA y sin aranceles",
      texto:
        "Los equipos y servicios del proyecto están excluidos de IVA, y los equipos importados que no se fabrican en Colombia están exentos de aranceles, con el certificado de la UPME.",
    },
    bloques: [
      {
        imagen: "/app.avif",
        etiqueta: "Control",
        titulo: "Conoce tu consumo al detalle",
        texto: "Mide cuánto generas y cuánto consumes para tomar mejores decisiones sobre la energía de tu operación.",
      },
      {
        imagen: "/almacenamiento1.avif",
        etiqueta: "Almacenamiento BESS",
        titulo: "Respaldo para tu operación",
        texto: "Suma baterías industriales para cubrir picos de consumo y mantener tus procesos críticos durante un corte.",
      },
      {
        imagen: "/industrial-remoto.avif",
        etiqueta: "Generación remota",
        titulo: "¿No tienes espacio en tu planta?",
        texto: "Genera en otro predio y usa esa energía en tu empresa, con la reglamentación de la CREG vigente desde 2026.",
      },
    ],
    pasos: [
      { icono: "grafica", titulo: "Diagnóstico", texto: "Analizamos tu consumo y tus facturas." },
      { icono: "panel", titulo: "Diseño", texto: "Dimensionamos la planta para tu operación." },
      { icono: "documento", titulo: "Certificación", texto: "Te orientamos en la solicitud ante la UPME." },
      { icono: "rayo", titulo: "Operación", texto: "Instalamos, conectamos y empiezas a ahorrar." },
    ],
    normas: [LEY_1715_INCENTIVOS, UPME_563, LEY_2277, CREG_174],
    preguntas: [
      { p: "¿Quién puede acceder a la deducción?", r: "Los contribuyentes obligados a declarar renta que inviertan directamente en el proyecto y obtengan el certificado de la UPME." },
      { p: "¿Cuándo empiezo a deducir?", r: "Desde el año gravable siguiente a la entrada en operación del proyecto, durante un período de hasta 15 años. Cada año la deducción no puede superar el 50 % de tu renta líquida." },
      { p: "¿Qué es la depreciación acelerada?", r: "Permite depreciar los equipos a una tasa de hasta 33,33 % anual, en lugar de los plazos normales. Así reduces la renta gravable en los primeros años del proyecto." },
      { p: "¿Puedo vender la energía que me sobra?", r: "Sí. Para sistemas de hasta 1 MW, la Resolución CREG 174 de 2021 permite entregar excedentes a la red y el comercializador está obligado a recibirlos." },
    ],
    cierre: { titulo: "Haz que tu energía trabaje para tu empresa", texto: "Te preparamos una propuesta con el ahorro y los beneficios tributarios de tu proyecto." },
  },

  {
    slug: "generacion-remota",
    nombre: "Generación remota",
    subtitulo: "Energía limpia para tu empresa, aunque no tengas espacio para paneles",
    metaDescripcion: "Autogeneración remota en Colombia: produce energía solar en otro predio y úsala en tu empresa (Decreto 1403 de 2024, Resolución CREG 101 099 de 2026).",
    tipo: "industrial",
    hero: "/industrial-remoto.avif",
    cifras: [
      { valor: "0", unidad: "m²", texto: "de techo necesarios en tu sede" },
      { valor: "2026", texto: "reglamentación CREG vigente" },
      { valor: "25–30", unidad: "años", texto: "de vida útil de la planta" },
    ],
    intro: {
      titulo: "Tu planta solar, donde más brilla el sol",
      texto:
        "Con la autogeneración remota produces energía en un predio con buen sol y espacio disponible, y la usas para atender el consumo de tu empresa en otro lugar. La energía viaja por la red eléctrica existente.",
    },
    destacado: {
      imagen: "/industrial-remoto1.avif",
      titulo: "Ya es una realidad en Colombia",
      texto:
        "El Decreto 1403 de 2024 habilitó la autogeneración remota y la Resolución CREG 101 099 de 2026 fijó sus reglas de conexión, operación y comercialización.",
    },
    bloques: [
      {
        imagen: "/industrial1.avif",
        etiqueta: "Sostenibilidad",
        titulo: "Cumple tus metas ambientales",
        texto: "Reduce las emisiones de CO₂ asociadas a tu consumo y respalda tus reportes de sostenibilidad con energía renovable propia.",
      },
      {
        imagen: "/panlestecho.avif",
        etiqueta: "Costos",
        titulo: "Protégete de las alzas",
        texto: "Producir tu propia energía hace tu costo más predecible frente a los cambios de precio del mercado.",
      },
    ],
    pasos: [
      { icono: "sol", titulo: "Predio con sol", texto: "Elegimos un lugar con buena radiación y espacio." },
      { icono: "panel", titulo: "Planta solar", texto: "Construimos la planta y la conectamos a la red." },
      { icono: "red", titulo: "La red", texto: "Transporta la energía hasta tu empresa." },
      { icono: "fabrica", titulo: "Tu empresa", texto: "Consume energía renovable producida por ti." },
    ],
    normas: [
      {
        norma: "Decreto 1403 de 2024",
        titulo: "Autogeneración remota",
        texto: "Habilita a personas naturales y jurídicas a producir energía en un punto de la red para atender su propio consumo en otro.",
        url: "https://gestornormativo.creg.gov.co/gestor/entorno/ee_cto_autogeneracion_remota.html",
      },
      {
        norma: "Resolución CREG 101 099 de 2026",
        titulo: "Reglas de operación",
        texto: "Define la conexión, operación y comercialización de la autogeneración remota. Usa la red existente, por lo que aplican los cargos por uso de la red.",
        url: "https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_101-99_2026.htm",
      },
      LEY_1715_INCENTIVOS,
    ],
    preguntas: [
      { p: "¿La energía llega directamente a mi empresa?", r: "La planta entrega la energía a la red y esa energía se usa para atender el consumo de tu empresa en otro punto de conexión, según las reglas de la CREG." },
      { p: "¿Tengo que pagar por usar la red?", r: "Sí. Como la energía viaja por la red eléctrica existente, aplican los cargos por uso de la red definidos en la regulación." },
      { p: "¿Aplican los beneficios tributarios?", r: "La inversión en generación con energía solar puede acceder a los incentivos de la Ley 1715 si el proyecto obtiene el certificado de la UPME." },
    ],
    cierre: { titulo: "Lleva energía limpia a tu empresa", texto: "Evaluamos tu consumo y te proponemos el esquema de generación remota adecuado." },
  },

  {
    slug: "paneles-solares",
    nombre: "Paneles solares",
    subtitulo: "Convierte tu techo en una fuente de energía por décadas",
    metaDescripcion: "Paneles solares en Colombia para hogares y empresas: 25 a 30 años de vida útil, conexión a la red y venta de excedentes.",
    tipo: "residencial",
    hero: "/techo.avif",
    cifras: [
      { valor: "25–30", unidad: "años", texto: "de vida útil" },
      { valor: "1", unidad: "MW", texto: "máximo para autogeneración a pequeña escala" },
      { valor: "1", unidad: "año", texto: "de mantenimiento incluido" },
    ],
    intro: {
      titulo: "Energía limpia, silenciosa y sin combustibles",
      texto:
        "Los paneles no tienen partes móviles, no hacen ruido y no consumen combustible. Una vez instalados, producen energía durante 25 a 30 años con un mantenimiento mínimo.",
    },
    destacado: {
      imagen: "/panlestecho.avif",
      titulo: "Ingeniería a la medida de tu techo",
      texto: "Diseñamos cada sistema según el espacio, la orientación y tu consumo, para que aproveches al máximo cada metro.",
    },
    bloques: [
      { imagen: "/residencial.avif", etiqueta: "Hogar", titulo: "Para tu casa", texto: "Baja tu factura y vende tus excedentes a la red." },
      { imagen: "/industrial1.avif", etiqueta: "Empresas", titulo: "Para tu empresa", texto: "Reduce tus costos de operación con los incentivos tributarios de la Ley 1715." },
      { imagen: "/bateriaresidencial.avif", etiqueta: "Almacenamiento", titulo: "Combínalos con baterías", texto: "Guarda la energía del día para la noche o para un corte de luz." },
    ],
    pasos: [
      { icono: "sol", titulo: "Captan el sol", texto: "Las celdas reciben la luz." },
      { icono: "panel", titulo: "Generan", texto: "La luz se convierte en corriente continua." },
      { icono: "inversor", titulo: "Convierten", texto: "El inversor la pasa a corriente alterna." },
      { icono: "red", titulo: "Se conectan", texto: "Tu consumo y la red trabajan juntos." },
    ],
    normas: [CREG_174, LEY_1715_INCENTIVOS, UPME_563],
    preguntas: [
      { p: "¿Necesito un permiso para instalarlos?", r: "Para conectar el sistema a la red se hace un trámite ante el operador de red, según la Resolución CREG 174 de 2021. Nosotros lo gestionamos por ti." },
      { p: "¿Cuánto duran?", r: "Entre 25 y 30 años de vida útil. Con el tiempo producen un poco menos, por eso los fabricantes garantizan su rendimiento por largos períodos." },
      { p: "¿Funcionan en ciudades frías o lluviosas?", r: "Sí. Los paneles funcionan con la luz, no con el calor. En días nublados producen menos, pero siguen generando." },
    ],
    cierre: { titulo: "Pon a trabajar tu techo", texto: "Cotiza tu sistema de paneles solares en minutos." },
  },

  {
    slug: "cargadores",
    nombre: "Cargadores",
    subtitulo: "Carga tu vehículo eléctrico con la energía de tu propio techo",
    metaDescripcion: "Cargadores para vehículos eléctricos con energía solar en Colombia y beneficios vigentes de la Ley 1964 de 2019.",
    tipo: "residencial",
    hero: "/cargadorresidencial.avif",
    cifras: [
      { valor: "1", unidad: "%", texto: "tope del impuesto vehicular para eléctricos" },
      { valor: "10", unidad: "%", texto: "de descuento en el SOAT" },
      { valor: "Sin", texto: "pico y placa en Bogotá" },
    ],
    intro: {
      titulo: "Tu propia estación de carga",
      texto:
        "Carga tu vehículo en casa o en tu empresa, sin filas y sin depender de estaciones públicas. Si lo combinas con paneles solares, gran parte de esa energía sale de tu propio techo.",
    },
    destacado: {
      imagen: "/panlestecho.avif",
      titulo: "Sol de día, carga cuando quieras",
      texto: "Con paneles y baterías puedes guardar la energía del día y cargar tu vehículo en la noche.",
    },
    bloques: [
      { imagen: "/residencial.avif", etiqueta: "Hogar", titulo: "Carga mientras duermes", texto: "Llega a casa, conecta tu vehículo y amanece con la batería llena." },
      { imagen: "/industrial1.avif", etiqueta: "Empresas", titulo: "Para flotas y parqueaderos", texto: "Instala puntos de carga para tus vehículos, empleados o clientes." },
    ],
    pasos: [
      { icono: "sol", titulo: "El sol", texto: "Tus paneles generan energía." },
      { icono: "panel", titulo: "Los paneles", texto: "Alimentan tu casa o empresa." },
      { icono: "bateria", titulo: "Almacenamiento", texto: "Opcional: guarda energía para después." },
      { icono: "carro", titulo: "Tu vehículo", texto: "Se carga con energía limpia." },
    ],
    normas: [
      {
        norma: "Ley 1964 de 2019",
        titulo: "Beneficios del vehículo eléctrico",
        texto: "El impuesto vehicular no puede superar el 1 % del valor comercial del vehículo, y las aseguradoras deben dar un 10 % de descuento en el SOAT.",
        url: "http://www.secretariasenado.gov.co/senado/basedoc/ley_1964_2019.html",
      },
      {
        norma: "Decreto Distrital 003 de 2023",
        titulo: "Sin pico y placa en Bogotá",
        texto: "Los vehículos eléctricos están exceptuados del pico y placa en Bogotá, con un registro gratuito ante la Secretaría Distrital de Movilidad.",
        url: "https://www.movilidadbogota.gov.co/preguntas-frecuentes/cuales-son-los-tipos-de-vehiculos-exceptuados-de-la-restriccion-de-pico-y",
      },
      {
        norma: "Oficio DIAN 673 de 2026",
        titulo: "Compra del vehículo",
        texto: "La DIAN reconoce la compra de un vehículo eléctrico como gestión eficiente de la energía: permite la deducción especial en renta y la exclusión de IVA, con certificado de la UPME.",
        url: "https://normograma.dian.gov.co/dian/compilacion/docs/oficio_dian_0673_2026.htm",
      },
    ],
    preguntas: [
      { p: "¿Qué cargador necesito?", r: "Depende de tu vehículo, de tu instalación eléctrica y de cuánto recorres al día. Lo definimos contigo en la visita técnica." },
      { p: "¿Puedo instalarlo en un conjunto residencial?", r: "Sí, en tu parqueadero privado. Si la instalación usa zonas comunes, necesitas la autorización de la administración." },
      { p: "¿Hay pico y placa para eléctricos en otras ciudades?", r: "Depende del decreto de movilidad de cada ciudad. En Bogotá están exceptuados; en otras ciudades consulta a tu Secretaría de Movilidad." },
    ],
    cierre: { titulo: "Carga tu vehículo con el sol", texto: "Cotiza tu cargador, solo o junto con paneles solares." },
  },

  {
    slug: "almacenamiento",
    nombre: "Almacenamiento",
    subtitulo: "Guarda la energía del sol y úsala cuando la necesites",
    metaDescripcion: "Baterías para hogares en Colombia: energía solar de noche y respaldo durante cortes de luz.",
    tipo: "residencial",
    hero: "/bateriaresidencial.avif",
    intro: {
      titulo: "Tu energía, disponible a cualquier hora",
      texto:
        "Los paneles producen de día, pero tú consumes también de noche. Una batería guarda lo que sobra durante el día para que lo uses cuando el sol ya no está.",
    },
    destacado: {
      imagen: "/residencial.avif",
      titulo: "Tranquilidad cuando se va la luz",
      texto: "Si hay un corte, la batería mantiene funcionando lo más importante de tu casa: luces, nevera, internet.",
    },
    bloques: [
      { imagen: "/panlestecho.avif", etiqueta: "Autoconsumo", titulo: "Aprovecha cada rayo de sol", texto: "Usa más de la energía que produces en lugar de entregarla toda a la red." },
      { imagen: "/cargadorresidencial.avif", etiqueta: "Movilidad", titulo: "Carga tu carro de noche", texto: "Usa la energía guardada durante el día para cargar tu vehículo eléctrico." },
    ],
    pasos: [
      { icono: "sol", titulo: "De día", texto: "Los paneles producen energía." },
      { icono: "bateria", titulo: "La batería", texto: "Guarda lo que no consumes." },
      { icono: "casa", titulo: "De noche", texto: "Tu casa usa la energía guardada." },
      { icono: "escudo", titulo: "En un corte", texto: "La batería te da respaldo." },
    ],
    normas: [
      {
        norma: "Ley 2099 de 2021",
        titulo: "Transición energética",
        texto: "Incluye entre sus objetivos promover el desarrollo y uso de sistemas de almacenamiento de energía junto con las fuentes renovables.",
        url: "https://gestornormativo.creg.gov.co/gestor/entorno/docs/ley_2099_2021.htm",
      },
      CREG_174,
    ],
    preguntas: [
      { p: "¿Puedo agregar baterías a un sistema que ya tengo?", r: "En muchos casos sí. Revisamos tu inversor y tu instalación para proponerte la mejor opción." },
      { p: "¿Cuánto tiempo me respalda en un corte?", r: "Depende de la capacidad de la batería y de lo que conectes. Lo dimensionamos según lo que quieras mantener encendido." },
    ],
    cierre: { titulo: "Ten energía cuando la necesites", texto: "Cotiza tu sistema de almacenamiento, solo o con paneles solares." },
  },

  {
    slug: "almacenamiento-bess",
    nombre: "Almacenamiento BESS",
    subtitulo: "Almacenamiento industrial para una operación sin interrupciones",
    metaDescripcion: "Sistemas de almacenamiento de energía con baterías (BESS) para empresas en Colombia.",
    tipo: "industrial",
    hero: "/almacenamiento1.avif",
    intro: {
      titulo: "Energía bajo control para tu operación",
      texto:
        "Un BESS (sistema de almacenamiento de energía con baterías) guarda energía para usarla cuando tu empresa más la necesita: en los picos de consumo, en un corte o cuando tu planta solar no está produciendo.",
    },
    destacado: {
      imagen: "/industrial1.avif",
      titulo: "El complemento ideal de tu planta solar",
      texto: "Guarda la energía solar del mediodía y úsala en la tarde o en la noche, cuando tu operación sigue activa.",
    },
    bloques: [
      { imagen: "/app.avif", etiqueta: "Picos de demanda", titulo: "Recorta tus picos de consumo", texto: "Usa la energía almacenada en los momentos de mayor demanda para aliviar la carga sobre tu conexión." },
      { imagen: "/almacenamiento1.avif", etiqueta: "Continuidad", titulo: "Respaldo para procesos críticos", texto: "Mantén funcionando lo esencial de tu operación ante una interrupción del servicio." },
    ],
    pasos: [
      { icono: "panel", titulo: "Generación", texto: "Tu planta solar o la red cargan el sistema." },
      { icono: "bateria", titulo: "Almacenamiento", texto: "El BESS guarda la energía." },
      { icono: "grafica", titulo: "Gestión", texto: "Se descarga en picos o cortes." },
      { icono: "fabrica", titulo: "Tu operación", texto: "Sigue funcionando sin interrupciones." },
    ],
    normas: [
      {
        norma: "Ley 2099 de 2021",
        titulo: "Transición energética",
        texto: "Incluye entre sus objetivos promover el desarrollo y uso de sistemas de almacenamiento de energía junto con las fuentes renovables.",
        url: "https://gestornormativo.creg.gov.co/gestor/entorno/docs/ley_2099_2021.htm",
      },
      CREG_174,
    ],
    preguntas: [
      { p: "¿Necesito tener paneles solares para instalar un BESS?", r: "No es obligatorio, pero juntos sacan el máximo provecho: los paneles generan y el BESS guarda para después." },
      { p: "¿Cómo se dimensiona?", r: "Analizamos tu curva de consumo, tus picos y los equipos críticos que quieres respaldar." },
    ],
    cierre: { titulo: "Asegura la energía de tu empresa", texto: "Cotiza un sistema de almacenamiento a la medida de tu operación." },
  },

  {
    slug: "monitoreo",
    nombre: "Monitoreo AI",
    subtitulo: "Mira en tiempo real cuánto generas, consumes y ahorras",
    metaDescripcion: "Monitoreo inteligente de sistemas solares: generación, consumo y ahorro en tiempo real. Próximamente.",
    tipo: "residencial",
    proximamente: true,
    hero: "/app.avif",
    intro: {
      titulo: "Tu energía, en la palma de tu mano",
      texto:
        "Estamos desarrollando una plataforma para ver, desde el celular, cuánta energía producen tus paneles, cuánta consumes y cuánto estás ahorrando, con alertas cuando algo no funcione como debería.",
    },
    destacado: {
      imagen: "/panlestecho.avif",
      titulo: "Detecta problemas antes de que cuesten",
      texto: "Si un panel produce menos de lo esperado, el sistema te avisa para revisarlo a tiempo.",
    },
    bloques: [
      { imagen: "/residencial.avif", etiqueta: "Hogar", titulo: "Entiende tu consumo", texto: "Descubre a qué horas gastas más energía y aprovecha mejor tu sistema solar." },
      { imagen: "/industrial1.avif", etiqueta: "Empresas", titulo: "Gestión eficiente de la energía", texto: "Información clara para reducir desperdicios y planear el consumo de tu operación." },
    ],
    pasos: [
      { icono: "panel", titulo: "Medición", texto: "El sistema registra generación y consumo." },
      { icono: "app", titulo: "Visualización", texto: "Lo ves en tiempo real en tu celular." },
      { icono: "grafica", titulo: "Análisis", texto: "Identificamos oportunidades de ahorro." },
      { icono: "escudo", titulo: "Alertas", texto: "Te avisamos si algo falla." },
    ],
    normas: [
      {
        ...UPME_563,
        texto: "Los proyectos de gestión eficiente de la energía también pueden acceder a los incentivos de la Ley 1715, con el certificado de la UPME.",
      },
    ],
    preguntas: [
      { p: "¿Cuándo estará disponible?", r: "Estamos trabajando en ella. Déjanos tus datos y te avisamos cuando la lancemos." },
    ],
    cierre: { titulo: "Sé de los primeros en usarlo", texto: "Déjanos tus datos y te contaremos cuando esté disponible." },
  },
];

export const NOTAS_LEGALES = [
  NOTA_TRIBUTARIA,
  "Normativa colombiana vigente a noviembre de 2026. Los beneficios de movilidad (pico y placa, impuestos locales) dependen de cada ciudad.",
];

export function getSolucion(slug: string): Solucion | undefined {
  return SOLUCIONES.find((s) => s.slug === slug);
}
