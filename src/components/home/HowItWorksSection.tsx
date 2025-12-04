import { ArrowRight, Upload, Users, Timer, CreditCard, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Post Your Project",
    description: "Homeowners upload asset photos, remodeling details, and ZIP code. Your personal info stays private.",
    color: "homeowner",
  },
  {
    icon: Users,
    title: "Receive Alerts",
    description: "Verified contractors in your area and nationwide asset buyers receive instant notifications.",
    color: "contractor",
  },
  {
    icon: Timer,
    title: "24-Hour Bidding",
    description: "Competitive bidding starts at $250. Bid $1,000+ in first 12 hours to win instantly.",
    color: "buyer",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Winning bidder completes payment through our secure platform.",
    color: "primary",
  },
  {
    icon: PartyPopper,
    title: "Connect & Complete",
    description: "Contact details are released and your project begins!",
    color: "success",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            How Timstapp Works
          </h2>
          <p className="text-muted-foreground">
            Our transparent bidding system ensures fair prices and quality connections between all parties.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-12 last:mb-0">
                {/* Icon */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg
                  ${step.color === 'homeowner' ? 'bg-homeowner' : ''}
                  ${step.color === 'contractor' ? 'bg-contractor' : ''}
                  ${step.color === 'buyer' ? 'bg-buyer' : ''}
                  ${step.color === 'primary' ? 'bg-primary' : ''}
                  ${step.color === 'success' ? 'bg-success' : ''}
                `}>
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Step {index + 1}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground hidden md:block" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
