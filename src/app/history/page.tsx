'use client';

export default function History() {
  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-max-width mx-auto">
      <div className="mb-16">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">HISTORY_LOG</h1>
        <p className="text-on-surface-variant max-w-2xl text-body-lg">Professional timeline and experience records.</p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-subtle ml-4 pl-10 space-y-12 max-w-2xl">
        {[
          {
            period: '[ 2023 - PRESENT ]',
            title: 'LEAD DEVELOPER @ UNIVERSITY TECH LAB',
            description: 'Spearheading the development of open-source research tools. Optimized data processing pipelines by 40% using concurrent programming patterns in Go.',
            opacity: 'opacity-100',
            details: [
              'Led a team of 5 engineers in building distributed systems',
              'Published 3 research papers on parallel computing',
              'Mentored 12 junior developers',
            ],
          },
          {
            period: '[ 2022 - 2023 ]',
            title: 'SOFTWARE ENGINEERING INTERN @ DATAFLOW_CO',
            description: 'Implemented microservices architecture for real-time telemetry. Migrated legacy monolith systems to Dockerized environments.',
            opacity: 'opacity-50',
            details: [
              'Designed and implemented 4 microservices',
              'Reduced deployment time by 60%',
              'Implemented CI/CD pipeline using GitHub Actions',
            ],
          },
          {
            period: '[ 2021 - 2022 ]',
            title: 'CS TEACHING ASSISTANT',
            description: 'Mentored 100+ students in Data Structures and Algorithms. Automated grading systems using Python scripts.',
            opacity: 'opacity-30',
            details: [
              'Taught 3 sections of advanced algorithms',
              'Created automated grading system for 200+ students',
              'Developed comprehensive study materials',
            ],
          },
        ].map((entry, index) => (
          <div key={index} className="relative">
            <div className={`absolute -left-[45px] top-1 w-[10px] h-[10px] bg-surface-tint rounded-full shadow-[0_0_10px_#4AF626] ${entry.opacity}`}></div>
            <span className="text-label-sm font-code-md text-secondary block mb-2">{entry.period}</span>
            <h3 className="text-headline-md font-headline-md text-on-surface">{entry.title}</h3>
            <p className="text-on-surface-variant text-body-md mt-4">{entry.description}</p>
            
            <div className="mt-6 pl-4 border-l border-outline-variant/50 space-y-2">
              {entry.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 text-on-surface-variant text-body-md">
                  <span className="text-surface-tint mt-1">▸</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Projects Completed', value: '12+' },
          { label: 'Years Experience', value: '3' },
          { label: 'Students Mentored', value: '100+' },
          { label: 'Publications', value: '3' },
        ].map((stat, idx) => (
          <div key={idx} className="terminal-window p-6 rounded-lg border border-outline-variant">
            <div className="text-surface-tint text-2xl font-headline-md mb-2">{stat.value}</div>
            <div className="text-on-surface-variant text-label-sm">{stat.label}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
