import React from 'react';
import { ArrowRight, Sparkles, Smartphone, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onSelectTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab }) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Unboxed Metadata Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-6">
          <span>{profile.role}</span>
          <span aria-hidden="true">·</span>
          <span>{profile.institution}</span>
          <span aria-hidden="true">·</span>
          <span>Systems & Platform PM</span>
          <span aria-hidden="true">·</span>
          <span>Bengaluru / Nashik</span>
        </div>

        {/* Primary Statement */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15] mb-6">
          Building products that solve large-scale, broken systems.
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-8">
          {profile.bio}
        </p>

        {/* Quick Highlights / Proof Points */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-neutral-200/80 mb-8">
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">70,000+</div>
            <div className="text-xs text-neutral-500 mt-1">Daily Commuter Scale</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">90 Routes</div>
            <div className="text-xs text-neutral-500 mt-1">Digitized from Paper</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">7 Members</div>
            <div className="text-xs text-neutral-500 mt-1">Product Lead & Scrum Master</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight">0-to-MVP</div>
            <div className="text-xs text-neutral-500 mt-1">Grant-Funded & Validated</div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onSelectTab('case-studies')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs"
          >
            <span>Read Nashik Bus Assistant Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectTab('gallery')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-md transition-colors"
          >
            <Smartphone className="w-4 h-4 text-neutral-500" />
            <span>Product Screens Gallery</span>
          </button>

          <button
            onClick={() => onSelectTab('simulator')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-md transition-colors"
          >
            <Layers className="w-4 h-4 text-neutral-500" />
            <span>Try ETA Simulator</span>
          </button>
        </div>

        {/* Recruiter 20-second Hook Box */}
        <div className="mt-8 p-4 rounded-lg bg-neutral-100/70 border border-neutral-200/80 text-xs sm:text-sm text-neutral-700 flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-neutral-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-neutral-900">For Hiring Managers & PM Recruiters: </span>
            This portfolio is built on <span className="font-medium text-neutral-900">evidence first</span>. Every project includes genuine system diagrams, real mobile screens, candid trade-offs, and an unvarnished retrospective on organizational adoption constraints.
          </div>
        </div>
      </div>
    </section>
  );
};
