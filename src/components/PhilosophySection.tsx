import React from 'react';
import { Compass, Sparkles, Target, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PhilosophySectionProps {
  onCaseStudyClick: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onCaseStudyClick }) => {
  const { productPhilosophy } = PORTFOLIO_DATA;

  return (
    <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
          <span>Product Thinking</span>
          <span aria-hidden="true">·</span>
          <span>Core Philosophy</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
          How I Think About Products
        </h1>
        <p className="text-base text-neutral-600 leading-relaxed">
          {productPhilosophy.approach}
        </p>
      </div>

      {/* Purpose Banner */}
      <div className="p-6 rounded-xl bg-neutral-900 text-white mb-12 shadow-sm">
        <div className="text-xs font-mono uppercase text-neutral-400 mb-2">Personal Mission</div>
        <p className="text-lg sm:text-xl font-medium leading-snug">
          "{productPhilosophy.mission}"
        </p>
      </div>

      {/* Principles List */}
      <div className="space-y-8 mb-12">
        <h2 className="text-xs font-mono uppercase text-neutral-400 font-semibold tracking-wider">
          The Five Operating Principles
        </h2>

        <div className="space-y-6">
          {productPhilosophy.principles.map((p) => (
            <div
              key={p.number}
              className="p-6 rounded-xl border border-neutral-200 bg-white hover:border-neutral-300 transition-colors shadow-2xs"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-mono text-sm font-bold text-neutral-400">{p.number}</span>
                <h3 className="text-lg font-bold text-neutral-900">{p.title}</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="bg-neutral-50 border border-neutral-100 p-3 rounded-lg text-xs text-neutral-600">
                <strong className="text-neutral-900 font-medium">Applied in Practice: </strong>
                {p.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desired Recruiter Impression */}
      <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
        <h3 className="text-sm font-bold text-neutral-900 mb-2">
          What I Want You to Remember
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
          When someone finishes reading my portfolio, I want them to think:
        </p>
        <div className="space-y-2 text-xs sm:text-sm text-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>This person deeply understands users and ground-level workflows.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>This person approaches ambiguous problems with structured systems thinking.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span>This person can align incentives across technology, business, and human stakeholders.</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-200">
          <button
            onClick={onCaseStudyClick}
            className="text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1.5"
          >
            <span>See these principles applied in the Nashik Bus Assistant case study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
