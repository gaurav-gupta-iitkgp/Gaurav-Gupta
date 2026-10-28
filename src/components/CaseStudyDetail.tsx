import React, { useState } from 'react';
import { 
  Bus, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  MapPin, 
  Layers, 
  Compass, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CaseStudyDetailProps {
  onOpenGalleryItem?: (itemId: string) => void;
  onOpenSimulator?: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ 
  onOpenGalleryItem,
  onOpenSimulator
}) => {
  const [readingMode, setReadingMode] = useState<'deep' | 'skimmable' | 'pivot'>('deep');
  const [activeSectionId, setActiveSectionId] = useState<string>('the-story');

  const caseStudy = PORTFOLIO_DATA.caseStudies[0];

  const sectionNav = [
    { id: 'snapshot', label: '1. Executive Snapshot' },
    { id: 'the-story', label: '2. The Origin Story' },
    { id: 'business-context', label: '3. Business & Market Context' },
    { id: 'problem-discovery', label: '4. Problem Discovery' },
    { id: 'the-pivot', label: '5. The Key Pivot: GPS → Heuristic' },
    { id: 'mvp-architecture', label: '6. Two-Sided Platform' },
    { id: 'prioritization-framework', label: '7. Prioritization Strategy' },
    { id: 'leadership-execution', label: '8. Leadership & Sprints' },
    { id: 'retrospective', label: '9. The Launch That Didn\'t Happen' },
    { id: 'product-lessons', label: '10. Product Lessons & Takeaways' },
  ];

  return (
    <div className="py-10 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Title & Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
          <span>{caseStudy.domain}</span>
          <span aria-hidden="true">·</span>
          <span>{caseStudy.timeline}</span>
          <span aria-hidden="true">·</span>
          <span>Role: {caseStudy.role}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-4">
          {caseStudy.title}
        </h1>

        <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mb-6">
          {caseStudy.subtitle}
        </p>

        {/* Reading Mode Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 rounded-lg max-w-fit mb-8">
          <button
            onClick={() => setReadingMode('deep')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              readingMode === 'deep'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Full Deep-Dive (21 Sections)
          </button>
          <button
            onClick={() => setReadingMode('skimmable')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              readingMode === 'skimmable'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            2-Minute Recruiter TL;DR
          </button>
          <button
            onClick={() => setReadingMode('pivot')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              readingMode === 'pivot'
                ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            The Big Pivot: GPS vs Heuristic
          </button>
        </div>
      </div>

      {/* Snapshot Cards */}
      <div id="snapshot" className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs mb-10">
        <div>
          <div className="text-xs uppercase font-mono text-neutral-400">Scale of Problem</div>
          <div className="text-xl font-bold text-neutral-900 mt-1">70,000+</div>
          <div className="text-xs text-neutral-500 mt-0.5">Daily bus commuters</div>
        </div>
        <div>
          <div className="text-xs uppercase font-mono text-neutral-400">Network Covered</div>
          <div className="text-xl font-bold text-neutral-900 mt-1">90 Routes</div>
          <div className="text-xs text-neutral-500 mt-0.5">Structured & mapped</div>
        </div>
        <div>
          <div className="text-xs uppercase font-mono text-neutral-400">Team Leadership</div>
          <div className="text-xl font-bold text-neutral-900 mt-1">7 Members</div>
          <div className="text-xs text-neutral-500 mt-0.5">Product, Android, Backend</div>
        </div>
        <div>
          <div className="text-xs uppercase font-mono text-neutral-400">Outcome</div>
          <div className="text-xl font-bold text-neutral-900 mt-1">Deployable MVP</div>
          <div className="text-xs text-neutral-500 mt-0.5">Validated with depot staff</div>
        </div>
      </div>

      {/* CONDITIONAL: 2-MINUTE RECRUITER TL;DR */}
      {readingMode === 'skimmable' && (
        <div className="space-y-8 bg-neutral-50 p-6 sm:p-8 rounded-xl border border-neutral-200 mb-12">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 mb-3">Executive Summary (20-Second Read)</h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {caseStudy.executiveSummary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-500 mb-2">1. The Problem</div>
              <p className="text-sm text-neutral-700">
                Nashik commuters waited 30 to 90 minutes without knowing when the next bus would come. MSRTC had slashed its fleet from 265 to 110 buses to cut losses, making buses unpredictable.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-neutral-500 mb-2">2. The Product Decision</div>
              <p className="text-sm text-neutral-700">
                Live GPS was impossible because buses lacked hardware and stops lacked coordinates. Instead of failing, we pivoted to a <strong>Heuristic ETA engine</strong> driven by 90 digitized timetable routes and 1-tap conductor departure signals.
              </p>
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-neutral-500 mb-2">3. The Mature Retrospective</div>
              <p className="text-sm text-neutral-700">
                The product worked, but launch stalled because MSRTC was actively transferring transit responsibilities to NMC Smart City. Neither entity was incentivized to sign off on new software at the handover point.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={() => setReadingMode('deep')}
              className="text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1"
            >
              <span>Switch to full 21-section deep dive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-neutral-300">·</span>
            {onOpenSimulator && (
              <button
                onClick={onOpenSimulator}
                className="text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1"
              >
                <span>Test the Heuristic ETA Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* CONDITIONAL: THE BIG PIVOT VIEW */}
      {readingMode === 'pivot' && (
        <div className="space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-neutral-200 mb-12 shadow-2xs">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase text-neutral-500">Core Product Trade-off</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1 mb-3">
              We changed the solution — not the user problem
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              The first solution everyone suggests for transit is "put GPS on the buses". Before building, we audited feasibility and discovered that Nashik had zero GPS hardware on municipal buses and zero municipal budget to procure it.
            </p>
          </div>

          {/* Solution Comparison Table */}
          <div className="overflow-x-auto border border-neutral-200 rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-100/70 border-b border-neutral-200 text-xs font-mono uppercase text-neutral-600">
                <tr>
                  <th className="py-3 px-4">Aspect</th>
                  <th className="py-3 px-4 text-neutral-500">Initial Concept (GPS Tracking)</th>
                  <th className="py-3 px-4 text-neutral-900 bg-neutral-200/50">MVP Approach (Heuristic ETA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr>
                  <td className="py-3 px-4 font-medium text-neutral-900">Core Mechanism</td>
                  <td className="py-3 px-4">GPS-based live telemetry</td>
                  <td className="py-3 px-4 bg-neutral-50 font-medium">Heuristic ETA using available route data</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-neutral-900">Data Dependency</td>
                  <td className="py-3 px-4">GPS units + complete stop coordinates</td>
                  <td className="py-3 px-4 bg-neutral-50 font-medium">Route, timetable & conductor departure triggers</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-neutral-900">Infrastructure Cost</td>
                  <td className="py-3 px-4 text-rose-700">High (new hardware procurement + cellular SIMs)</td>
                  <td className="py-3 px-4 bg-neutral-50 text-emerald-800 font-medium">Low to zero (works with existing Android phones)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-neutral-900">Feasibility</td>
                  <td className="py-3 px-4 text-rose-700">Low (blocked by municipal deficit)</td>
                  <td className="py-3 px-4 bg-neutral-50 text-emerald-800 font-medium">High (deployable prototype within 6 months)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-neutral-900">Outcome Preserved</td>
                  <td className="py-3 px-4">Journey predictability</td>
                  <td className="py-3 px-4 bg-neutral-50 font-bold text-neutral-900">Same: Commuters know when to arrive at stops</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 p-2">
            <img
              src="/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_38_23_PM_ea32cc97.png"
              alt="Solution Exploration Diagram: From GPS Tracking to Heuristic ETA"
              className="w-full h-auto rounded"
            />
            <div className="p-3 text-xs text-neutral-500">
              Figure: Solution Exploration Flow documenting the decision boundary from unfeasible GPS telemetry to a lightweight, deployable two-sided architecture.
            </div>
          </div>
        </div>
      )}

      {/* FULL DEEP-DIVE (ALL 21 STRATEGIC SECTIONS) */}
      {readingMode === 'deep' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Sticky Table of Contents on Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-1 text-xs">
              <div className="font-mono uppercase text-neutral-400 font-semibold mb-2">Sections</div>
              {sectionNav.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActiveSectionId(s.id)}
                  className={`block py-1.5 px-2 rounded-md transition-colors ${
                    activeSectionId === s.id
                      ? 'bg-neutral-200/70 text-neutral-900 font-semibold'
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                >
                  {s.label}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-200 mt-4 space-y-2">
                <a
                  href="/assets/aistudio/NBA_product_portfolio_-_artifacts_3418db75.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 font-medium py-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Full PDF</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Case Study Narrative */}
          <main className="lg:col-span-9 space-y-16">
            {/* Section 2: The Story */}
            <section id="the-story" className="scroll-mt-24 space-y-4">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 02</span>
                <h2 className="text-2xl font-bold text-neutral-900">The Story: Why I Built This</h2>
                <p className="text-sm text-neutral-500 mt-1">A newspaper headline turned a personal frustration into a product opportunity.</p>
              </div>

              <blockquote className="p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-900 text-sm italic text-neutral-700 leading-relaxed">
                "I was deeply frustrated for at least 3 years (2015–18) with the poor public city bus transport of Nashik. It was my daily routine to wait for 30 to 90 minutes for the bus to arrive. We didn't have a digital system to know the ETA. Also, the bus frequency was low—one bus leaving from our college couldn't take all the waiting students."
              </blockquote>

              <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  In 2018, while studying Computer Science and taking an NPTEL course in <strong>Object-Oriented Analysis and Design (OOAD)</strong>, I learned to look at software through a systems lens: analyzing real-world entities, boundaries, and dependencies rather than just writing code.
                </p>
                <p>
                  When I asked my professor what a final-year project should look like, he suggested looking beyond standard IEEE papers to <strong>real-world civic problems</strong> reported in daily newspapers. That week, headlines highlighted how Nashik's municipal bus fleet had been severely reduced due to escalating financial deficits, stranding tens of thousands of commuters.
                </p>
                <p>
                  With 1.5 months before the final academic term, I assembled a 7-member cross-functional team of peers and stepped in as <strong>Product Lead and Scrum Master</strong>. What began as personal daily frustration became an opportunity to redesign a city-wide mobility experience.
                </p>
              </div>
            </section>

            {/* Section 3: Business & Market Context */}
            <section id="business-context" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 03</span>
                <h2 className="text-2xl font-bold text-neutral-900">Business & Market Context: The Ecosystem Dilemma</h2>
                <p className="text-sm text-neutral-500 mt-1">A commuter problem inside a financially constrained and shifting transport ecosystem.</p>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  Most student projects fail because they assume a simple world: "build an app and users will come." In reality, we entered a deeply fractured ecosystem with three major forces in opposition:
                </p>
              </div>

              {/* Ecosystem Quadrant Image */}
              <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white p-3 shadow-2xs">
                <img
                  src="/assets/aistudio/ChatGPT_Image_Aug_13__2026__09_41_02_PM_1ef80a73.png"
                  alt="Strategic Tension: Commuters vs MSRTC vs NMC vs Technology"
                  className="w-full h-auto rounded"
                />
                <div className="p-3 text-xs text-neutral-500 bg-neutral-50 mt-2 rounded">
                  <strong>Strategic Tension Map:</strong> Commuters needed predictability; MSRTC was losing ₹17.72 Cr annually and wanted to exit city operations; NMC wanted smart mobility but lacked operational infrastructure; technology had to bridge this at negligible cost.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-900 text-sm">🚌 70,000+ Commuters</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Faced 0.5–1.5 hr delays, overcrowded buses, zero ETA visibility, and complete dependence on informal word-of-mouth.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-900 text-sm">⚙️ MSRTC Deficits</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Recorded losses of ₹17.72 Cr in 2016-17; slashed operating fleet from 265 to 110 buses. Primary motivation: cut operational bleeding.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-900 text-sm">🏛️ NMC Transition</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Civic body pressured to assume transit authority under Smart City Mission, creating institutional ambiguity over long-term ownership.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Problem Discovery */}
            <section id="problem-discovery" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 04</span>
                <h2 className="text-2xl font-bold text-neutral-900">Problem Discovery: Rigorous Field Research</h2>
                <p className="text-sm text-neutral-500 mt-1">We didn't start by building an app. We started by understanding the system.</p>
              </div>

              <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white p-3 shadow-2xs">
                <img
                  src="/assets/aistudio/ChatGPT_Image_Aug_14__2026__08_03_26_PM_c8b0a83e.png"
                  alt="Discovery Process Diagram: 50+ commuter interviews, depot shadowing, benchmarking"
                  className="w-full h-auto rounded"
                />
                <div className="p-3 text-xs text-neutral-500 bg-neutral-50 mt-2 rounded">
                  <strong>Discovery Process:</strong> Moving from initial naive assumptions to grounded findings across 50+ commuter conversations, depot controller shadowing, and multi-city benchmarking (Indore, Mysore, Bengaluru).
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  To validate whether our personal frustration reflected broader civic reality, our 7-member team conducted extensive field research:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700">
                  <li><strong>50+ Commuter Interviews:</strong> Conducted in person across major city hubs (CBS Depot, College Road, Nimani, Gangapur Road) during peak and off-peak hours.</li>
                  <li><strong>Transport Stakeholder Shadowing:</strong> Spent days at MSRTC depot offices observing how depot controllers manually compiled paper dispatch sheets.</li>
                  <li><strong>Digitizing 90 Bus Routes:</strong> Acquired legacy paper timetables from depot managers and cleaned, verified, and mapped all 90 routes into a relational schema.</li>
                  <li><strong>Cross-City Benchmarking:</strong> Researched existing digital public transit implementations in Indore (iBus), Mysore (Mitra), and Bengaluru (BMTC).</li>
                </ul>

                <div className="p-4 rounded-lg bg-neutral-100 border border-neutral-200">
                  <div className="text-xs font-mono uppercase text-neutral-500 font-semibold mb-1">The Critical Discovery Insight</div>
                  <p className="text-sm font-medium text-neutral-900">
                    The core commuter need was not "I want to watch a little bus icon move on a map." It was <em>predictability</em>: knowing which bus to take, when the next departure was expected, and how long they would wait, so they could plan their morning journey.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: The Pivot */}
            <section id="the-pivot" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 05</span>
                <h2 className="text-2xl font-bold text-neutral-900">The Key Product Pivot: GPS → Heuristic ETA</h2>
                <p className="text-sm text-neutral-500 mt-1">Don't change the user problem because the ideal technical solution is unfeasible. Change the solution.</p>
              </div>

              <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white p-3 shadow-2xs">
                <img
                  src="/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_38_23_PM_ea32cc97.png"
                  alt="Solution Exploration: GPS vs Heuristic ETA Pivot"
                  className="w-full h-auto rounded"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  Our initial brainstorm was GPS-based tracking. However, investigating MSRTC's operational reality exposed severe dependencies we could not fulfill:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-md">
                    <span className="font-semibold text-rose-900 block mb-1">Fatal Dependency 1: No Hardware</span>
                    Buses were 10-15 years old with zero onboard GPS telemetry units. Outfitting 110 buses required millions of rupees MSRTC didn't have.
                  </div>
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-md">
                    <span className="font-semibold text-rose-900 block mb-1">Fatal Dependency 2: Incomplete Coordinates</span>
                    Nashik had hundreds of informal stops without verified GIS coordinates, meaning map rendering would be incomplete and misleading.
                  </div>
                </div>

                <p>
                  Instead of abandoning the project, I steered the team toward a <strong>Heuristic ETA approach</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-neutral-700">
                  <li>Compute scheduled runtimes between stops from the 90 digitized timetable routes.</li>
                  <li>Equip the bus conductor or terminal controller with an ultra-lightweight Android app where they tap "Departed" upon leaving terminal bays.</li>
                  <li>Cascade calibrated runtime offsets to all downstream stops, adjusting for peak-hour congestion factors.</li>
                  <li>Deliver 90%+ reliable arrival intervals for commuters at <strong>₹0 hardware capital cost</strong>.</li>
                </ul>

                {onOpenSimulator && (
                  <div className="p-4 bg-neutral-900 text-white rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-sm">Interactive Heuristic ETA Simulator</div>
                      <div className="text-xs text-neutral-400 mt-0.5">Test how the departure heuristic predicts arrivals with real Nashik routes.</div>
                    </div>
                    <button
                      onClick={onOpenSimulator}
                      className="px-4 py-2 bg-white text-neutral-900 rounded font-medium text-xs hover:bg-neutral-100 transition-colors shrink-0"
                    >
                      Open Live Simulator →
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Section 6: MVP Architecture */}
            <section id="mvp-architecture" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 06</span>
                <h2 className="text-2xl font-bold text-neutral-900">Two-Sided MVP Architecture: Commuter + Operations</h2>
                <p className="text-sm text-neutral-500 mt-1">A consumer app without an operational data pipeline is just an empty shell.</p>
              </div>

              <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white p-3 shadow-2xs">
                <img
                  src="/assets/aistudio/ChatGPT_Image_Aug_19__2026__03_19_16_PM_0f9ee6da.png"
                  alt="Five-Stakeholder Personas & Ecosystem Workflow"
                  className="w-full h-auto rounded"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg border border-neutral-200 bg-white">
                  <div className="flex items-center gap-2 font-semibold text-neutral-900 text-base mb-2">
                    <Bus className="w-4 h-4 text-neutral-800" />
                    <span>1. Commuter App</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-neutral-600 space-y-2">
                    <li>• Origin-to-destination route exploration across all 90 city lines.</li>
                    <li>• Estimated departure countdown & scheduled intervals.</li>
                    <li>• Token-based query caching for reliable performance on 2G/3G connections.</li>
                    <li>• Nearest bus stop identification and estimated fares.</li>
                  </ul>
                  {onOpenGalleryItem && (
                    <button
                      onClick={() => onOpenGalleryItem('art-5')}
                      className="mt-4 text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1"
                    >
                      <span>View Commuter Screen Mockup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="p-5 rounded-lg border border-neutral-200 bg-white">
                  <div className="flex items-center gap-2 font-semibold text-neutral-900 text-base mb-2">
                    <Users className="w-4 h-4 text-neutral-800" />
                    <span>2. Controller & Conductor App</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-neutral-600 space-y-2">
                    <li>• 1-tap departure logging from terminal bus bays (e.g. Uttam Nagar via CBS).</li>
                    <li>• Role-based staff management (Depot Controller vs Trip Conductor).</li>
                    <li>• Passwordless phone number verification for friction-free onboarding.</li>
                    <li>• Real-time roster access revocation for rotating contractual staff.</li>
                  </ul>
                  {onOpenGalleryItem && (
                    <button
                      onClick={() => onOpenGalleryItem('art-6')}
                      className="mt-4 text-xs font-semibold text-neutral-900 hover:underline flex items-center gap-1"
                    >
                      <span>View Operations Screens</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Section 7: Prioritization */}
            <section id="prioritization-framework" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 07</span>
                <h2 className="text-2xl font-bold text-neutral-900">Prioritization: Foundation Before Optimization</h2>
                <p className="text-sm text-neutral-500 mt-1">We prioritized the baseline information layer before attempting algorithmic optimization.</p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  Initial project brainstorms included sophisticated ideas: genetic algorithms to dynamically reorganize bus schedules, commuter crowdsourcing, and automatic seat occupancy prediction.
                </p>
                <p>
                  As Product Lead, I instituted a strict sequencing framework:
                </p>

                <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 space-y-3 font-mono text-xs text-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">1</span>
                    <span>Establish the Information Foundation (Digitize & clean 90 routes from paper)</span>
                  </div>
                  <div className="pl-3 border-l-2 border-neutral-300 ml-3 py-1">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">2</span>
                    <span>Enable Commuter Experience (Search, routes, stops, predictable timetable)</span>
                  </div>
                  <div className="pl-3 border-l-2 border-neutral-300 ml-3 py-1">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">3</span>
                    <span>Enable Operational Updates (Conductor terminal app for departure triggers)</span>
                  </div>
                  <div className="pl-3 border-l-2 border-neutral-300 ml-3 py-1">↓</div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-neutral-400 text-white flex items-center justify-center font-bold text-xs">4</span>
                    <span>Deferred to Phase 2: Add Genetic Algorithm Scheduling Intelligence</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600">
                  <em>Principle:</em> First make existing public transport information accessible and usable; then build automated optimization on top of proven data fidelity.
                </p>
              </div>
            </section>

            {/* Section 8: Leadership & Cross-Functional Team */}
            <section id="leadership-execution" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 08</span>
                <h2 className="text-2xl font-bold text-neutral-900">Leadership & Cross-Functional Execution</h2>
                <p className="text-sm text-neutral-500 mt-1">Leading a 7-person team from an ambiguous idea to a deployable system.</p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  To deliver a functional system within the academic year deadline, I maintained a strict distinction between individual contributions and team capabilities:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                    <div className="font-semibold text-neutral-900 text-sm mb-2">My Direct Role (Product Lead)</div>
                    <ul className="text-xs text-neutral-600 space-y-1.5 list-disc pl-4">
                      <li>Originated the opportunity from newspaper coverage and commuter interviews.</li>
                      <li>Created alignment around the Heuristic ETA pivot when GPS was ruled out.</li>
                      <li>Authored PRDs, user stories, acceptance criteria, and managed sprint boards.</li>
                      <li>Engaged external stakeholders at MSRTC depot offices and NMC.</li>
                      <li>Secured department grant funding and test hardware for pilots.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                    <div className="font-semibold text-neutral-900 text-sm mb-2">Team Contributions</div>
                    <ul className="text-xs text-neutral-600 space-y-1.5 list-disc pl-4">
                      <li><strong>2 Android Engineers:</strong> Built native Android interfaces with low-memory consumption.</li>
                      <li><strong>2 Backend Developers:</strong> Parsed 90 route timetables and built JSON REST endpoints.</li>
                      <li><strong>1 Field Researcher:</strong> Led commuter survey sampling across 6 transit hubs.</li>
                      <li><strong>1 UI/Diagram Designer:</strong> Visualized workflows and system architecture blueprints.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: The Launch That Didn't Happen */}
            <section id="retrospective" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 09</span>
                <h2 className="text-2xl font-bold text-neutral-900">The Launch That Didn't Happen: A Mature Retrospective</h2>
                <p className="text-sm text-neutral-500 mt-1">We built the MVP. But the institutional ground moved underneath us.</p>
              </div>

              <blockquote className="p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-900 text-sm italic text-neutral-700 leading-relaxed">
                "Don't frame it as: 'MSRTC killed our product.' Frame it as: 'Our product encountered organizational misalignment at the point of adoption.' That is what genuine Product Management maturity looks like."
              </blockquote>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>
                  By spring 2019, our two-sided Android applications were built, the 90 routes were cleaned, and the system was ready for a closed beta pilot across 3 major depots.
                </p>
                <p>
                  However, when we sought final operational sign-off for depot deployment, we hit an institutional impasse:
                </p>

                {/* 4 Pillars Failure Analysis */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 text-sm">1. Product Feasibility</span>
                      <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">PASSED</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Could we technically build it? Yes. Both applications compiled, ran stably on commodity hardware, and handled 90 route networks.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 text-sm">2. User Value</span>
                      <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">PASSED</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Did commuters have a meaningful problem? Yes. 50+ commuter interviews overwhelmingly validated deep demand for predictable bus schedules.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-neutral-200 bg-white">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 text-sm">3. Business Case</span>
                      <span className="text-xs font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">TARGETED</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Could it recover revenue? Projected 15% revenue recovery and 20% wait time reduction, but unmeasured in full municipal rollout.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-rose-200 bg-rose-50/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-900 text-sm">4. Organizational Readiness</span>
                      <span className="text-xs font-mono text-rose-700 font-bold bg-rose-100 px-2 py-0.5 rounded">BLOCKED</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-2">
                      Was the customer ready and incentivized to adopt? <strong>Ultimately, no.</strong> MSRTC was actively preparing to exit Nashik city bus operations and transfer everything to NMC. Neither organization had the incentive to mandate new software for conductors during an ongoing transition.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-600">
                  This experience taught me the single most valuable lesson of my product career: <strong>A product can be technically pristine and loved by end users, yet still fail if it fails to align with the operating organization's strategic incentives.</strong>
                </p>
              </div>
            </section>

            {/* Section 10: Product Lessons */}
            <section id="product-lessons" className="scroll-mt-24 space-y-6">
              <div className="border-b border-neutral-200 pb-2">
                <span className="text-xs font-mono uppercase text-neutral-400">Section 10</span>
                <h2 className="text-2xl font-bold text-neutral-900">What I Would Do Differently Today & 5 Core Lessons</h2>
                <p className="text-sm text-neutral-500 mt-1">Practical frameworks that govern my product decisions today.</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-semibold text-neutral-900 text-sm mb-2">If I were to start NBA today, I would:</div>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-700">
                    <li>Map the full political and institutional ecosystem before writing any code.</li>
                    <li>Identify who truly owns the budget and operational authority for the transit system.</li>
                    <li>Secure an executive champion with direct authority to authorize conductor operational workflows.</li>
                    <li>Establish a formal, small-scale pilot agreement with clear success criteria upfront.</li>
                    <li>Only then invest team engineering cycles into scaling features.</li>
                  </ol>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-semibold text-neutral-900 text-base">5 Core Product Principles</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {PORTFOLIO_DATA.productPhilosophy.principles.map((p) => (
                      <div key={p.number} className="p-4 rounded-lg border border-neutral-200/90 bg-white">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs text-neutral-400 font-bold">{p.number}</span>
                          <span className="font-semibold text-neutral-900 text-sm">{p.title}</span>
                        </div>
                        <p className="text-xs text-neutral-600 mb-2">{p.description}</p>
                        <div className="text-xs text-neutral-500 bg-neutral-50 p-2 rounded border border-neutral-100">
                          <strong className="text-neutral-700">NBA Evidence: </strong>{p.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
};
