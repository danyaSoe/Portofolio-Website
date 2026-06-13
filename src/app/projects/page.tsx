'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  filename: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    filename: 'neural_net_v1.bin',
    title: 'Neural Pathfinding',
    shortTitle: 'Neural Pathfinding Architecture',
    description: 'Autonomous routing engine utilizing edge-computing nodes for real-time traffic analysis.',
    fullDescription: 'A high-performance neural engine optimized for low-latency decision making in autonomous robotics. Features a custom backpropagation algorithm and real-time visualization layer.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAezoByF8PQ1cP_DDqyd8Kf0mAZIGaI0Tafvy_crdTInxVd4K80Ilu63_GO8iftWY_eoyPBSGYSI77URSVJe2TDWFk5jl_8lfOCWlFDzco8npbOXmMikdrck9jx-sb-9KV7TbxRHPAUA7ZIIRsmxnerOXgp0DMlog9KeBuhtiktUElYsUiCYM81MKNmCLafLG9OL11u96ONXMdyBv_F-hAoMTAWIzr_tjBQmDukCn9qDK6p-HkeY055gWYUXTxh2bmusRznfpKiSNA',
    imageAlt: 'A macro visualization of a neural network in a dark, technical environment. Glowing green synaptic connections weave through a dense grid of microscopic processors.',
    tags: ['PyTorch', 'Rust', 'CUDA', 'WebAssembly'],
  },
  {
    id: 2,
    filename: 'blockchain_core.exe',
    title: 'L-Layer Consensus',
    shortTitle: 'L-Layer Consensus Core',
    description: 'High-throughput scaling protocol for decentralized ledgers focusing on sub-second finality.',
    fullDescription: 'An experimental layer-2 scaling solution for Ethereum using zk-rollups. Achieved 5,000 TPS on testnet benchmarks with sub-second finality.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRgP019eNCBzCzz8ia1VmWEuocggx4XC2d230cx4NvLQkGKn3amJ8Q8_9emC8UQ0ibblhZip5DUlGcF8Nvq7bnnNxrmisGCpS2r9t_jaCUZLPb2EjlBuiwJMI_4B0dwUd17GFPGm3IsvFLA3DTW3RvI8osz-cpQKRtt1hw-WMK9wEKC63R9hvOsDOrOXbJ8rUHJOLrp2DxJMpIK7y5s-E2vcQpRHYhHkwRQuJIVIuYIyTRryf-vqiE_zgWFuwlgyiCUEZvqX-EWIU',
    imageAlt: 'A stylized geometric representation of a blockchain network consisting of interconnected crystalline blocks floating in a void.',
    tags: ['Solidity', 'Go', 'Typescript', 'ZKP'],
  },
  {
    id: 3,
    filename: 'cloud_shell.sh',
    title: 'Quantum-Safe Shell',
    shortTitle: 'Quantum-Safe Shell Interface',
    description: 'Post-quantum encrypted communication layer for infrastructure management.',
    fullDescription: 'A secure terminal environment utilizing post-quantum cryptographic algorithms for remote administration of high-security clusters.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQxdhqH3HCi_G-BwVJBqJUsDwdpcZ0Bzy14FWGwBHlx5OJrHDMhn1DrUsEh5CiKJXn8PNZxuKulyoDO8zWI1DyOP7WYGF0PnMWZHBQhYQM4F7GXlwN9eBZs1IlGI07DeuWHy2_Beh38lpP1aHCIbt63Ec8GLkjrCM1Y_Zb0ZhQ5NWSXnBYUWwTwYu7aS9hRnuZ86Ke0tCLLX5lSXS_LGFeDyMvicY7rSe931DZ6EFv03GZb93EXIm-nuzT_peJ4ZNBU63QyRlSAp8',
    imageAlt: 'A sprawling digital landscape representing global cloud infrastructure with millions of tiny light points.',
    tags: ['C++', 'Python', 'OpenSSL', 'NTRU'],
  },
  {
    id: 4,
    filename: 'os_kernel_custom.sys',
    title: 'Retro OS Kernel',
    shortTitle: 'Retro OS Kernel 0.1',
    description: 'A low-level exploration of operating system fundamentals for custom hardware targets.',
    fullDescription: 'A custom monolith kernel written from scratch for x86 architecture. Features cooperative multitasking, a basic FAT32 filesystem driver, and a minimalist shell environment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTSz_bC6zl8Ng5Bje9RG_3i_-MdBkVJwD8ViFvT2BjkD0z-l82l7nUvPcBsQhXRkpR7Bi3cQGYE_Y8Z76nkCSfGPcvHKgwhZnpqN33FAzEHwzz3K5aMFR2WZp8nJvNjxqUr_mFWYbZfR0y6Cde_-eAbEjQ3UE8F_UME3I61Jgv5bC3ePKfkPCo5B0gLdyQBfPH5xWBJhEu3PV93fMf88N5f48VQH2h8pQxEsqOLl0wOjKSsJQXiVx8Z3kh3VWfLwCHPLrWE5E',
    imageAlt: 'A close-up view of intricate circuit board patterns and processor components with warm, retro lighting.',
    tags: ['Assembly', 'C', 'QEMU', 'GDB'],
    featured: true,
  },
];

interface ModalState {
  isOpen: boolean;
  project: Project | null;
}

export default function Projects() {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, project: null });

  const openModal = (project: Project) => {
    setModal({ isOpen: true, project });
  };

  const closeModal = () => {
    setModal({ isOpen: false, project: null });
  };

  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-max-width mx-auto">
      {/* Hero Title Section */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-surface-tint font-code-md text-code-md">C:\USERS\ALEX\WORK_DIR&gt;</span>
          <span className="font-code-md text-code-md text-on-surface-variant">ls -la ./projects</span>
        </div>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">PROJECT_ARCHIVE</h1>
        <p className="text-on-surface-variant max-w-2xl text-body-lg font-body-lg">
          A catalog of compiled systems, decentralized protocols, and neural architectures. Click any executable to view documentation.
        </p>
      </div>

      {/* Bento Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          project.featured ? (
            // Featured Project (spans 2 columns)
            <button
              key={project.id}
              onClick={() => openModal(project)}
              className="lg:col-span-2 terminal-window group border border-outline-variant bg-surface-container-low rounded overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-all text-left"
            >
              <div className="bg-outline-variant/30 p-2 md:w-12 flex flex-col items-center border-b md:border-b-0 md:border-r border-outline-variant gap-4">
                <span className="material-symbols-outlined text-surface-tint rotate-90 md:rotate-0">settings_input_component</span>
                <div className="flex flex-col gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-tint"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-tint/40"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-surface-tint/10"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="font-code-md text-label-sm text-surface-tint">SYSTEM_BOOT: {project.filename}</span>
                      <h3 className="font-headline-md text-headline-md text-on-surface mt-1">{project.title}</h3>
                    </div>
                    <span className="material-symbols-outlined text-surface-tint">memory</span>
                  </div>
                  <p className="text-on-surface-variant text-body-md mb-6 max-w-xl">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-code-md font-code-md border border-outline-variant text-on-surface-variant rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-0 aspect-video relative overflow-hidden bg-black md:w-1/3">
                <Image
                  alt={project.imageAlt}
                  src={project.image}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </button>
          ) : (
            // Regular Project Card
            <button
              key={project.id}
              onClick={() => openModal(project)}
              className="terminal-window group border border-outline-variant bg-surface-container-low rounded overflow-hidden flex flex-col hover:shadow-lg transition-all text-left"
            >
              <div className="bg-outline-variant/30 px-4 py-2 flex items-center justify-between border-b border-outline-variant">
                <span className="font-code-md text-label-sm text-surface-tint flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">terminal</span> {project.filename}
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-on-surface-variant/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-on-surface-variant/20"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-tint/60"></div>
                </div>
              </div>
              <div className="p-0 aspect-video relative overflow-hidden bg-black">
                <Image
                  alt={project.imageAlt}
                  src={project.image}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{project.title}</h3>
                <p className="text-on-surface-variant text-body-md line-clamp-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 text-code-md font-code-md border border-outline-variant text-on-surface-variant rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          )
        ))}
      </div>

      {/* Modal */}
      {modal.isOpen && modal.project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-on-surface-variant hover:text-surface-tint z-[51]"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          <div
            className="terminal-window rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-surface-tint"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-outline-variant/30 px-4 py-2 flex items-center gap-2 border-b border-outline-variant sticky top-0">
              <div className="w-2.5 h-2.5 rounded-full bg-on-surface-variant/20"></div>
              <span className="font-code-md text-label-sm text-surface-tint">{modal.project.filename}</span>
            </div>

            <div className="p-8">
              <h1 className="font-display-lg text-display-lg-mobile text-on-surface mb-4">{modal.project.shortTitle}</h1>
              <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">{modal.project.fullDescription}</p>

              <div className="mb-8">
                <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">TECH_STACK</h3>
                <div className="flex flex-wrap gap-3">
                  {modal.project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-surface-container border border-outline-variant text-on-surface font-code-md text-label-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-full py-3 border border-surface-tint text-surface-tint font-code-md hover:bg-surface-tint/10 transition-colors rounded"
              >
                CLOSE_MODAL.EXE
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
