import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const topPackages = [
  {
    id: 1,
    name: "Golden Triangle Deluxe",
    destinations: "Delhi • Agra • Jaipur",
    duration: "6 Days / 5 Nights",
    description: "Experience India's most iconic destinations with luxury accommodations. Witness the majestic Taj Mahal at sunrise and explore royal palaces with expert guides.",
    price: "₹45,999",
    rating: 4.8,
    type: "domestic",
    image: "🏛️"
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    destinations: "Zurich • Interlaken • Zermatt",
    duration: "8 Days / 7 Nights",
    description: "Alpine bliss awaits with scenic train journeys through snow-capped peaks. Experience thrilling cable car rides and stay in charming mountain chalets.",
    price: "₹1,89,999",
    rating: 4.9,
    type: "international",
    image: "🏔️"
  },
  {
    id: 3,
    name: "Kerala Backwater Serenity",
    destinations: "Kochi • Munnar • Alleppey",
    duration: "5 Days / 4 Nights",
    description: "Drift through emerald backwaters on traditional houseboats. Discover spice plantations and enjoy rejuvenating Ayurvedic treatments in God's Own Country.",
    price: "₹32,999",
    rating: 4.7,
    type: "domestic",
    image: "🌴"
  },
  {
    id: 4,
    name: "Maldives Paradise Escape",
    destinations: "Male • Overwater Villas",
    duration: "4 Days / 3 Nights",
    description: "Ultimate tropical luxury with overwater bungalows and pristine coral reefs. Indulge in world-class dining and sunset dolphin cruises.",
    price: "₹1,25,999",
    rating: 4.9,
    type: "international",
    image: "🏝️"
  },
  {
    id: 5,
    name: "Rajasthan Royal Heritage",
    destinations: "Jodhpur • Udaipur • Jaisalmer",
    duration: "7 Days / 6 Nights",
    description: "Step into royal splendor with heritage palace stays and desert safaris. Experience authentic Rajasthani culture with folk performances and camel rides.",
    price: "₹58,999",
    rating: 4.6,
    type: "domestic",
    image: "🏰"
  },
  {
    id: 6,
    name: "Japanese Cherry Blossom",
    destinations: "Tokyo • Kyoto • Osaka",
    duration: "9 Days / 8 Nights",
    description: "Witness Japan's iconic sakura season with ancient temples and modern marvels. Experience traditional tea ceremonies and bullet train adventures.",
    price: "₹1,75,999",
    rating: 4.8,
    type: "international",
    image: "🌸"
  },
  {
    id: 7,
    name: "Goa Beach Bliss",
    destinations: "North Goa • South Goa",
    duration: "4 Days / 3 Nights",
    description: "Perfect beach getaway with vibrant nightlife and Portuguese heritage. Enjoy water sports, beachside dining, and stunning sunset views.",
    price: "₹18,999",
    rating: 4.5,
    type: "domestic",
    image: "🏖️"
  },
  {
    id: 8,
    name: "European Grand Tour",
    destinations: "Paris • Rome • Barcelona",
    duration: "12 Days / 11 Nights",
    description: "Epic European adventure through three iconic cities. Marvel at world-famous landmarks, indulge in local cuisines, and experience rich cultural heritage.",
    price: "₹2,45,999",
    rating: 4.7,
    type: "international",
    image: "🏛️"
  }
];

export const TopPackagesSection = () => {
  const navigate = useNavigate();

  const handleViewDetails = (packageId: number) => {
    navigate(`/package/${packageId}`);
  };

  const handleBookNow = (packageId: number) => {
    navigate(`/payment/${packageId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Top Tour Packages – Handpicked for You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated collection of premium travel experiences, 
            designed to create unforgettable memories across India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topPackages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant={pkg.type === 'domestic' ? 'default' : 'secondary'} className="text-xs">
                    {pkg.type === 'domestic' ? 'Domestic' : 'International'}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{pkg.rating}</span>
                  </div>
                </div>
                <div className="text-3xl mb-2">{pkg.image}</div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {pkg.name}
                </CardTitle>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{pkg.destinations}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pb-4">
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="pt-0 flex flex-col gap-3">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <span className="text-xl font-bold text-primary">{pkg.price}</span>
                </div>
                <div className="flex gap-2 w-full">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-sm"
                    onClick={() => handleViewDetails(pkg.id)}
                  >
                    View Details
                  </Button>
                  <Button 
                    className="flex-1 text-sm"
                    onClick={() => handleBookNow(pkg.id)}
                  >
                    Book Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  );
};