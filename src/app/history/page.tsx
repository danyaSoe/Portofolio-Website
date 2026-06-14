'use client';

import { historyEntries } from '@/lib/historyData';

export default function History() {
  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-max-width mx-auto">
      <div className="mb-16">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">HISTORY_LOG</h1>
        <p className="text-on-surface-variant max-w-2xl text-body-lg">Professional timeline and experience records.</p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-subtle ml-4 pl-10 space-y-12 max-w-2xl">
        {historyEntries.map((entry, index) => {
          const opacityClass = index === 0 ? 'opacity-100' : index === 1 ? 'opacity-75' : index === 2 ? 'opacity-70' : 'opacity-50';
          return (
            <div key={entry.id} className="relative">
              <div className={`absolute -left-[45px] top-1 w-[10px] h-[10px] bg-surface-tint rounded-full shadow-[0_0_10px_#4AF626] ${opacityClass}`}></div>
              <span className="text-label-sm font-code-md text-secondary block mb-2">{entry.year}</span>
              <h3 className="text-headline-md font-headline-md text-on-surface">
                {entry.experience} as {entry.role}
              </h3>
              <p className="text-on-surface-variant text-body-md mt-4">{entry.desc}</p>
              <div className="mt-6 pl-4 border-l border-outline-variant/50 space-y-2">
                {entry.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-on-surface-variant text-body-md">
                    <span className="text-surface-tint mt-1">▸</span>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
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
