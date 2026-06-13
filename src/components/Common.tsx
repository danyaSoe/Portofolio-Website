import Image from 'next/image';

interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-surface-tint">{name}</span>
        <span className="text-on-surface-variant">{percentage}%</span>
      </div>
      <div className="w-full h-4 bg-surface-container-highest border border-outline-variant">
        <div 
          className="h-full bg-surface-tint transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  terminal?: 'red' | 'yellow' | 'green';
  link?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  tags, 
  terminal = 'red',
  link = '/projects' 
}: ProjectCardProps) {
  const dotColor = {
    red: 'dot-red',
    yellow: 'dot-yellow',
    green: 'dot-green',
  }[terminal];

  return (
    <div className="terminal-window rounded-lg overflow-hidden border-subtle crt-flicker hover:glow-green transition-all duration-300 group">
      <div className="terminal-header">
        <div className={`dot ${dotColor}`}></div>
        <span className="text-label-sm font-code-md text-on-surface-variant ml-2">{title.toLowerCase()}.bin</span>
      </div>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-surface/60 mix-blend-multiply"></div>
      </div>
      <div className="p-6">
        <h3 className="text-headline-md font-headline-md text-on-surface mb-2">{title}</h3>
        <p className="text-on-surface-variant text-body-md mb-4">{description}</p>
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-label-sm font-code-md text-surface-tint">
              #{tag}
            </span>
          ))}
        </div>
        <a 
          href={link}
          className="text-surface-tint font-code-md flex items-center gap-2 hover:underline"
        >
          EXECUTE_SRC <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
      </div>
    </div>
  );
}

interface ContactCardProps {
  icon: string;
  label: string;
  handle: string;
  href: string;
}

export function ContactCard({ icon, label, handle, href }: ContactCardProps) {
  return (
    <a 
      href={href}
      className="terminal-window p-8 flex flex-col items-center justify-center gap-4 rounded-lg border-subtle hover:glow-green transition-all duration-300 group"
    >
      <span className="material-symbols-outlined text-4xl text-surface-tint group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="font-code-md text-on-surface uppercase tracking-widest">{label}</span>
      <span className="text-[10px] text-on-surface-variant/50">{handle}</span>
    </a>
  );
}
