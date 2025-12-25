const projects = [
  {
    company: 'LUCID',
    role: 'Senior React Native Developer',
    period: 'Aug 2025 - Present',
    location: 'Canada · Remote',
    description: [
      'Architected a music & biometrics recovery application featuring FaceMesh, HRV, and respiratory tracking.',
      'Reduced onboarding friction by 40% using Clean Architecture and high-performance React Native design patterns.'
    ],
    tech: ['React Native', 'HealthKit', 'SwiftUI', 'Swift', 'MedTech'],
    url: 'https://www.linkedin.com/company/thelucidproject/'
  },
  {
    company: 'Vureloapp',
    role: 'Flutter Engineer',
    period: 'May 2025 - Jul 2025',
    location: 'Colombia · Remote',
    description: [
      'Engineered a secure cryptocurrency wallet integrated with blockchain APIs.',
      'Optimized transaction flows and implemented robust user authentication protocols.'
    ],
    tech: ['Flutter', 'Blockchain', 'Crypto APIs'],
    url: 'https://www.vureloapp.com'
  },
  {
    company: 'King Tide',
    role: 'Flutter Engineer',
    period: 'Apr 2024 - Mar 2025',
    location: 'Los Angeles, USA · Remote',
    description: [
      'Developed a full-scale iOS application from the ground up using Flutter, integrating Firebase OTP, Sentry, and Stripe payments.'
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Sentry', 'Stripe'],
    url: 'https://buzzstar.io/'
  },
  {
    company: 'HelloWellness',
    role: 'Mobile Engineer & Data Analyst',
    period: 'Dec 2023 - May 2024',
    location: 'California, USA · Remote',
    description: [
      'Built native iOS applications using SwiftUI & React Native, implementing HealthKit and HIPAA-compliant data processing.',
      'Leveraged Scikit-Learn to analyze and visualize complex patient health metrics.'
    ],
    tech: ['React Native', 'SwiftUI', 'Python', 'Scikit-Learn'],
    url: 'https://hellowellness.ai/motion/'
  },
  {
    company: 'UR International',
    role: 'Freelance Mobile Developer',
    period: 'Oct 2023 - Jan 2024',
    location: 'Texas, USA · Remote',
    description: [
      'Engineered native camera functionalities and custom UI views for enterprise mobile solutions.',
      'Applied Clean Code principles and Clean Architecture to ensure backend-frontend synchronization.'
    ],
    tech: ['Flutter', 'Azure', 'Postman API'],
    url: ''
  },
  {
    company: 'Develoop Software',
    role: 'Mobile Engineer',
    period: 'Jun 2023 - Sep 2023',
    location: 'Barcelona, Spain · Remote',
    description: [
      'Developed iOS applications using UIKit and Bluetooth Low Energy (BLE) to interface with specialized hardware.',
      'Optimized app resource consumption and maintained legacy iOS applications.'
    ],
    tech: ['UIKit', 'SwiftUI', 'IoT', 'Odoo API'],
    url: ''
  },
  {
    company: 'CECASEM',
    role: 'Mobile Developer',
    period: 'Jul 2023 - Aug 2023',
    location: 'Bolivia · Remote',
    description: [
      'Developed a data-driven survey app to measure child malnutrition in rural communities.',
      'Analyzed community data to create actionable health solutions.'
    ],
    tech: ['Flutter', 'Firebase', 'Google Sheets API'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7096688000931090432'
  },
  {
    company: 'Klopp',
    role: 'Front-end Mobile Flutter Developer',
    period: 'Jun 2022 - Nov 2022',
    location: 'Mexico · Remote',
    description: [
      'Significant reduction in app resource usage by applying Clean Code concepts.',
      'Integrated GraphQL backends with high-fidelity Figma designs.'
    ],
    tech: ['Flutter', 'Swift', 'GraphQL', 'Figma'],
    url: 'https://landing.klopp.mx/Inicio'
  },
  {
    company: 'Grupo COGNOS',
    role: 'Substitute Instructor',
    period: 'Jan 2022 - Nov 2022',
    location: 'Bolivia · Remote',
    description: [
      'Taught UI/UX design concepts and Figma best practices.',
      'Educated students on OOP principles and cross-platform app development using Flutter and Java.'
    ],
    tech: ['Figma', 'Dart', 'Java', 'OOP'],
    url: ''
  }
]
export default function Projects() {
  return (
    <section id='projects' className='py-24 max-w-5xl mx-auto px-6'>
      <h2 className='text-4xl md:text-5xl font-bold mb-16 tracking-tight text-left'>
        Featured Experience
      </h2>

      <div className='grid grid-cols-1 gap-8'>
        {projects.map((p, i) => (
          /* Cambiamos el div por un 'a' y nos aseguramos que sea un bloque clicable */
          <a
            key={i}
            href={p.url || '#'}
            target={p.url ? '_blank' : '_self'}
            rel='noopener noreferrer'
            className={`group relative block bg-card-bg border border-white/5 rounded-[2.5rem] p-8 md:p-12 hover:border-white/20 transition-all duration-500 backdrop-blur-xl shadow-2xl ${
              !p.url && 'cursor-default'
            }`}
          >
            <div className='flex flex-col md:flex-row justify-between items-start mb-6'>
              <div className='text-left'>
                <h3 className='text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-apple-blue transition-colors'>
                  {p.company}
                </h3>
                <p className='text-lg font-medium text-apple-blue mt-1'>
                  {p.role}
                </p>
              </div>
              <div className='mt-2 md:mt-0 text-left md:text-right'>
                <p className='text-xs font-mono uppercase tracking-[0.2em] text-apple-gray'>
                  {p.period}
                </p>
                <p className='text-sm text-gray-500 mt-1'>{p.location}</p>
              </div>
            </div>

            <ul className='space-y-4 mb-8 text-left'>
              {p.description.map((desc, idx) => (
                <li
                  key={idx}
                  className='text-gray-400 leading-relaxed text-lg flex items-start'
                >
                  <span className='mr-3 text-white/20 mt-1.5'>•</span>
                  {desc}
                </li>
              ))}
            </ul>

            <div className='flex flex-wrap gap-2 mb-8'>
              {p.tech.map((t) => (
                <span
                  key={t}
                  className='px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs font-medium text-gray-300 group-hover:bg-white/10 transition-colors'
                >
                  {t}
                </span>
              ))}
            </div>

            {p.url && (
              <div className='inline-flex items-center text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-all'>
                View Project Details
                <span className='ml-2 transform group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
