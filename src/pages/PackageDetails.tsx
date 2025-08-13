import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Calendar, Users, Utensils, Car, Hotel, ArrowLeft } from "lucide-react";

const packageDetails = {
  1: {
    name: "Golden Triangle Deluxe",
    destinations: "Delhi • Agra • Jaipur",
    duration: "6 Days / 5 Nights",
    description: "Experience India's most iconic destinations with luxury accommodations. Witness the majestic Taj Mahal at sunrise and explore royal palaces with expert guides.",
    price: "₹45,999",
    rating: 4.8,
    type: "domestic",
    image: "🏛️",
    highlights: [
      "Sunrise visit to Taj Mahal",
      "Luxury heritage hotels",
      "Private guided tours",
      "Cultural performances",
      "Traditional cuisine experiences"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Delhi", activities: ["Airport pickup", "Hotel check-in", "Red Fort visit", "Chandni Chowk exploration"] },
      { day: 2, title: "Delhi Sightseeing", activities: ["India Gate", "Lotus Temple", "Qutub Minar", "Humayun's Tomb"] },
      { day: 3, title: "Delhi to Agra", activities: ["Morning departure", "Taj Mahal visit", "Agra Fort", "Local market visit"] },
      { day: 4, title: "Agra to Jaipur", activities: ["Fatehpur Sikri en route", "City Palace", "Hawa Mahal", "Local bazaar"] },
      { day: 5, title: "Jaipur Exploration", activities: ["Amber Fort", "Jantar Mantar", "Albert Hall Museum", "Cultural show"] },
      { day: 6, title: "Departure", activities: ["Hotel checkout", "Jaipur airport transfer", "Departure"] }
    ],
    inclusions: ["Accommodation", "All meals", "Transportation", "Guide services", "Entry fees"],
    exclusions: ["International flights", "Personal expenses", "Tips", "Travel insurance"]
  }
  // Add more package details as needed
};

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const packageId = parseInt(id || "1");
  const pkg = packageDetails[packageId as keyof typeof packageDetails] || packageDetails[1];

  const handleBookNow = () => {
    navigate(`/payment/${packageId}`);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={() => {}} currentView="packages" onBackToHome={handleBackToHome} />
      
      <div className="container mx-auto px-6 py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Package Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={pkg.type === 'domestic' ? 'default' : 'secondary'}>
                    {pkg.type === 'domestic' ? 'Domestic' : 'International'}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{pkg.rating}</span>
                  </div>
                </div>
                <div className="text-6xl mb-4">{pkg.image}</div>
                <CardTitle className="text-3xl font-bold">{pkg.name}</CardTitle>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{pkg.destinations}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                <CardDescription className="text-lg mt-4">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Package Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle>Day-wise Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-primary pl-6">
                      <h4 className="font-semibold text-lg">Day {day.day}: {day.title}</h4>
                      <ul className="mt-2 space-y-1">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="text-muted-foreground">• {activity}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Inclusions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Exclusions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-red-500 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Book This Package</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Flexible dates available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>Group discounts available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Hotel className="h-4 w-4" />
                    <span>Luxury accommodations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Car className="h-4 w-4" />
                    <span>Private transportation</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleBookNow} className="w-full" size="lg">
                    Book Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Get Quote
                  </Button>
                  <Button variant="ghost" className="w-full">
                    Download Itinerary
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>24/7 Customer Support</p>
                  <p>Secure Payment Gateway</p>
                  <p>Free Cancellation up to 48hrs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}