export default function Clase05() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#1F1F1F] px-5 py-10">
      <div className="mx-auto max-w-4xl">
        <a href="/curso" className="text-sm text-[#6B6B6B]">
          ← Volver al curso
        </a>

        <section className="py-8">
          <p className="text-sm font-semibold text-[#7A9E7E] mb-3">
            Clase 0.5
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em] mb-4">
            El inconsciente y el sobrepeso
          </h1>

          <p className="text-[#6B6B6B] text-lg">
            Observa qué patrones, conflictos o resistencias pueden estar influyendo en tu proceso.
          </p>
        </section>

        <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-black/5">
          <iframe
            className="w-full aspect-video rounded-[1.5rem]"
            src="https://www.youtube.com/embed/axBKEBK6ux4"
            title="Clase 0.5"
            allowFullScreen
          />
        </div>

        <section className="mt-8 bg-white rounded-[2rem] p-6 border border-black/5">
          <h2 className="text-2xl font-semibold mb-3">
            Reflexión antes de avanzar
          </h2>
          <p className="text-[#6B6B6B]">
            No necesitas resolver todo aquí. Solo empieza a observar qué parte de esto resuena contigo.
          </p>
        </section>

        <div className="mt-8 flex justify-end">
          <a
            href="/curso/modulo-1"
            className="rounded-full bg-[#7A9E7E] text-white px-6 py-3 font-semibold"
          >
            Ir al Módulo 1 →
          </a>
        </div>
      </div>
    </main>
  );
}