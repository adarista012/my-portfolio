export default function Hero() {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-center px-6'>
      <h1 className='text-5xl font-bold'>Antonio Arista</h1>
      <p className='mt-4 text-xl text-gray-400'>Mobile & Frontend Developer</p>
      <a
        href='#projects'
        className='mt-8 px-6 py-3 rounded bg-white text-black hover:bg-gray-200'
      >
        Ver proyectos
      </a>
    </section>
  )
}
