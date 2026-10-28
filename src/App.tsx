import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { ProductGallery } from './components/ProductGallery';
import { InteractiveETASimulator } from './components/InteractiveETASimulator';
import { ResumeSection } from './components/ResumeSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('case-studies');
  const [selectedGalleryId, setSelectedGalleryId] = useState<string | null>(null);

  const handleNavigateToGalleryItem = (itemId: string) => {
    setSelectedGalleryId(itemId);
    setActiveTab('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToSimulator = () => {
    setActiveTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 flex flex-col font-sans selection:bg-neutral-200">
      {/* Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If on Case Studies tab, show Hero on top as well */}
        {activeTab === 'case-studies' && (
          <>
            <Hero onSelectTab={handleTabChange} />
            <CaseStudyDetail 
              onOpenGalleryItem={handleNavigateToGalleryItem}
              onOpenSimulator={handleNavigateToSimulator}
            />
          </>
        )}

        {/* Product Screens & Architecture Gallery */}
        {activeTab === 'gallery' && (
          <ProductGallery initialSelectedId={selectedGalleryId} />
        )}

        {/* Interactive ETA Simulator */}
        {activeTab === 'simulator' && (
          <InteractiveETASimulator />
        )}

        {/* Resume */}
        {activeTab === 'resume' && (
          <ResumeSection onContactClick={() => handleTabChange('contact')} />
        )}

        {/* Product Philosophy */}
        {activeTab === 'philosophy' && (
          <PhilosophySection onCaseStudyClick={() => handleTabChange('case-studies')} />
        )}

        {/* Contact & Inquiries */}
        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handleTabChange} />
    </div>
  );
}
