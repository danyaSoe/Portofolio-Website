'use client';

import Image from 'next/image';

export default function About() {
  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-max-width mx-auto">
      {/* Hero Section / Identity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-section-gap">
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-2 bg-surface-tint/20 rounded-lg blur-lg group-hover:bg-surface-tint/30 transition-all duration-500"></div>
          <div className="relative terminal-window p-1 rounded-lg overflow-hidden border-2 border-surface-tint/50 shadow-2xl">
            <Image
              alt="Danya Damaris"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtJrmfTYgh4UqbnAK2IJckWULaErbHDi391aRlemcyYQC2Y9NrzbDPaqrGq18JgP-m0trDtWcEz5Vb95WoLbAydDP2QSvgELZaAs-7m-oM8ytjOweKufgQiBBPMb4x_oHkUbOw1PbkfMw4qQwWd8PYjdI7EF2Pl-14EwJ0mBZErgqV-9Lvt6ZZEY2aMQUKw1UFtGvdTFBknCMtAEyHb8Jlou_jroFSTBnGhcevApONrlMCAfzhS_HU6aMY"
              width={400}
              height={500}
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
            />
            <div className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-surface/90 border border-surface-tint/30 backdrop-blur-md rounded">
              <p className="font-code-md text-label-sm text-surface-tint">ID: RIVERA_ALEX_SR_ENG</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-surface-tint glow-green"></span>
            <span className="font-code-md text-label-sm text-surface-tint uppercase tracking-widest">System Profile Loaded</span>
          </div>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
            Engineering <span className="text-surface-tint">Architectural</span> Solutions for the Future.
          </h1>
          <div className="terminal-window p-6 rounded-lg border-l-4 border-l-surface-tint">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              &gt; I am Danya Damaris, a senior software engineer specializing in high-performance distributed systems and modern UI architectures. My approach blends the rigorous technical precision of low-level systems with the aesthetic elegance of retro-futuristic design.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 terminal-window font-code-md text-label-sm hover:text-surface-tint hover:glow-green transition-all duration-150 active:scale-95 group">
                INIT_CHAT <span className="material-symbols-outlined align-middle ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="px-6 py-2 font-code-md text-label-sm text-on-surface-variant hover:text-surface-tint underline underline-offset-8 transition-colors">
                DOWNLOAD_CV_V2.PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Narrative / Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-gap">
        <div className="md:col-span-2 terminal-window p-8 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">architecture</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">0x01: Philosophy</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Technology isn't just a tool; it's a medium for architectural excellence. I believe in writing code that is self-documenting, systems that are resilient by default, and interfaces that respect the user's intelligence. My work is heavily influenced by the modularity of Unix and the tactile feedback of legacy hardware.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
              <h4 className="font-code-md text-label-sm text-on-surface mb-2">MODULARITY</h4>
              <div className="w-full h-1 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-surface-tint"></div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
              <h4 className="font-code-md text-label-sm text-on-surface mb-2">PRECISION</h4>
              <div className="w-full h-1 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-surface-tint"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-window p-8 rounded-lg bg-surface-tint/[0.03]">
          <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">0x02: Focus</h3>
          <ul className="space-y-4">
            {[
              {
                label: 'Cloud Scalability',
                desc: 'Kubernetes & AWS native solutions',
              },
              {
                label: 'Interactive UX',
                desc: 'Three.js & WebGL experiences',
              },
              {
                label: 'Open Source',
                desc: 'Core contributor to rust-lang libs',
              },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-surface-tint mt-1" style={{ fontVariationSettings: '"FILL" 1' }}>
                  check_circle
                </span>
                <div>
                  <span className="font-code-md text-on-surface">{item.label}</span>
                  <p className="text-label-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Matrix Terminal */}
      <section className="mb-section-gap">
        <div className="terminal-window rounded-lg overflow-hidden shadow-2xl">
          <div className="terminal-header h-10 px-4 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/40 border border-error/60"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/40 border border-secondary/60"></div>
              <div className="w-3 h-3 rounded-full bg-surface-tint/40 border border-surface-tint/60"></div>
            </div>
            <div className="font-code-md text-label-sm text-on-surface-variant">root@sys_rivera: ~/skills_matrix</div>
            <div className="w-12"></div>
          </div>
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Core Engineering */}
            <div>
              <h3 className="font-headline-md text-headline-md mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">developer_board</span>
                CORE_STACK
              </h3>
              <div className="space-y-8">
                {[
                  { name: 'RUST / WEB_ASSEMBLY', skill: 94 },
                  { name: 'TYPESCRIPT / REACT / NEXT', skill: 98 },
                  { name: 'PYTHON / FAST_API', skill: 82 },
                ].map((item, idx) => (
                  <div key={idx} className="skill-row">
                    <div className="flex justify-between font-code-md text-label-sm mb-2">
                      <span>{item.name}</span>
                      <span className="text-surface-tint">{item.skill}%</span>
                    </div>
                    <div className="w-full h-4 bg-surface-container-highest border border-outline-variant p-0.5 rounded-sm">
                      <div className="h-full bg-surface-tint w-full shadow-[0_0_8px_rgba(52,229,7,0.8)]" style={{ width: `${item.skill}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals & Ops */}
            <div>
              <h3 className="font-headline-md text-headline-md mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">brush</span>
                INFRA_VISUALS
              </h3>
              <div className="space-y-8">
                {[
                  { name: 'WEBGL / THREE_JS / SHADERS', skill: 88 },
                  { name: 'KUBERNETES / TERRAFORM', skill: 85 },
                  { name: 'POSTGRES / REDIS / VECTOR_DB', skill: 91 },
                ].map((item, idx) => (
                  <div key={idx} className="skill-row">
                    <div className="flex justify-between font-code-md text-label-sm mb-2">
                      <span>{item.name}</span>
                      <span className="text-surface-tint">{item.skill}%</span>
                    </div>
                    <div className="w-full h-4 bg-surface-container-highest border border-outline-variant p-0.5 rounded-sm">
                      <div className="h-full bg-surface-tint w-full shadow-[0_0_8px_rgba(52,229,7,0.8)]" style={{ width: `${item.skill}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passion & Hobbies / Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-surface-tint mb-4">
            <span className="material-symbols-outlined">psychology</span>
            <h2 className="font-headline-md text-headline-md">PROBLEM_SOLVING</h2>
          </div>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Beyond coding, I am an avid enthusiast of mathematical logic and algorithmic challenges. I spend significant time exploring the intersection of creative coding and real-time visualization. My downtime is often occupied by modular synthesizers—patching cables to generate complex, evolving sonic landscapes that mirror the complexity of software systems.
          </p>
          <div className="p-6 terminal-window bg-surface-container-low rounded-lg border-dashed border-2 border-outline-variant">
            <p className="font-code-md text-label-sm italic text-on-surface-variant">
              "The best code is not just functional; it is intentional. Every byte should serve a purpose in the larger architecture of the system."
            </p>
          </div>
        </div>

        <div className="relative h-full min-h-[300px] terminal-window rounded-lg overflow-hidden">
          <Image
            alt="Retro hardware setup"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkGjkwi1tOtNHH3nPjqKNqP6jSJ_pexh1VNPELYlzfpT_60UFOg-tTgFacqdNdj8y0jYWC0Q2XsWyO8N2HAFjIf2geQchW_nltYK6VPRQXzJxcQAl3b4LLcWBIjPETXpjJH1yyG-Zjjd1G0exS4NFrWMvwvwkKXSuGoKYMlicPbzfdz5M4y06YiHtPrjKm3XTV8db-8zfDZL15OerKbNDQ7e1FdHtvB0AUIV5Own3gRTWRX6VHxdCB1SKbTT4Db0IaOCie3UKJTuM"
            width={500}
            height={500}
            className="w-full h-full object-cover opacity-40 grayscale hover:opacity-60 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <h4 className="font-headline-md text-headline-md text-surface-tint mb-1">INTERESTS_ARRAY</h4>
            <div className="flex gap-4 font-code-md text-label-sm text-on-surface-variant">
              <span>#SYNTHS</span>
              <span>#CRT_MODS</span>
              <span>#OS_DEV</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
