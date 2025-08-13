import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Delhi",
    text: "Mantra Miles made our Chardham Yatra absolutely divine! The arrangements were perfect and the spiritual journey was life-changing. Highly recommend their services.",
    rating: 5,
    trip: "Chardham Yatra Package"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    text: "Excellent service and attention to detail. Our family trip to Kerala was memorable thanks to their professional planning and warm hospitality.",
    rating: 5,
    trip: "Kerala Backwaters Tour"
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Ahmedabad",
    text: "The Golden Triangle tour exceeded our expectations. Professional guides, comfortable accommodation, and seamless travel. Will definitely book again!",
    rating: 5,
    trip: "Golden Triangle Package"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Bangalore",
    text: "From booking to the final day, everything was perfectly organized. The team's dedication to customer satisfaction is truly commendable. Amazing experience!",
    rating: 5,
    trip: "Himachal Adventure Tour"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Jaipur",
    text: "Professional service with personal touch. Our spiritual journey to Varanasi was handled with utmost care and respect. Thank you Mantra Miles!",
    rating: 5,
    trip: "Spiritual Varanasi Tour"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Roll every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from our valued customers who trusted us with their journeys
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center animate-fade-in">
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.location} • {currentTestimonial.trip}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};