import React from 'react';

const learn = [
  {
    icon: '🍽️',
    title: 'Alimentación flexible',
    text: 'Aprende a comer comida normal sin salirte del objetivo.',
  },
  {
    icon: '📉',
    title: 'Déficit realista',
    text: 'Sin matarte de hambre ni vivir castigado.',
  },
  {
    icon: '🚶',
    title: 'Movimiento simple',
    text: 'Pasos, actividad diaria y ejercicio adaptable.',
  },
  {
    icon: '🧠',
    title: 'Control mental',
    text: 'Entiende impulsos, ansiedad y autosabotaje.',
  },
];

const modules = [
  {
    title: 'Mentalidad correcta',
    text: 'Por qué fallan las dietas, qué significa control real y cómo entrar al proceso sin humo ni expectativas falsas.',
  },
  {
    title: 'Cómo funciona bajar grasa',
    text: 'Déficit calórico explicado fácil: energía, calorías, balance y qué sí importa de verdad.',
  },
  {
    title: 'Cómo comer en la vida real',
    text: 'Tortillas, arroz, pan, antojos y comidas normales sin tener que prohibirte todo.',
  },
  {
    title: 'Control sin obsesión',
    text: 'Cómo medir, registrar y ajustar porciones sin volverte loco ni vivir castigado.',
  },
  {
    title: 'Manejo de antojos y ansiedad',
    text: 'Hambre real, impulso, ansiedad, autosabotaje y estrategias prácticas desde un enfoque psicológico.',
  },
  {
    title: 'Movimiento y actividad',
    text: 'Pasos, actividad diaria y ejercicio adaptable sin necesidad de vivir en el gimnasio.',
  },
  {
    title: 'Estancamientos y sostenibilidad',
    text: 'Qué hacer cuando te estancas, cómo ajustar y cómo sostener el proceso sin rebotar.',
  },
];

const support = [
  {
    title: '4 horas de asesoría mensual',
    text: 'Para revisar avances, resolver dudas y ajustar el proceso con más claridad.',
  },
  {
    title: 'Asistencia por WhatsApp',
    text: 'Acompañamiento práctico para que no te quedes atorado con dudas del día a día.',
  },
  {
    title: 'Garantía de satisfacción',
    text: 'Si entras, aplicas el método y no sientes que recibiste valor real, te devolvemos tu dinero bajo las condiciones de la garantía.',
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function Check() {
  return <span className="text-[#7A9E7E] font-bold shrink-0">✓</span>;
}

function XMark() {
  return <span className="text-[#1F1F1F] font-bold shrink-0">×</span>;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] font-sans pb-24 md:pb-0">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up {
          animation: fadeUp 0.75s ease-out both;
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F6F2]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <div className="font-semibold tracking-tight">Come Normal</div>
          <nav className="hidden items-center gap-8 text-sm text-[#6B6B6B] md:flex">
            <a href="#metodo" className="hover:text-[#1F1F1F] transition">Método</a>
            <a href="#acompanamiento" className="hover:text-[#1F1F1F] transition">Acompañamiento</a>
            <a href="#contenido" className="hover:text-[#1F1F1F] transition">Contenido</a>
          </nav>
          <a
            href="#comprar"
            className="rounded-full bg-[#1F1F1F] px-5 py-2.5 text-sm font-medium text-white transition hover:scale-[1.03]"
          >
            Entrar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-24 md:pt-20">
        <div className="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm text-[#6B6B6B] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#7A9E7E]" />
            Método real + enfoque psicológico
          </div>

          <h1 className="mb-6 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Come normal. Baja grasa. Sin volverte loco.
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
            Un método real para aprender a comer con control, moverte más y bajar grasa sin dietas extremas. Incluye 4 horas de asesoría mensual, asistencia por WhatsApp y garantía de satisfacción.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#comprar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#7A9E7E] px-7 py-4 font-semibold text-white shadow-lg shadow-[#7A9E7E]/20 transition hover:scale-[1.02] hover:bg-[#5F7F63] active:scale-[0.98]"
            >
              Quiero aprender el método <Arrow />
            </a>
            <a
              href="#video"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 font-semibold text-[#1F1F1F] transition hover:scale-[1.02]"
            >
              Ver explicación
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
              <p className="text-2xl font-semibold">7</p>
              <p className="text-xs text-[#6B6B6B]">módulos</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
              <p className="text-2xl font-semibold">4 h</p>
              <p className="text-xs text-[#6B6B6B]">asesoría/mes</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm border border-black/5">
              <p className="text-2xl font-semibold">✓</p>
              <p className="text-xs text-[#6B6B6B]">garantía</p>
            </div>
          </div>
        </div>

        <div className="fade-up relative md:pl-4">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-[#7A9E7E]/15 rotate-2" />
          <div className="relative rounded-[2rem] border border-black/5 bg-white p-5 shadow-2xl">
            <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#E7E4D8] p-6">
              <img
                src="/yo.jpg"
                alt="proceso real"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/45" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="text-xs text-[#6B6B6B]">Hoy</p>
                  <p className="text-4xl font-semibold">+8,200</p>
                  <p className="text-sm text-[#6B6B6B]">pasos</p>
                </div>
                <div className="rounded-full bg-[#1F1F1F] px-4 py-2 text-xs text-white shadow-sm">
                  sin extremos
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur">
                  <p className="font-semibold">Comida real</p>
                  <p className="text-sm text-[#6B6B6B]">Tortillas, arroz, pan, antojos… con control.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-semibold">0</p>
                    <p className="text-xs text-[#6B6B6B]">dietas mágicas</p>
                  </div>
                  <div className="rounded-2xl bg-white/85 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-semibold">100%</p>
                    <p className="text-xs text-[#6B6B6B]">vida real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
        <div className="grid items-center gap-8 rounded-[2rem] bg-[#1F1F1F] p-6 text-white shadow-2xl md:grid-cols-[1fr_0.95fr] md:p-10 lg:p-14">
          <div>
            <p className="mb-3 text-sm font-medium text-white/55">Mira esto antes de entrar</p>
            <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
              El video donde te explico el método.
            </h2>
            <p className="mb-6 leading-relaxed text-white/70">
              Aquí va tu video de venta: quién eres, qué estás siguiendo, por qué funciona para la vida real, cómo opera la asesoría mensual y cómo aplica la garantía de satisfacción.
            </p>
            <a
              href="#comprar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#1F1F1F] transition hover:scale-[1.02]"
            >
              Ver el curso <Arrow />
            </a>
          </div>

          <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 shadow-xl bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/yo.jpg"
              className="h-full w-full rounded-[1.5rem]"
            >
              <source src="/videoventa.mp4" type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </div>
        </div>
      </section>

      {/* AUTORIDAD */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <h2 className="mb-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            Soy psicólogo. Y también estoy en el proceso.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#6B6B6B] md:text-xl">
            No vengo a venderte una dieta milagro. Te comparto el sistema que estoy siguiendo para mejorar mi alimentación, moverme más y bajar grasa con algo que sí pueda sostener.
          </p>
        </div>
      </section>

      {/* METODO */}
      <section id="metodo" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-[#7A9E7E]">El método</p>
          <h2 className="mb-5 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            El problema no es que no sepas qué comer.
          </h2>
          <p className="text-lg leading-relaxed text-[#6B6B6B]">
            El problema es que nadie te enseñó a manejar cantidades, antojos, ansiedad, pasos, progreso y recaídas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {learn.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A9E7E]/15 text-xl">
                {item.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#6B6B6B]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FRASE */}
      <section className="px-5 py-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#1F1F1F] p-8 text-white md:p-14">
          <p className="text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
            No te voy a decir qué comer. Te voy a enseñar a manejarlo.
          </p>
        </div>
      </section>

      {/* ACOMPAÑAMIENTO */}
      <section id="acompanamiento" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-[#7A9E7E]">Acompañamiento incluido</p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            No compras solo videos. Entras a un proceso acompañado.
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Además de los 7 módulos, tienes apoyo mensual para resolver dudas, ajustar y sostener el proceso en la vida real. Aquí no compras solo videos: compras acompañamiento.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {support.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A9E7E]/15 text-2xl text-[#5F7F63]">✓</div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="leading-relaxed text-[#6B6B6B]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARA QUIEN */}
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-10 md:grid-cols-2 md:px-8 md:py-16">
        <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold">Para quién es</h2>
          {[
            'Quieres bajar grasa sin dejar tortillas, arroz o pan',
            'Ya te cansaste de dietas imposibles',
            'Quieres algo realista',
            'Estás dispuesto a medir, aprender y ajustar',
          ].map((text) => (
            <div className="flex gap-3 border-b border-black/5 py-3 last:border-0" key={text}>
              <Check />
              <p className="text-[#6B6B6B]">{text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm">
          <h2 className="mb-5 text-2xl font-semibold">Para quién no es</h2>
          {[
            'Resultados mágicos',
            'Promesas falsas',
            'Que alguien haga el trabajo por ti',
            'Contenido gratis disfrazado',
          ].map((text) => (
            <div className="flex gap-3 border-b border-black/5 py-3 last:border-0" key={text}>
              <XMark />
              <p className="text-[#6B6B6B]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="contenido" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-[#7A9E7E]">Contenido</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Qué incluye el curso
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <div key={module.title} className="rounded-3xl bg-[#F7F6F2] p-5 transition hover:scale-[1.01]">
                <div className="mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-semibold text-[#7A9E7E]">
                  {index + 1}
                </div>
                <p className="mb-2 font-semibold">{module.title}</p>
                <p className="text-sm leading-relaxed text-[#6B6B6B]">{module.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="comprar" className="mx-auto max-w-4xl px-5 py-16 text-center md:px-8 md:py-24">
        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A9E7E]/15 text-2xl text-[#5F7F63]">
          ✓
        </div>
        <h2 className="mb-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
          Sí, es de pago.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-[#6B6B6B]">
          Porque no es motivación vacía. Es un sistema ordenado con 7 módulos, 4 horas de asesoría mensual, asistencia por WhatsApp y garantía de satisfacción para que aprendas a tener control sobre tu alimentación y tu proceso.
        </p>
        <div className="mx-auto mb-8 max-w-2xl rounded-3xl border border-[#7A9E7E]/20 bg-white p-5 text-left shadow-sm">
          <p className="font-semibold text-[#1F1F1F]">Garantía directa:</p>
          <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
            Si aplicas el método, participas en el acompañamiento y no sientes que recibiste valor real, te devuelvo tu dinero bajo las condiciones de la garantía.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#7A9E7E] px-8 py-4 font-semibold text-white shadow-lg shadow-[#7A9E7E]/20 transition hover:scale-[1.02] hover:bg-[#5F7F63] active:scale-[0.98] sm:w-auto"
        >
          Entrar al curso <Arrow />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl border-t border-black/5 px-5 py-10 md:px-8">
        <p className="max-w-4xl text-xs leading-relaxed text-[#6B6B6B]">
          Este contenido es educativo y está basado en experiencia personal, psicología y formación complementaria. La asesoría mensual y asistencia por WhatsApp son acompañamiento educativo y de hábitos; no sustituyen atención médica, nutricional o psicológica personalizada. La garantía aplica bajo condiciones claras de participación y uso del método; no implica promesa médica ni resultados idénticos para todas las personas.
        </p>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-[#F7F6F2]/90 p-4 backdrop-blur-xl md:hidden">
        <a
          href="#comprar"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#7A9E7E] py-4 font-semibold text-white shadow-lg shadow-[#7A9E7E]/25"
        >
          Entrar al curso <Arrow />
        </a>
      </div>
    </main>
  );
}