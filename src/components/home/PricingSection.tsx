import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Home, Hammer, ShoppingBag } from "lucide-react";

const pricingPlans = [
  {
    role: "homeowner",
    icon: Home,
    title: "Homeowners",
    price: "Free",
    subtitle: "No fees to post",
    description: "Post your project and receive bids at no cost.",
    features: [
      "Unlimited project posts",
      "Receive bids from verified contractors",
      "Asset buyer offers included",
      "Privacy protected until deal closes",
      "24-hour bidding window",
      "Secure payment processing",
    ],
    cta: "Post a Project",
    ctaVariant: "homeowner" as const,
    highlight: false,
  },
  {
    role: "contractor",
    icon: Hammer,
    title: "Contractors",
    price: "$199",
    subtitle: "One-time fee",
    description: "Join our network of verified contractors.",
    features: [
      "Lifetime access to platform",
      "Bid on projects in your ZIP codes",
      "Receive instant project alerts",
      "Listed in approved directory",
      "Build your reputation with reviews",
      "Direct contact after winning",
    ],
    cta: "Join as Contractor",
    ctaVariant: "contractor" as const,
    highlight: true,
  },
  {
    role: "buyer",
    icon: ShoppingBag,
    title: "Asset Buyers",
    price: "$199",
    subtitle: "One-time fee",
    description: "Access nationwide asset listings.",
    features: [
      "Lifetime platform access",
      "Nationwide listing alerts",
      "Bid on quality assets",
      "Listed in buyer directory",
      "First access to new listings",
      "Direct seller contact after winning",
    ],
    cta: "Join as Buyer",
    ctaVariant: "buyer" as const,
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Transparent Fees, No Surprises
          </h2>
          <p className="text-muted-foreground">
            Choose your role and get started. One-time fees for professionals, always free for homeowners.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-contractor text-contractor-foreground shadow-xl scale-105"
                  : "card-elevated"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                plan.highlight ? "bg-contractor-foreground/20" : "bg-accent"
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.highlight ? "text-contractor-foreground" : "text-primary"}`} />
              </div>

              <h3 className={`text-xl font-semibold mb-2 ${plan.highlight ? "" : "text-foreground"}`}>
                {plan.title}
              </h3>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.highlight ? "" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                  {plan.subtitle}
                </span>
              </div>

              <p className={`mb-6 ${plan.highlight ? "opacity-90" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                      plan.highlight ? "text-contractor-foreground" : "text-success"
                    }`} />
                    <span className={`text-sm ${plan.highlight ? "opacity-90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link to={`/register?role=${plan.role}`}>
                <Button 
                  variant={plan.highlight ? "secondary" : plan.ctaVariant}
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
