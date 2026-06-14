import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'DANYA DAMARIS | TERMINAL_SYSTEMS',
  description: 'Computer Science Student • Tech Enthusiast',
=======
  title: 'ALEX RIVERA | TERMINAL_SYSTEMS',
  description: 'Computer Science Student • Software Developer • Tech Enthusiast',
>>>>>>> fe6de1454afd9b75b0ead08818a97d05e73c3169
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Fonts already imported in globals.css via @import */}
      </head>
      <body className="bg-background text-on-background font-body-md overflow-x-hidden grain">
        {/* CRT Overlay */}
        <div className="fixed inset-0 scanlines z-[60] pointer-events-none opacity-20"></div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
