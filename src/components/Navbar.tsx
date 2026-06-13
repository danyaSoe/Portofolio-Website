'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant bg-surface/80">
      <nav className="flex justify-between items-center w-full px-gutter max-w-max-width mx-auto h-16">
        <Link 
          href="/" 
          className="text-headline-md font-headline-md font-bold text-surface-tint tracking-tighter"
        >
          SYS_PORTFOLIO_V1.0
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link 
            href="/" 
            className="text-on-surface-variant font-medium hover:text-surface-tint transition-all duration-150 font-label-sm"
          >
            root
          </Link>
          <Link 
            href="/about" 
            className="text-on-surface-variant font-medium hover:text-surface-tint transition-all duration-150 font-label-sm"
          >
            about
          </Link>
          <Link 
            href="/projects" 
            className="text-on-surface-variant font-medium hover:text-surface-tint transition-all duration-150 font-label-sm"
          >
            projects
          </Link>
          <Link 
            href="/history" 
            className="text-on-surface-variant font-medium hover:text-surface-tint transition-all duration-150 font-label-sm"
          >
            history
          </Link>
          <Link 
            href="/contact" 
            className="text-on-surface-variant font-medium hover:text-surface-tint transition-all duration-150 font-label-sm"
          >
            contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface-variant hover:text-surface-tint"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Icons */}
        <div className="flex gap-4">
          <button className="material-symbols-outlined text-surface-tint cursor-pointer hover:glow-green transition-all">
            terminal
          </button>
          <button className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-surface-tint transition-all">
            settings
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-outline-variant bg-surface-container">
          <div className="flex flex-col gap-4 px-gutter py-4">
            <Link href="/" className="text-surface-tint font-label-sm">
              root
            </Link>
            <Link href="/about" className="text-on-surface-variant hover:text-surface-tint font-label-sm">
              about
            </Link>
            <Link href="/projects" className="text-on-surface-variant hover:text-surface-tint font-label-sm">
              projects
            </Link>
            <Link href="/history" className="text-on-surface-variant hover:text-surface-tint font-label-sm">
              history
            </Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-surface-tint font-label-sm">
              contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
