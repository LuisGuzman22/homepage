"use client";

export default function Hero() {
  return (
    <section className="relative text-center py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <img
            src="/images/avatar.png"
            alt="Luis Guzmán avatar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full bg-purple-500/10"></div>
        </div>
        <h1 className="text-4xl font-bold mt-6">Hola, soy Luis Guzmán</h1>
        <p className="text-lg mt-2 text-gray-300 max-w-xl">
          Líder técnico especializado en desarrollo seguro de software,
          arquitectura de sistemas y mentoría de equipos.
        </p>
      </div>
    </section>
  );
}
