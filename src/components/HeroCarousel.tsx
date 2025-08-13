import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import tajMahalHero from "@/assets/taj-mahal-hero.jpg";
import kedarnathTemple from "@/assets/kedarnath-temple.jpg";
import badrinathTemple from "@/assets/badrinath-temple.jpg";
import keralaBackwaters from "@/assets/kerala-backwaters.jpg";
import gangotriTemple from "@/assets/gangotri-temple.jpg";

const heroImages = [
  {
    id: 1,
    image: tajMahalHero,
    title: "Agra, India",
    subtitle: "Witness the eternal symbol of love",
    destination: "agra"
  },
  {
    id: 2,
    image: kedarnathTemple,
    title: "Kedarnath, Uttarakhand",
    subtitle: "Sacred abode of Lord Shiva in Himalayas",
    destination: "kedarnath"
  },
  {
    id: 3,
    image: badrinathTemple,
    title: "Badrinath, Uttarakhand",
    subtitle: "Divine temple of Lord Vishnu",
    destination: "badrinath"
  },
  {
    id: 4,
    image: keralaBackwaters,
    title: "Kerala, India",
    subtitle: "Cruise through serene backwaters",
    destination: "kerala"
  },
  {
    id: 5,
    image: gangotriTemple,
    title: "Gangotri, Uttarakhand",
    subtitle: "Sacred source of river Ganga",
    destination: "gangotri"
  }
];

interface HeroCarouselProps {
  onDestinationClick: (destination: string) => void;
}

export const HeroCarousel = ({ onDestinationClick }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {heroImages.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="h-full bg-cover bg-center bg-no-repeat cursor-pointer"
            style={{ backgroundImage: `url(${item.image})` }}
            onClick={() => onDestinationClick(item.destination)}
          >
            <div className="absolute inset-0 bg-black/20">
              <div className="flex h-full items-center justify-center">
                <div className="text-center text-white px-4 animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                    {item.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-90">
                    {item.subtitle}
                  </p>
                  <Button 
                    size="lg"
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDestinationClick(item.destination);
                    }}
                  >
                    Explore Packages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};