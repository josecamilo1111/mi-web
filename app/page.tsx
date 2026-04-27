import React from 'react';

const learn = [
  { icon: '🍽️', title: 'Alimentación flexible', text: 'Aprende a comer comida normal sin salirte del objetivo.' },
  { icon: '📉', title: 'Déficit realista', text: 'Sin matarte de hambre ni vivir castigado.' },
  { icon: '🚶', title: 'Movimiento simple', text: 'Pasos, actividad diaria y ejercicio adaptable.' },
  { icon: '🧠', title: 'Control mental', text: 'Entiende impulsos, ansiedad y autosabotaje.' },
];

const modules = [
  'La mentalidad correcta',
  'Cómo funciona bajar grasa',
  'Cómo calcular tus comidas',
  'Cómo manejar antojos',
  'Pasos y actividad física',
  'Estancamientos y ajustes',
  'Cómo sostenerlo en la vida real',
  '4 horas de asesoría mensual',
  'Asistencia por WhatsApp',
];

function Arrow() {
  return <span>→</span>;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#F7F6F2]/90 backdrop-blur border-b border-black/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between">
          <div className="font-semibold">Come Normal</div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Entrar</button>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Come normal. Baja grasa. Sin volverte loco.
          </h1>

          <p className="text-lg text-[#6B6B6B] mb-6">
            Método real con acompañamiento. Incluye asesoría mensual y soporte por WhatsApp.
          </p>

          <button className="bg-[#7A9E7E] text-white px-6 py-4 rounded-full font-semibold w-full md:w-auto">
            Quiero aprender el método <Arrow />
          </button>
        </div>

        {/* IMAGEN PREMIUM */}
        <div className="relative">

          <div className="absolute -inset-4 bg-[#7A9E7E]/20 rounded-[2.5rem] rotate-2"></div>

          <div className="relative bg-white rounded-[2rem] p-4 shadow-2xl border border-black/5">

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/yo.jpg"
                alt="proceso real"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* VIDEO */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <div className="bg-black text-white p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Mira esto antes de entrar
          </h2>
          <div className="bg-gray-700 h-56 flex items-center justify-center rounded-xl">
            ▶ Video aquí
          </div>
        </div>
      </section>

      {/* APRENDIZAJE */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-3xl font-semibold mb-6">Qué vas a aprender</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {learn.map((item) => (
            <div key={item.title} className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-[#6B6B6B]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACOMPAÑAMIENTO */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-3xl font-semibold mb-6">
          No compras solo un curso
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold">4 horas de asesoría mensual</h3>
            <p className="text-sm text-[#6B6B6B]">
              Ajustes reales y seguimiento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold">Asistencia por WhatsApp</h3>
            <p className="text-sm text-[#6B6B6B]">
              Para dudas del día a día.
            </p>
          </div>
        </div>
      </section>

      {/* MODULOS */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="text-3xl font-semibold mb-6">Contenido</h2>

        <div className="grid md:grid-cols-3 gap-3">
          {modules.map((m, i) => (
            <div key={m} className="bg-white p-4 rounded-xl flex gap-3">
              <span className="text-[#7A9E7E] font-bold">{i + 1}</span>
              <p>{m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-5 py-16">
        <h2 className="text-4xl font-bold mb-4">Sí, es de pago.</h2>

        <p className="text-[#6B6B6B] mb-6">
          Curso + asesoría + soporte real.
        </p>

        <button className="bg-[#7A9E7E] text-white px-8 py-4 rounded-full font-semibold">
          Entrar al curso <Arrow />
        </button>
      </section>

    </main>
  );
}