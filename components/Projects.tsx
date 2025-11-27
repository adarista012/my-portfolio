const projects = [
  { title: 'HidrAntal', desc: 'App de hidratación inteligente', link: '#' },
  { title: 'AntalQR', desc: 'Generador de QR con SwiftUI', link: '#' }
]

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-8'>
      <h2 className='text-3xl font-bold mb-10'>Proyectos</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className='block border border-gray-700 p-6 rounded-lg hover:bg-gray-800'
          >
            <h3 className='text-xl font-semibold'>{p.title}</h3>
            <p className='text-gray-400'>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
