import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Hammer, ShoppingBag, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/50 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Trusted by 500+ Arizona homeowners
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Your Property.{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fair Bids.
            </span>{" "}
            Best Value.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up stagger-1">
            Connect with verified contractors and asset buyers through our transparent bidding marketplace. Get competitive offers in 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up stagger-2">
            <Link to="/register?role=homeowner">
              <Button variant="hero" size="xl" className="group">
                Post Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="heroOutline" size="xl">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/60 text-sm animate-slide-up stagger-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span>24-Hour Bidding</span>
            </div>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20 animate-slide-up stagger-4">
          <Link to="/register?role=homeowner" className="group">
            <div className="p-6 rounded-2xl bg-homeowner/10 border border-homeowner/20 backdrop-blur-sm hover:bg-homeowner/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-homeowner flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-homeowner-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Homeowners</h3>
              <p className="text-primary-foreground/60 text-sm">
                Post your remodeling project and receive competitive bids from verified contractors.
              </p>
            </div>
          </Link>

          <Link to="/register?role=contractor" className="group">
            <div className="p-6 rounded-2xl bg-contractor/10 border border-contractor/20 backdrop-blur-sm hover:bg-contractor/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-contractor flex items-center justify-center mb-4">
                <Hammer className="w-7 h-7 text-contractor-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Contractors</h3>
              <p className="text-primary-foreground/60 text-sm">
                Join our network and bid on projects in your service area. One-time $199 fee.
              </p>
            </div>
          </Link>

          <Link to="/register?role=buyer" className="group">
            <div className="p-6 rounded-2xl bg-buyer/10 border border-buyer/20 backdrop-blur-sm hover:bg-buyer/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-buyer flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7 text-buyer-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Asset Buyers</h3>
              <p className="text-primary-foreground/60 text-sm">
                Access nationwide listings and purchase quality assets. One-time $199 fee.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
