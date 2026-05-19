const videos = [
  [
    'Video 1',
    'No cambies nada todavía',
    'https://www.youtube.com/embed/seDP0bMiA94',
  ],
  [
    'Video 2',
    'Cómo registrar lo que comes',
    'https://www.youtube.com/embed/5Vu6rJ-AaSk',
  ],
  [
    'Video 3',
    'Cómo tomar medidas',
    'https://www.youtube.com/embed/ojnu90wSglo',
  ],
  [
    'Video 4',
    'Cómo interpretar tus datos',
    'https://www.youtube.com/embed/HgbDQD-JLew',
  ],
  [
    'Video 5',
    'Cómo usar ChatGPT dentro del proceso',
    'https://www.youtube.com/embed/kcV1YFqU9Nw',
  ],
  [
    'Video 6',
    'Qué vamos a hacer con toda esta información',
    'https://www.youtube.com/embed/m1VlnhmGiss',
  ],
];

export default function Modulo1() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] px-5 py-10">
      <div className="mx-auto max-w-5xl">
        <a href="/curso" className="text-sm text-[#6B6B6B]">
          ← Volver al curso
        </a>

        <section className="py-8">
          <p className="text-sm font-semibold text-[#7A9E7E] mb-3">
            Módulo 1
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-4">
            Mentalidad + diagnóstico real
          </h1>

          <p className="text-[#6B6B6B] text-lg max-w-3xl">
            Antes de cambiar algo, primero tienes que verlo.
            Aquí vas a registrar, medir y entender desde dónde estás empezando.
          </p>
        </section>

        <div className="space-y-8">
          {videos.map(([label, title, src]) => (
            <section
              key={src}
              className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm border border-black/5"
            >
              <p className="text-sm text-[#7A9E7E] font-semibold mb-2">
                {label}
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                {title}
              </h2>

              <iframe
                className="w-full max-w-[420px] mx-auto aspect-[9/16] rounded-[1.5rem]"
                src={src}
                title={title}
                allowFullScreen
              />
            </section>
          ))}
        </div>

        <section className="mt-10 bg-white rounded-[2rem] p-6 border border-black/5">
          <h2 className="text-2xl font-semibold mb-3">
            Completa tu diagnóstico inicial
          </h2>

          <p className="text-[#6B6B6B] mb-5">
            Aquí vas a enviar tus medidas, registro de alimentación,
            observaciones y preguntas de autoexploración.
            Esto servirá para preparar tu primera asesoría.
          </p>

          <a
            href="https://forms.gle/Ct7DAVy8CnYvWJun7"
target="_blank"
            className="inline-flex rounded-full bg-[#7A9E7E] text-white px-6 py-3 font-semibold"
          >
            Completar formulario inicial
          </a>
        </section>
      </div>
    </main>
  );
}