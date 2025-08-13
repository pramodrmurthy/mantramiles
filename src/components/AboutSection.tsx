import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Globe, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Wanderlust Travels
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are passionate travel curators dedicated to creating unforgettable journeys that inspire, 
              connect, and transform. With over a decade of expertise, we craft personalized experiences 
              that turn your travel dreams into cherished memories.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Extensive knowledge of destinations worldwide
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">
                Customized itineraries tailored to your preferences
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Handpicked accommodations and experiences
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 bg-card">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">5-Star Service</h3>
              <p className="text-sm text-muted-foreground">
                24/7 support throughout your journey
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            What Our Travelers Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                "Our Switzerland trip was absolutely magical! Every detail was perfectly planned, 
                from the scenic train rides to the cozy mountain hotels. Wanderlust Travels made 
                our dream honeymoon a reality."
              </blockquote>
              <div className="font-semibold text-foreground">Priya & Arjun Sharma</div>
              <div className="text-sm text-muted-foreground">Honeymooners, Switzerland</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                "The Kerala backwaters experience was beyond our expectations. The houseboat was 
                luxurious, the food was authentic, and the serenity was exactly what we needed. 
                Highly recommend this team!"
              </blockquote>
              <div className="font-semibold text-foreground">Rajesh & Family</div>
              <div className="text-sm text-muted-foreground">Family Vacation, Kerala</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};