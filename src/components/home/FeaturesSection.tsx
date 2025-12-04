import { Shield, Clock, DollarSign, Bell, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All contractors and buyers are vetted and verified before joining our marketplace.",
  },
  {
    icon: Clock,
    title: "24-Hour Bidding",
    description: "Fast turnaround with competitive bidding that closes within 24 hours.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Transparent bidding ensures you get the best value for your project or asset.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Contractors receive alerts for their ZIP codes; buyers get nationwide notifications.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Our rating system helps you choose the best professionals for your needs.",
  },
  {
    icon: Users,
    title: "Privacy Protected",
    description: "Your contact details remain private until a winning bidder completes payment.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Built for Trust & Transparency
          </h2>
          <p className="text-muted-foreground">
            Every feature is designed to create a fair, efficient, and secure marketplace for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-elevated p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
