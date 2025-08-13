import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DestinationTabs } from "@/components/DestinationTabs";
import { PackagesSection } from "@/components/PackagesSection";
import { TopPackagesSection } from "@/components/TopPackagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StatsSection } from "@/components/StatsSection";
import { EnquirySection } from "@/components/EnquirySection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'packages'>('home');
  const [selectedDestination, setSelectedDestination] = useState<string>('');

  const handleDestinationClick = (destination: string) => {
    setSelectedDestination(destination);
    setCurrentView('packages');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedDestination('');
  };

  const handleNavigate = (section: string) => {
    if (section === 'domestic' || section === 'international') {
      // Scroll to destinations section
      const element = document.getElementById('destinations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'packages') {
      // Scroll to top packages section
      const element = document.getElementById('top-packages');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'about') {
      // Scroll to about section
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (currentView === 'packages') {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          onNavigate={handleNavigate} 
          currentView={currentView}
          onBackToHome={handleBackToHome}
        />
        <PackagesSection 
          destination={selectedDestination} 
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onNavigate={handleNavigate} 
        currentView={currentView}
        onBackToHome={handleBackToHome}
      />
      <HeroCarousel onDestinationClick={handleDestinationClick} />
      <div id="top-packages">
        <TopPackagesSection />
      </div>
      <div id="destinations">
        <DestinationTabs onDestinationClick={handleDestinationClick} />
      </div>
      <StatsSection />
      <TestimonialsSection />
      <div id="about">
        <AboutSection />
      </div>
      <EnquirySection />
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
