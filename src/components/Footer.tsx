import React from 'react';
import { ArrowUp, FileText, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200/80 bg-white py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-neutral-900 text-sm tracking-tight">
            {PORTFOLIO_DATA.profile.name}
          </div>
          <p className="text-xs text-neutral-500 mt-0.5">
            Product Manager · IIT Kharagpur
          </p>
          <div className="text-[11px] text-neutral-400 mt-2 font-mono">
            "Solve the right problem before solving it well."
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-600">
          <button onClick={() => onNavClick('case-studies')} className="hover:text-neutral-900">
            Case Studies
          </button>
          <button onClick={() => onNavClick('gallery')} className="hover:text-neutral-900">
            Product Gallery
          </button>
          <button onClick={() => onNavClick('simulator')} className="hover:text-neutral-900">
            ETA Simulator
          </button>
          <button onClick={() => onNavClick('resume')} className="hover:text-neutral-900">
            Resume
          </button>
          <button onClick={() => onNavClick('philosophy')} className="hover:text-neutral-900">
            Philosophy
          </button>
          <button onClick={() => onNavClick('contact')} className="hover:text-neutral-900">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/assets/aistudio/NBA_product_portfolio_-_artifacts_3418db75.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Artifacts PDF</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
