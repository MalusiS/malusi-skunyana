// src/components/sections/Contact.jsx

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, MapPin, Github, Linkedin, BookOpen, FileText, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { EMAIL, LOCATION, GITHUB_URL, LINKEDIN_URL, CURRICULUM_REPO, TRANSCRIPT_URL, BLOG_URL } from '../../assets/config';

export default function Contact() {
  const [state, handleSubmit] = useForm("xovzardj");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24">
        <div className="container max-w-xl text-center">
          <CheckCircle size={48} className="mx-auto text-emerald-400 mb-4" />
          <h2 className="text-2xl font-bold text-white">Message Sent</h2>
          <p className="mt-2 text-slate-400">Thank you for reaching out. I will respond within 24 hours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-16 pb-24 bg-slate-900/50" aria-labelledby="contact-heading">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">Get in Touch</p>
          <h2 id="contact-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Open to architecture reviews, collaboration, code reviews, and opportunities to grow as a software engineer.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="you@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-400" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 resize-none"
                  placeholder="Tell me about your project, opportunity, or question..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-400" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-700 px-5 py-2.5 text-sm font-bold text-slate-50 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={14} />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Evidence Hub */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  <Mail size={16} /> {EMAIL}
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <MapPin size={16} /> {LOCATION}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-4">Evidence Hub</h3>
              <div className="space-y-3">
                <EvidenceLink href={GITHUB_URL} icon={<Github size={16} />} label="GitHub" sub="Code & Contributions" />
                <EvidenceLink href={LINKEDIN_URL} icon={<Linkedin size={16} />} label="LinkedIn" sub="Professional Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EvidenceLink({ href, icon, label, sub }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg p-2 -mx-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
    >
      <span className="text-cyan-400">{icon}</span>
      <div>
        <p className="font-medium text-slate-200">{label}</p>
        <p className="text-xs text-slate-400">{sub}</p>
      </div>
    </a>
  );
}
