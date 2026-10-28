import React from 'react';
import { 
  FileText, 
  ArrowUpRight, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Code, 
  Compass, 
  Award, 
  Download,
  Mail
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeSectionProps {
  onContactClick: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onContactClick }) => {
  const { profile, experiences } = PORTFOLIO_DATA;

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span>Product Leadership</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {profile.name}
          </h1>
          <p className="text-sm text-neutral-600 mt-1">
            {profile.role} · {profile.institution}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/assets/aistudio/NBA_product_portfolio_-_artifacts_3418db75.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Artifacts PDF</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="py-8 border-b border-neutral-200">
        <h2 className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-3">
          Product Summary
        </h2>
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl">
          {profile.bio}
        </p>
      </div>

      {/* Core Competencies */}
      <div className="py-8 border-b border-neutral-200">
        <h2 className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-4">
          Core Competencies & Strengths
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.strengths.map((s) => (
            <div key={s.title} className="p-4 rounded-lg bg-white border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Professional & Leadership Experience */}
      <div className="py-8 border-b border-neutral-200 space-y-8">
        <h2 className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-2">
          Experience & Product Leadership
        </h2>

        {experiences.map((exp, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base font-bold text-neutral-900">{exp.role}</h3>
                <div className="text-xs sm:text-sm text-neutral-600 font-medium">
                  {exp.organization} · {exp.location}
                </div>
              </div>
              <div className="text-xs font-mono text-neutral-500 shrink-0">
                {exp.period}
              </div>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 list-disc pl-5">
              {exp.highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-[11px] font-mono text-neutral-400 mr-1">Skills:</span>
              {exp.skillsUsed.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Target Roles & Focus */}
      <div className="py-8 border-b border-neutral-200">
        <h2 className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-3">
          Target PM Domains
        </h2>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {["Consumer Products", "Growth & Scale", "Platform & Core Systems", "Civic & Logistics Tech"].map((d) => (
            <span key={d} className="text-xs font-medium text-neutral-800 bg-neutral-100 px-3 py-1 rounded-md">
              {d}
            </span>
          ))}
        </div>
        <div className="text-xs text-neutral-500">
          Target organizations: {profile.targetCompanies.join(' · ')}
        </div>
      </div>

      {/* Differentiators */}
      <div className="py-8">
        <h2 className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-3">
          What Sets Me Apart
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {profile.differentiators.map((diff, i) => (
            <div key={i} className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
              <span>{diff}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
