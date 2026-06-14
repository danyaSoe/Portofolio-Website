'use client';

import Link from 'next/link';
import Image from 'next/image';
import TypeWriter from '@/components/TypeWriter';
import BootMessage from '@/components/BootMessage';
import { SkillBar, ProjectCard, ContactCard } from '@/components/Common';
import { historyEntries } from '@/lib/historyData';

export default function Home() {
  const taglineText = "Computer Science Student • Software Developer • Tech Enthusiast";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16" id="root">
        <div className="relative z-10 text-center px-gutter">
          <BootMessage />
          
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4 tracking-tighter uppercase mt-8">
            DANYA DAMARIS
          </h1>

          <div className="text-headline-md font-headline-md text-secondary-container mb-12 h-8">
            <TypeWriter text={taglineText} speed={50} startDelay={1000} />
            <span className="cursor-blink text-surface-tint">_</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/projects"
              className="bg-surface-tint/10 border border-surface-tint text-surface-tint px-8 py-3 font-code-md hover:bg-surface-tint hover:text-on-primary transition-all duration-300 glow-green active:scale-95"
            >
              VIEW_PROJECTS.EXE
            </Link>
            <Link 
              href="/contact"
              className="border border-outline-variant text-on-surface-variant px-8 py-3 font-code-md hover:border-on-surface-variant transition-all active:scale-95"
            >
              CONTACT_ME.LOG
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-max-width mx-auto px-gutter">
        {/* About & Skills */}
        <section className="py-section-gap-mobile md:py-section-gap grid grid-cols-1 md:grid-cols-2 gap-16 items-start" id="about">
          <div>
            <h2 className="font-headline-md text-headline-md text-surface-tint mb-8 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-surface-tint"></span> 01. WHO_AM_I
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              <div className="w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-surface-tint shadow-[0_0_15px_rgba(74,246,38,0.3)]">
                <Image
                  alt="Danya Damaris Headshot"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTMXrmHiy_ONsBTvCdkd-tbdo15IkeHnaG8O84ALQ12PxMLgtLrdm6vgGF6XkTjU8_RSTxOajeEY1w4ytgRdPM92N_yN8YATX2p33xPVYNlK1_mbJfKODA6flugC2663eCqUiJJq4oVRDOro-T5cUvOltfAM8C1FIKPoAdoQAiHyECmsUuY7R6EIJ-S0CTrM9-_B88GuMpx0MY1rTaup8WUeyEkj_qAh6QUoOcxbBIm-U-9LdjVZ_YIivBDAm594pvbuPoIbyj6jQ"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-6 text-on-surface-variant font-body-lg flex-1">
                <p>
                  I am a Computer Science student driven by the architecture of complex systems and the elegance of functional code. My journey in technology is a continuous loop of learning, building, and refining.
                </p>
                <p>
                  Specializing in <span className="text-secondary">Full-Stack Development</span> and <span className="text-surface-tint">Cloud Architecture</span>, I treat every project as a terminal session where efficiency and precision are paramount.
                </p>
                <div className="p-6 border border-outline-variant bg-surface-container-low italic">
                  "The goal isn't just to write code that works, but to build systems that endure."
                </div>
              </div>
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="terminal-window rounded-lg overflow-hidden border-subtle">
            <div className="terminal-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
              <span className="text-label-sm font-code-md text-on-surface-variant ml-2">skills_matrix.sh</span>
            </div>
            <div className="p-6 font-code-md space-y-6">
              <div className="space-y-4">
                <SkillBar name="PYTHON" percentage={90} />
                <SkillBar name="JAVA" percentage={85} />
                <SkillBar name="TYPESCRIPT" percentage={80} />
              </div>
              <div className="pt-4 border-t border-outline-variant">
                <span className="text-secondary block mb-4 uppercase text-label-sm">Environment & Tools</span>
                <div className="flex flex-wrap gap-3">
                  {['REACT', 'NODE.JS', 'DOCKER', 'AWS', 'POSTGRES', 'GIT'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-surface-container border border-outline text-label-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-section-gap-mobile md:py-section-gap" id="projects">
          <h2 className="font-headline-md text-headline-md text-surface-tint mb-12 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-surface-tint"></span> 02. PROJECTS.DIR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="NEURAL_OBSERVER"
              description="Real-time computer vision system for automated traffic flow analysis."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA-2SXWSRy8vlygaxvHpirApY8Bh0HIDnq8P35XJXYQpLPGQ9k0LsjRUWcOd37AhUidxRd5jq4CRPKnFqnj0kgDF1oWm8TsseCF3VP5Mm6Rj0Qvq6KAY8WJWsoEgR0LlKts0YCLqorqRNIaiPfaMsotD8vZGq-GTXTGQWkhAj9qrLsDezdM8XgJPkH32hU1Xs7POomQPks1AZoCT6e5zgb1Dy5S6teWSgaVwurIN8xDzATWWmHDNgY8W2j1cZU_Nob5wthaeNkTKq0"
              imageAlt="A sophisticated digital interface of a neural network with glowing green nodes and complex interconnected lines on a deep black background, styled like a retro-futuristic terminal monitor."
              tags={['Python', 'OpenCV', 'PyTorch']}
              terminal="red"
            />
            <ProjectCard
              title="LEDGER_SYNC"
              description="Decentralized peer-to-peer file synchronization protocol using Rust."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDKMhLe2MMIw27MaS4FwnoyQZHC7FgUEyEy80K5gvpVvhitEC_T1DDxVOwKD2DET1Xp_8Bew7cMPygslqws1xb2AyeG_ykO8AdYAlZV2XEVE71rqImt7skFWujKbX-P4qvx7ZGZd2AVRzBo40wz0q3j-z_lC9usgjK7tcSc3rk4SozveViCGsRLCE8h09KeUgvn-wgVppQxgr3ZwgGWFsY5hp7Rd87jlLqgGwSvHu4kothkLE6IhQvoTCMABRE0lYtZuORNiLLd94"
              imageAlt="Abstract visualization of blockchain blocks as glowing isometric cubes floating in a dark digital space with terminal green and amber orange glows."
              tags={['Rust', 'Web3', 'P2P']}
              terminal="yellow"
            />
            <ProjectCard
              title="CLOUD_WATCHER"
              description="Serverless infrastructure monitoring tool with real-time alerting."
              imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBVoOCQgx9dHc4GofegX1g4kJj7bc-OUv4lT7TmSwFwIzignNCDWUuZOu3dIXI6YkvGv_9AlhconOJhWeeP_4AXaHLH6SRHawI--X5l0369VlNO8V8OrAGD_iqcXPVB0jdk1URdZg31EKQnkfU1QydNNU-QgZtXLkCUnSqPQIKkQDLMCz51HawAeGD2WrTVAGpTICW48QMNq6ebuqp19XZTUPlpyO7-1dmj6EJA_ihcJkRFVUUtFaKyKb70WDqInkYXVjzJt20Ah-I"
              imageAlt="A high-tech digital world map shimmering with data points and connections, rendered in a neon terminal green palette."
              tags={['Go', 'AWS', 'Terraform']}
              terminal="green"
            />
          </div>
        </section>

        {/* Experience/History */}
        <section className="py-section-gap-mobile md:py-section-gap" id="history">
          <h2 className="font-headline-md text-headline-md text-surface-tint mb-12 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-surface-tint"></span> 03. HISTORY.LOG
          </h2>
          <div className="relative border-l border-subtle ml-4 pl-10 space-y-12">
            {historyEntries.slice(0, 3).map((entry, index) => {
              const opacityClass = index === 0 ? 'opacity-100' : index === 1 ? 'opacity-75' : 'opacity-50';
              return (
                <div key={entry.id} className="relative">
                  <div className={`absolute -left-[45px] top-1 w-[10px] h-[10px] bg-surface-tint rounded-full shadow-[0_0_10px_#4AF626] ${opacityClass}`}></div>
                  <span className="text-label-sm font-code-md text-secondary block mb-2">{entry.year}</span>
                  <h3 className="text-headline-md font-headline-md text-on-surface">
                    {entry.experience} as {entry.role}
                  </h3>
                  <p className="text-on-surface-variant text-body-md mt-4">{entry.desc}</p>
                  <div className="mt-4 pl-4 border-l border-outline-variant/50 space-y-2">
                    {entry.tasks.map((task, taskIdx) => (
                      <div key={taskIdx} className="flex items-start gap-3 text-on-surface-variant text-body-md">
                        <span className="text-surface-tint mt-1">▸</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="py-section-gap-mobile md:py-section-gap mb-20" id="contact">
          <h2 className="font-headline-md text-headline-md text-surface-tint mb-12 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-surface-tint"></span> 04. GET_IN_TOUCH
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard
              icon="account_circle"
              label="LinkedIn"
              handle="/in/alex-rivera"
              href="#"
            />
            <ContactCard
              icon="terminal"
              label="GitHub"
              handle="/arivera-dev"
              href="#"
            />
            <ContactCard
              icon="photo_camera"
              label="Instagram"
              handle="@sys_rivera"
              href="#"
            />
            <ContactCard
              icon="mail"
              label="Email"
              handle="alex@terminal.sys"
              href="mailto:alex@terminal.sys"
            />
          </div>
        </section>
      </main>
    </>
  );
}
