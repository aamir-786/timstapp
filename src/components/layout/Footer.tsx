import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl">Timstapp</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Connecting homeowners with trusted contractors and asset buyers through a transparent bidding marketplace.
            </p>
            <p className="text-background/50 text-xs">
              A ROI Programs of Arizona Company
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/how-it-works" className="text-background/70 hover:text-primary transition-colors text-sm">
                How It Works
              </Link>
              <Link to="/contractors" className="text-background/70 hover:text-primary transition-colors text-sm">
                For Contractors
              </Link>
              <Link to="/buyers" className="text-background/70 hover:text-primary transition-colors text-sm">
                For Asset Buyers
              </Link>
              <Link to="/pricing" className="text-background/70 hover:text-primary transition-colors text-sm">
                Pricing
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <div className="flex flex-col gap-2">
              <Link to="/faq" className="text-background/70 hover:text-primary transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/terms" className="text-background/70 hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-background/70 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@timstapp.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                support@timstapp.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Phoenix, Arizona</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Timstapp. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-background/50 hover:text-background/70 text-sm transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-background/50 hover:text-background/70 text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-background/50 hover:text-background/70 text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
