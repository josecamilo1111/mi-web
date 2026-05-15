export default function Clase0() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <a href="/curso" className="text-sm text-[#6B6B6B]">
          ← Volver al curso
        </a>

        <section className="py-8">
          <p className="text-sm font-semibold text-[#7A9E7E] mb-3">
            Clase 0
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-4">
            Bienvenida: cómo funciona este proceso
          </h1>

          <p className="text-[#6B6B6B] text-lg">
            Aquí entenderás cómo usar el curso, el acompañamiento,
            WhatsApp y las asesorías.
          </p>
        </section>

        <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-black/5">
          <iframe
            className="w-full max-w-[420px] mx-auto aspect-[9/16] rounded-[1.5rem]"
            src="https://www.youtube.com/embed/BOui673zCNo"
            title="Clase 0"
            allowFullScreen
          />
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/curso/clase-05"
            className="rounded-full bg-[#7A9E7E] text-white px-6 py-3 font-semibold"
          >
            Continuar →
          </a>
        </div>
      </div>
    </main>
  );
}