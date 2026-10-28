import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Calendar, 
  FileText,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Management Opportunity',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please enter a message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Persist to local state / storage
    try {
      const existing = JSON.parse(localStorage.getItem('pm_portfolio_messages') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('pm_portfolio_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setFormSubmitted(true);
  };

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
          <span>Get in Touch</span>
          <span aria-hidden="true">·</span>
          <span>Open to PM Roles</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
          Let's Discuss Product Opportunities
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed">
          I am actively exploring Product Management roles where I can apply systems thinking, 0-to-1 discovery, and technical judgment to high-impact products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left: Contact Info & Quick Actions */}
        <div className="md:col-span-5 space-y-6">
          {/* Email Card with 1-click Copy */}
          <div className="p-5 rounded-xl border border-neutral-200 bg-white shadow-2xs space-y-3">
            <div className="text-xs font-mono uppercase text-neutral-400 font-semibold">Direct Email</div>
            <div className="text-sm font-semibold text-neutral-900 break-all font-mono">
              {profile.email}
            </div>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
              </button>
              <a
                href={`mailto:${profile.email}?subject=Product%20Management%20Conversation`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-900 hover:bg-neutral-800 text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Mail</span>
              </a>
            </div>
          </div>

          {/* Quick Context Card */}
          <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 space-y-3 text-xs text-neutral-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
              <span>Location: Bengaluru / Nashik, India (Open to Relocation)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neutral-500 shrink-0" />
              <span>Availability: Immediate to 30 days</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-neutral-500 shrink-0" />
              <a 
                href="/assets/aistudio/NBA_product_portfolio_-_artifacts_3418db75.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-900 font-semibold underline"
              >
                View 49-Page Artifacts PDF
              </a>
            </div>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-3 text-xs font-medium text-neutral-700">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-neutral-600" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
            >
              <Github className="w-4 h-4 text-neutral-600" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="md:col-span-7">
          <div className="p-6 rounded-xl border border-neutral-200 bg-white shadow-2xs">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Message Sent Successfully
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. Gaurav reviews incoming product messages daily and will respond to <span className="font-semibold text-neutral-800">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', topic: 'Product Management Opportunity', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-neutral-900 text-base mb-1">
                  Send a Direct Note
                </h3>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  {errors.name && <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-1">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@company.com"
                    className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-1">
                    Subject / Discussion Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  >
                    <option value="Product Management Opportunity">Product Management Opportunity</option>
                    <option value="Case Study Deep Dive Discussion">Case Study / Architecture Discussion</option>
                    <option value="Informational Interview / Coffee Chat">Informational Interview / Coffee Chat</option>
                    <option value="Consulting / Advisory Request">Consulting / Advisory Request</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-neutral-500 font-semibold block mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, questions about Nashik Bus Assistant, or an interview proposal..."
                    className="w-full text-xs sm:text-sm border border-neutral-300 rounded-lg p-2.5 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Gaurav</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
