import { Mail, Phone, Facebook, Instagram, Twitter, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Wanderlust Travels</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Creating unforgettable journeys and memories that last a lifetime. 
              Your trusted travel companion for over a decade. Test
            </p>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, Delhi, Bangalore</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#domestic" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Domestic
                </a>
              </li>
              <li>
                <a href="#international" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  International
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:info@wanderlust-travels.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@wanderlust-travels.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+919876543210" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Share your travel stories with #WanderlustTravels
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-primary-foreground/80">
            © 2024 Wanderlust Travels. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};