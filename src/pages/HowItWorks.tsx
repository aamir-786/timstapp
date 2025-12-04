import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Upload, Bell, Timer, Trophy, CreditCard, Handshake, 
  ArrowRight, Home, Hammer, ShoppingBag, CheckCircle2 
} from "lucide-react";

const homeownerSteps = [
  {
    icon: Upload,
    title: "Create Your Post",
    description: "Upload photos of your asset, add remodeling details, and enter your ZIP code. Your personal information stays private.",
  },
  {
    icon: Bell,
    title: "Bidders Get Notified",
    description: "Contractors in your area and asset buyers nationwide receive instant alerts about your project.",
  },
  {
    icon: Timer,
    title: "24-Hour Bidding",
    description: "Competitive bidding opens. Starting bid is $250. If someone bids $1,000+ in the first 12 hours, they win instantly.",
  },
  {
    icon: Trophy,
    title: "Winner Selected",
    description: "The highest bidder is automatically selected when the 24-hour window closes.",
  },
  {
    icon: CreditCard,
    title: "Payment Processed",
    description: "The winning bidder completes their payment through our secure platform.",
  },
  {
    icon: Handshake,
    title: "Get Connected",
    description: "Your contact details are shared with the winner, and you can begin working together!",
  },
];

const biddingRules = [
  {
    title: "Starting Bid",
    value: "$250",
    description: "Minimum bid to participate",
  },
  {
    title: "Instant Win",
    value: "$1,000+",
    description: "First 12 hours only",
  },
  {
    title: "Bidding Window",
    value: "24 Hours",
    description: "Total time to place bids",
  },
  {
    title: "Unlimited After 12h",
    value: "No Cap",
    description: "Bid any amount after 12 hours",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Process Overview</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                How Timstapp Works
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Our transparent marketplace connects homeowners with verified contractors and asset buyers through a fair, time-based bidding system.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/register?role=homeowner">
                  <Button variant="homeowner" size="lg">
                    <Home className="w-5 h-5 mr-2" />
                    I'm a Homeowner
                  </Button>
                </Link>
                <Link to="/register?role=contractor">
                  <Button variant="contractor" size="lg">
                    <Hammer className="w-5 h-5 mr-2" />
                    I'm a Contractor
                  </Button>
                </Link>
                <Link to="/register?role=buyer">
                  <Button variant="buyer" size="lg">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    I'm a Buyer
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Homeowners */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-homeowner flex items-center justify-center">
                  <Home className="w-6 h-6 text-homeowner-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">For Homeowners</h2>
              </div>

              <div className="grid gap-8">
                {homeownerSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      {index < homeownerSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-4" />
                      )}
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bidding Rules */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Bidding Rules</h2>
                <p className="text-muted-foreground">
                  Our unique bidding system ensures fair competition and quick results.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {biddingRules.map((rule, index) => (
                  <div key={index} className="card-elevated p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{rule.value}</div>
                    <div className="font-semibold text-foreground mb-1">{rule.title}</div>
                    <div className="text-sm text-muted-foreground">{rule.description}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-accent border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Timer className="w-5 h-5 text-primary" />
                  How Instant Win Works
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      During the first 12 hours, if any bidder places a bid of <strong className="text-foreground">$1,000 or more</strong>, they instantly win the auction.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      After 12 hours, bidding becomes unlimited with no instant win threshold.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      The highest bid when the 24-hour window closes wins the auction.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Join thousands of users who trust Timstapp for their property transactions.
              </p>
              <Link to="/register">
                <Button variant="hero" size="xl" className="group">
                  Create Your Account
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
