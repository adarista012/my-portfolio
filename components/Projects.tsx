const projects = [
  {
    company: 'LUCID',
    role: 'Senior React Native Developer',
    period: 'Aug 2025 - Present · 4 mos',
    location: 'Canada · Remote',
    description: [
      'Built a music & biometrics recovery app with FaceMesh, HRV, and breathing tracking.',
      'Reduced onboarding friction by 40% using clean architecture and performant React Native patterns.'
    ],
    tech: [
      'React Native',
      'Health',
      'SwiftUI',
      'Swift',
      'Health Tech',
      'Medical Technology'
    ],
    url: 'https://www.linkedin.com/company/thelucidproject/'
  },
  {
    company: 'Vureloapp',
    role: 'Flutter Engineer',
    period: 'May 2025 - Jul 2025 · 3 mos',
    location: 'Bogota, Colombia · Remote',
    description: [
      'Developed a crypto wallet integrated with blockchain APIs.',
      'Implemented secure user authentication and optimized transaction flows.'
    ],
    tech: ['Flutter'],
    url: 'https://www.vureloapp.com'
  },
  {
    company: 'King Tide',
    role: 'Flutter Engineer',
    period: 'Apr 2024 - Mar 2025 · 1 yr',
    location: 'Los Angeles, USA · Remote',
    description: [
      'Developed a fully functional iOS app from scratch using Flutter, integrating Firebase OTP, Sentry, and Stripe.'
    ],
    tech: ['Flutter', 'Dart', 'Firebase OTP', 'Sentry', 'Stripe'],
    url: 'https://buzzstar.io/'
  },
  {
    company: 'HelloWellness',
    role: 'Mobile Engineer, Data Analyst',
    period: 'Dec 2023 - May 2024 · 6 mos',
    location: 'California, USA · Remote',
    description: [
      'Developed iOS apps from scratch using SwiftUI & React Native, implemented HealthKit and HIPAA-compliant data analysis.',
      'Analyzed and displayed patient data using scikit-learn.'
    ],
    tech: [
      'React Native',
      'SwiftUI',
      'Python',
      'TypeScript',
      'Scikit-Learn',
      'Bubble.io'
    ],
    url: 'https://hellowellness.ai/motion/'
  },
  {
    company: 'UR International',
    role: 'Freelance Mobile Developer',
    period: 'Oct 2023 - Jan 2024 · 4 mos',
    location: 'Texas, USA · Remote',
    description: [
      'Developed new views and implemented native functions like camera on the app.',
      'Applied clean code and clean architecture, integrated backend and frontend.'
    ],
    tech: ['Flutter', 'Microsoft Azure', 'Postman API'],
    url: ''
  },
  {
    company: 'Develoop Software',
    role: 'Mobile Engineer',
    period: 'Jun 2023 - Sep 2023 · 4 mos',
    location: 'Barcelona, Spain · Remote',
    description: [
      'Developed iOS app using UIKit and Bluetooth to connect with specific hardware.',
      'Reduced app resource usage and performed maintenance on existing apps.'
    ],
    tech: ['Flutter', 'SwiftUI', 'UIKit', 'iOS', 'REST API', 'Odoo', 'IoT'],
    url: ''
  },
  {
    company: 'CECASEM',
    role: 'Mobile Developer',
    period: 'Jul 2023 - Aug 2023 · 2 mos',
    location: 'La Paz, Bolivia · Remote',
    description: [
      "Developed a survey app to measure child malnutrition in Bolivia's communities.",
      'Displayed and analyzed data, created actionable solutions.'
    ],
    tech: [
      'Flutter',
      'Firebase',
      'Google Sheets',
      'Mobile Product Development'
    ],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7096688000931090432?utm_source=share&utm_medium=member_desktop&rcm=ACoAADO6jDoBHc-m1pNTajlyEiJ0Yg93cWWGD7I'
  },
  {
    company: 'Klopp',
    role: 'Front-end Mobile Flutter Developer',
    period: 'Jun 2022 - Nov 2022 · 6 mos',
    location: 'Mexico · Remote',
    description: [
      'Reduced resource consumption of mobile app applying clean code concepts.',
      'Integrated backend and frontend, implemented new views and features based on Figma designs.'
    ],
    tech: ['Flutter', 'Swift', 'GraphQL', 'Figma', 'GitLab', 'Postman API'],
    url: 'https://landing.klopp.mx/Inicio'
  },
  {
    company: 'Grupo COGNOS',
    role: 'Substitute Instructor',
    period: 'Jan 2022 - Nov 2022 · 11 mos',
    location: 'Santa Cruz, Bolivia · Remote',
    description: [
      'Taught UI/UX concepts and Figma.',
      'Explained OOP concepts and applied them to create apps in Flutter and Java.'
    ],
    tech: ['Figma', 'Slack', 'Dart', 'Swift', 'Java', 'OOP'],
    url: ''
  },
  {
    company: 'Estacion Vital',
    role: 'Senior Flutter Developer',
    period: 'Aug 2022 - Oct 2022 · 3 mos',
    location: 'Nicaragua · Remote',
    description: [
      'Updated app to new version and published to stores.',
      'Enhanced Firebase services, implemented new features and reduced bugs.'
    ],
    tech: ['Flutter', 'Swift', 'Firebase', 'JIRA', 'Figma', 'Google Analytics'],
    url: 'https://ni.linkedin.com/company/estacionvital'
  },
  {
    company: 'Itzam Development Design',
    role: 'Mobile App Developer',
    period: 'Nov 2021 - Jul 2022 · 9 mos',
    location: 'Quito, Ecuador · Remote',
    description: [
      'Developed new app views with Figma designs, applied clean code and architecture.',
      'Integrated backend and frontend, collected metrics from specialized IoT hardware.'
    ],
    tech: [
      'Flutter',
      'Swift',
      'Figma',
      'Node.js',
      'Postman API',
      'Mobile Applications'
    ],
    url: 'https://aseguradoradelsur.com/home'
  }
]

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-8 text-white'>
      <h2 className='text-3xl font-bold mb-10 text-center'>
        Projects & Experience
      </h2>

      <div className='space-y-8'>
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block border border-gray-700 p-6 rounded-lg hover:bg-gray-800 transition'
          >
            <h3 className='text-xl font-semibold'>{p.company}</h3>
            <p className='text-gray-400'>
              {p.role} · {p.period} · {p.location}
            </p>

            <ul className='list-disc ml-6 mt-3 text-gray-300 space-y-1'>
              {p.description.map((d, idx) => (
                <li key={idx}>{d}</li>
              ))}
            </ul>

            <div className='mt-3 flex flex-wrap gap-2'>
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className='bg-gray-700 px-2 py-1 rounded text-sm'
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
