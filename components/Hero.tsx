export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-center min-h-[90vh] text-center px-4'>
      <div className='text-left'>
        <h1 className='text-6xl md:text-8xl font-bold tracking-tight bg-linear-to-b from-white to-apple-gray bg-clip-text text-transparent'>
          Antonio Dante Arista Rivas
        </h1>
        <p className='mt-6 text-xl md:text-2xl font-medium text-apple-gray'>
          Senior Mobile Developer · React Native & Flutter
        </p>
        <p className='mt-3 text-gray-500 max-w-xl'>
          9+ years building HealthTech & FinTech apps across 🇨🇦 🇺🇸 🇲🇽 🇨🇴.
          Focused on AI, biometrics, and high-performance mobile experiences,
          with strong emphasis on UX, performance, and real-world results.
        </p>
      </div>

      <div className='mt-10 flex gap-4'>
        <a
          href='#projects'
          className='px-8 py-3 bg-white text-black rounded-full font-semibold hover:opacity-90 transition-all'
        >
          View Projects
        </a>
        <a
          href='#contact'
          className='px-8 py-3 bg-transparent border border-apple-gray rounded-full font-semibold hover:bg-white/5 transition-all'
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
