'use client';

import { useState } from 'react';
import { ContactCard } from '@/components/Common';

interface FormDataType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormDataType) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-max-width mx-auto">
      <div className="mb-16">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">GET_IN_TOUCH</h1>
        <p className="text-on-surface-variant max-w-2xl text-body-lg">Let's collaborate on something amazing. Reach out through any channel.</p>
      </div>

      {/* Contact Methods Grid */}
      <section className="mb-20">
        <h2 className="font-headline-md text-headline-md text-surface-tint mb-8 uppercase tracking-widest">Contact Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            icon="account_circle"
            label="LinkedIn"
            handle="/in/alex-rivera"
            href="https://linkedin.com/in/alex-rivera"
          />
          <ContactCard
            icon="terminal"
            label="GitHub"
            handle="/arivera-dev"
            href="https://github.com/arivera-dev"
          />
          <ContactCard
            icon="photo_camera"
            label="Instagram"
            handle="@sys_rivera"
            href="https://instagram.com/sys_rivera"
          />
          <ContactCard
            icon="mail"
            label="Email"
            handle="alex@terminal.sys"
            href="mailto:alex@terminal.sys"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl">
        <h2 className="font-headline-md text-headline-md text-surface-tint mb-8 uppercase tracking-widest">Direct Message</h2>
        
        <form onSubmit={handleSubmit} className="terminal-window rounded-lg p-8 border border-outline-variant space-y-6">
          <div>
            <label htmlFor="name" className="font-code-md text-label-sm text-on-surface block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-surface-container border border-outline-variant px-4 py-2 text-on-surface font-body-md focus:outline-none focus:border-surface-tint transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-code-md text-label-sm text-on-surface block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-surface-container border border-outline-variant px-4 py-2 text-on-surface font-body-md focus:outline-none focus:border-surface-tint transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="font-code-md text-label-sm text-on-surface block mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-surface-container border border-outline-variant px-4 py-2 text-on-surface font-body-md focus:outline-none focus:border-surface-tint transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-code-md text-label-sm text-on-surface block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-surface-container border border-outline-variant px-4 py-2 text-on-surface font-body-md focus:outline-none focus:border-surface-tint transition-colors resize-none"
              placeholder="Your message here..."
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
            <span className="text-label-sm font-code-md text-on-surface-variant">
              {formStatus === 'success' && '✓ Message sent successfully'}
              {formStatus === 'error' && '✗ Failed to send message'}
              {formStatus === 'submitting' && '⟳ Sending...'}
              {formStatus === 'idle' && ''}
            </span>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="px-6 py-2 bg-surface-tint/10 border border-surface-tint text-surface-tint font-code-md hover:bg-surface-tint hover:text-on-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? 'SENDING...' : 'SEND_MESSAGE'}
            </button>
          </div>
        </form>
      </section>

      {/* Additional Info */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="terminal-window p-6 rounded-lg border border-outline-variant">
          <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">Response Time</h3>
          <p className="text-on-surface-variant text-body-md">
            I typically respond to messages within 24-48 hours. For urgent matters, reach out on LinkedIn or GitHub.
          </p>
        </div>
        <div className="terminal-window p-6 rounded-lg border border-outline-variant">
          <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">Let's Work Together</h3>
          <p className="text-on-surface-variant text-body-md">
            Open to freelance projects, collaborations, and full-time opportunities. Let's build something extraordinary together.
          </p>
        </div>
      </section>
    </main>
  );
}
