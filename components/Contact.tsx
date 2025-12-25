export default function Contact() {
  return (
    <section id='contact' className='py-32 px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* iOS Style Section Header */}
        <h2 className='text-sm font-bold tracking-[0.2em] text-apple-gray uppercase mb-4 ml-2'>
          Get in Touch
        </h2>

        {/* Main Card (Apple Card Style) */}
        <div className='relative overflow-hidden bg-linear-to-br from-[#1c1c1e] to-[#000000] border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl'>
          {/* Subtle Ambient Light Effect */}
          <div className='absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full'></div>

          <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='text-left flex-1'>
              <h3 className='text-4xl md:text-5xl font-bold tracking-tight mb-4'>
                Let's build your <br /> next project.
              </h3>
              <p className='text-lg text-apple-gray max-w-sm'>
                Currently available for Senior roles, strategic consulting, or
                high-impact mobile projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col gap-4 w-full md:w-auto'>
              <a
                href='mailto:ad.arista012@gmail.com'
                className='flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all'
              >
                <span>Send Email</span>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </a>

              <a
                href='https://wa.me/59174040827'
                target='_blank'
                className='flex items-center justify-center gap-3 px-8 py-4 bg-[#25d366]/10 text-[#25d366] border border-[#25d366]/20 rounded-2xl font-bold hover:bg-[#25d366]/20 transition-all'
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Card Footer with Social Links */}
          <div className='mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-6'>
            <div className='flex gap-8'>
              <a
                href='https://github.com/adarista012'
                target='_blank'
                className='text-apple-gray hover:text-white transition-colors font-medium'
              >
                GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/antonio-dante-arista-rivas-mobile-developer/'
                target='_blank'
                className='text-apple-gray hover:text-white transition-colors font-medium'
              >
                LinkedIn
              </a>
            </div>

            <p className='text-xs font-mono text-gray-600 tracking-tighter uppercase'>
              © 2025 Antonio Dante · Senior Mobile Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
