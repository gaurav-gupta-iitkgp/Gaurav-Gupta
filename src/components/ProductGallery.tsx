import React, { useState } from 'react';
import { 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Smartphone, 
  Layers, 
  Users, 
  Compass, 
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA, GalleryItem } from '../data/portfolioData';

interface ProductGalleryProps {
  initialSelectedId?: string | null;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ initialSelectedId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(() => {
    if (initialSelectedId) {
      return PORTFOLIO_DATA.galleryItems.find((i) => i.id === initialSelectedId) || null;
    }
    return null;
  });
  const [viewMode, setViewMode] = useState<'grid' | 'user-flow'>('grid');

  const categories = [
    { id: 'all', label: 'All Artifacts', count: PORTFOLIO_DATA.galleryItems.length },
    { id: 'screen', label: 'Product Screens', count: PORTFOLIO_DATA.galleryItems.filter(i => i.category === 'screen').length },
    { id: 'diagram', label: 'System Diagrams', count: PORTFOLIO_DATA.galleryItems.filter(i => i.category === 'diagram').length },
    { id: 'ecosystem', label: 'Stakeholder Maps', count: PORTFOLIO_DATA.galleryItems.filter(i => i.category === 'ecosystem').length },
    { id: 'research', label: 'Discovery Research', count: PORTFOLIO_DATA.galleryItems.filter(i => i.category === 'research').length },
  ];

  const filteredItems = PORTFOLIO_DATA.galleryItems.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleOpenItem = (item: GalleryItem) => {
    setActiveModalItem(item);
  };

  const handleNextItem = () => {
    if (!activeModalItem) return;
    const currentIndex = PORTFOLIO_DATA.galleryItems.findIndex(i => i.id === activeModalItem.id);
    const nextIndex = (currentIndex + 1) % PORTFOLIO_DATA.galleryItems.length;
    setActiveModalItem(PORTFOLIO_DATA.galleryItems[nextIndex]);
  };

  const handlePrevItem = () => {
    if (!activeModalItem) return;
    const currentIndex = PORTFOLIO_DATA.galleryItems.findIndex(i => i.id === activeModalItem.id);
    const prevIndex = (currentIndex - 1 + PORTFOLIO_DATA.galleryItems.length) % PORTFOLIO_DATA.galleryItems.length;
    setActiveModalItem(PORTFOLIO_DATA.galleryItems[prevIndex]);
  };

  // Structured End-to-End User Flow steps
  const userFlowSteps = [
    {
      step: "01",
      title: "Passwordless Phone Authentication",
      actor: "Depot Staff / Conductor",
      artifactId: "art-9",
      description: "Low-friction OTP login with native Android SIM auto-detection for quick 5-second bus depot onboarding.",
      tradeoff: "Eliminated passwords to prevent depot operational delays due to forgotten credentials."
    },
    {
      step: "02",
      title: "Depot Role Provisioning",
      actor: "Depot Controller (Admin)",
      artifactId: "art-7",
      description: "Depot supervisors add conductors and assign operational rights based on daily duty shift rosters.",
      tradeoff: "Used mobile phone credentialing instead of corporate SSO to match staff digital comfort."
    },
    {
      step: "03",
      title: "Staff Roster & Access Revocation",
      actor: "Depot Controller",
      artifactId: "art-8",
      description: "Supervisors maintain real-time visibility into active duty staff with instantaneous one-tap revocation.",
      tradeoff: "Prevents unauthorized departure manipulation when contractual conductors finish their shift."
    },
    {
      step: "04",
      title: "Route Selection & Live Departure Dispatch",
      actor: "Bus Conductor / Controller",
      artifactId: "art-6",
      description: "Conductor taps departure timestamp at terminal bay (e.g. Uttam Nagar via CBS), updating the central schedule.",
      tradeoff: "Replaced complex timetable grids with high-contrast, one-tap trigger cards."
    },
    {
      step: "05",
      title: "Commuter Journey Search & Timetable Status",
      actor: "Daily Commuter",
      artifactId: "art-5",
      description: "Commuters query origin and destination, receiving predicted arrival intervals with token-cached offline capability.",
      tradeoff: "Distraction-free, zero-ad interface optimized for low memory usage and 2G connectivity."
    },
    {
      step: "06",
      title: "Heuristic ETA Engine & System Architecture",
      actor: "Platform Intelligence",
      artifactId: "art-1",
      description: "Data layer cascades terminal departure timestamps across all downstream stops using calibrated interval heuristics.",
      tradeoff: "Achieved predictable commuter arrival times without requiring multimillion-rupee GPS hardware."
    }
  ];

  return (
    <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
          <span>Artifacts & Visual Evidence</span>
          <span aria-hidden="true">·</span>
          <span>9 Production Artifacts</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-3">
          Product Screens & Architecture Gallery
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
          Every screen, flow, and system diagram built for the Nashik Bus Assistant project. Explore both the passenger experience and the operational conductor tooling that fed the timetable engine.
        </p>
      </div>

      {/* Controls Bar: Category Filters & View Mode */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 mb-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-lg">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-neutral-700 font-bold' : 'text-neutral-400'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('user-flow')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              viewMode === 'user-flow'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Interactive User Flow
          </button>
        </div>
      </div>

      {/* VIEW 1: GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenItem(item)}
              className="group cursor-pointer rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400/80 hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-4/3 bg-neutral-100 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-neutral-800 shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
                    <span>{item.categoryLabel}</span>
                    <span className="text-neutral-600 font-medium">{item.userType}</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-sm leading-snug group-hover:text-neutral-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-mono text-[11px]">PM Rationale & Trade-offs</span>
                  <span className="text-neutral-900 font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: INTERACTIVE USER FLOW MODE */}
      {viewMode === 'user-flow' && (
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-neutral-100 text-xs sm:text-sm text-neutral-700 mb-6">
            <span className="font-semibold text-neutral-900">How the System Connects: </span>
            This interactive sequence walks through the two-sided product journey—showing how staff authentication and departure updates fed into predictable commuter ETAs.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userFlowSteps.map((stepItem) => {
              const matchedArtifact = PORTFOLIO_DATA.galleryItems.find(a => a.id === stepItem.artifactId);
              if (!matchedArtifact) return null;

              return (
                <div
                  key={stepItem.step}
                  className="rounded-xl border border-neutral-200 bg-white p-5 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleOpenItem(matchedArtifact)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-md bg-neutral-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                        {stepItem.step}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 uppercase">
                        {stepItem.actor}
                      </span>
                    </div>

                    <h3 className="font-semibold text-neutral-900 text-sm mb-2">
                      {stepItem.title}
                    </h3>

                    {/* Image Thumb */}
                    <div className="h-44 bg-neutral-50 rounded-lg border border-neutral-100 mb-3 overflow-hidden flex items-center justify-center p-2">
                      <img
                        src={matchedArtifact.imageSrc}
                        alt={stepItem.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                      {stepItem.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500">
                    <strong className="text-neutral-700">Key Trade-off: </strong>
                    {stepItem.tradeoff}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative bg-white w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/50">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase text-neutral-500">
                  {activeModalItem.categoryLabel}
                </span>
                <span className="text-neutral-300">·</span>
                <span className="text-xs font-medium text-neutral-700">
                  Target: {activeModalItem.userType}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevItem}
                  className="p-1.5 text-neutral-600 hover:text-neutral-900 rounded-md hover:bg-neutral-200 transition-colors"
                  title="Previous Artifact"
                  aria-label="Previous Artifact"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextItem}
                  className="p-1.5 text-neutral-600 hover:text-neutral-900 rounded-md hover:bg-neutral-200 transition-colors"
                  title="Next Artifact"
                  aria-label="Next Artifact"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="p-1.5 text-neutral-600 hover:text-neutral-900 rounded-md hover:bg-neutral-200 transition-colors ml-2"
                  title="Close Modal"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split view (Image + PM deep dive) */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Image side */}
              <div className="md:col-span-7 bg-neutral-900 p-6 flex items-center justify-center min-h-[350px]">
                <img
                  src={activeModalItem.imageSrc}
                  alt={activeModalItem.title}
                  className="max-h-[60vh] max-w-full object-contain rounded"
                />
              </div>

              {/* PM Breakdown Side */}
              <div className="md:col-span-5 p-6 space-y-5 bg-white overflow-y-auto">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                    {activeModalItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    {activeModalItem.caption}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-1">
                      Product Manager Rationale
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      {activeModalItem.pmRationale}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-neutral-400 font-semibold mb-1">
                      Key Trade-off / Architectural Decision
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                      {activeModalItem.tradeoffOrDecision}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={activeModalItem.imageSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open High-Resolution Original Image</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
