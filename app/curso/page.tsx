const cards = [
  {
    title: 'Clase 0',
    text: 'Bienvenida y cómo funciona el proceso.',
    href: '/curso/clase-0',
    status: 'Empezar',
  },
  {
    title: 'Clase 0.5',
    text: 'El inconsciente y el sobrepeso.',
    href: '/curso/clase-05',
    status: 'Ver clase',
  },
  {
    title: 'Módulo 1',
    text: 'Mentalidad + diagnóstico real.',
    href: '/curso/modulo-1',
    status: 'Abrir módulo',
  },
];

export default function Curso() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm text-[#6B6B6B]">
          ← Volver al inicio
        </a>

        <section className="py-10">
          <p className="text-sm font-semibold text-[#7A9E7E] mb-3">
            Área del curso
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.05em] mb-5">
            Bienvenido al programa.
          </h1>

          <p className="text-[#6B6B6B] text-lg max-w-2xl">
            Empieza en orden. Ve cada clase, realiza los ejercicios y completa el diagnóstico inicial antes de la primera asesoría.
          </p>
        </section>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="bg-white rounded-[2rem] p-6 border border-black/5 shadow-sm hover:-translate-y-1 transition"
            >
              <p className="text-sm text-[#7A9E7E] font-semibold mb-3">
                {card.status}
              </p>

              <h2 className="text-2xl font-semibold mb-3">
                {card.title}
              </h2>

              <p className="text-[#6B6B6B]">
                {card.text}
              </p>
            </a>
          ))}
        </div>

        <section className="mt-8 bg-white rounded-[2rem] p-6 border border-black/5">
          <h2 className="text-2xl font-semibold mb-3">
            Formulario inicial
          </h2>

          <p className="text-[#6B6B6B] mb-5">
            Después de terminar el Módulo 1, completa tu diagnóstico inicial para preparar tu primera asesoría.
          </p>

          <a
            href="https://forms.gle/Ct7DAVy8CnYvWJun7"
target="_blank"
            className="inline-flex rounded-full bg-[#7A9E7E] text-white px-6 py-3 font-semibold"
          >
            Completar diagnóstico
          </a>
        </section>
      </div>
    </main>
  );
}