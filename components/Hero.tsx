export default function Hero() {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-center px-6'>
      <h1 className='text-5xl font-bold'>Antonio Dante Arista Rivas</h1>

      <p className='mt-4 text-xl text-gray-400'>
        Senior Mobile Developer · React Native & Flutter
      </p>

      <p className='mt-3 text-gray-500 max-w-xl'>
        9+ years building HealthTech & FinTech apps across 🇨🇦 🇺🇸 🇲🇽 🇨🇴. Focused
        on AI, biometrics, and high-performance mobile experiences, with strong
        emphasis on UX, performance, and real-world results.
      </p>
      <div className='mt-8 flex gap-4'>
        <a
          href='#projects'
          className='px-6 py-3 rounded bg-white text-black font-semibold hover:bg-gray-200 transition'
        >
          View Projects
        </a>

        <a
          href='#contact'
          className='px-6 py-3 rounded border border-gray-600 hover:bg-gray-800 transition'
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
