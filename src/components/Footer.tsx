import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-max-width mx-auto gap-8">
        <div className="text-label-sm font-code-md text-surface-tint flex flex-col items-center md:items-start">
          <span>© 2024 TERMINAL_SYSTEMS. ALL RIGHTS RESERVED.</span>
          <span className="text-on-surface-variant/50 text-[10px] mt-1">v1.0.42_STABLE_BUILD</span>
        </div>
        <div className="flex gap-8">
          <a 
            href="#" 
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-label-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span> GITHUB
          </a>
          <a 
            href="#" 
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-label-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">account_circle</span> LINKEDIN
          </a>
          <a 
            href="#" 
            className="text-on-surface-variant hover:text-primary-fixed-dim transition-colors font-label-sm flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">code</span> SOURCE
          </a>
        </div>
      </div>
    </footer>
  );
}
