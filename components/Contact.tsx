export default function Contact() {
  return (
    <section className='py-20 text-center'>
      <h2 className='text-3xl font-bold'>Contacto</h2>

      <div className='mt-6 flex flex-col sm:flex-row justify-center gap-4 px-8'>
        <a
          href='https://wa.me/59174040827?text=Hola%20vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo'
          target='_blank'
          className='bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition'
        >
          WhatsApp: +591 74040827
        </a>

        <a
          href='mailto:ad.arista012@gmail.com'
          className='border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition'
        >
          Email: ad.arista012@gmail.com
        </a>
      </div>
      <div className='mt-6 flex justify-center gap-6'>
        <a href='https://github.com/adarista012' target='_blank'>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/antonio-dante-arista-rivas-mobile-developer/'
          target='_blank'
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
