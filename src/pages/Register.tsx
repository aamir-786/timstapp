import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, Home, Hammer, ShoppingBag, Check } from "lucide-react";
import { cn } from "@/lib/utils";

type UserRole = "homeowner" | "contractor" | "buyer";

const roles = [
  {
    id: "homeowner" as UserRole,
    icon: Home,
    title: "Homeowner",
    description: "Post projects & receive bids",
    price: "Free",
    color: "homeowner",
  },
  {
    id: "contractor" as UserRole,
    icon: Hammer,
    title: "Contractor",
    description: "Bid on local projects",
    price: "$199 one-time",
    color: "contractor",
  },
  {
    id: "buyer" as UserRole,
    icon: ShoppingBag,
    title: "Asset Buyer",
    description: "Purchase assets nationwide",
    price: "$199 one-time",
    color: "buyer",
  },
];

const Register = () => {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get("role") as UserRole | null;
  
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(initialRole);
  const [step, setStep] = useState(initialRole ? 2 : 1);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    zipCodes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic with Supabase
    console.log("Register:", { role: selectedRole, ...formData });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <div className="max-w-lg w-full mx-auto">
          {/* Back Link */}
          <button
            onClick={() => step === 2 && !initialRole ? setStep(1) : null}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {step === 1 || initialRole ? (
              <Link to="/">Back to home</Link>
            ) : (
              <span>Choose role</span>
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl text-foreground">Timstapp</span>
          </div>

          {/* Step 1: Role Selection */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
              <p className="text-muted-foreground mb-8">
                Choose how you'd like to use Timstapp
              </p>

              <div className="space-y-4">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={cn(
                      "w-full p-6 rounded-xl border-2 text-left transition-all duration-200 hover:-translate-y-0.5",
                      "hover:shadow-md group",
                      selectedRole === role.id
                        ? `border-${role.color} bg-${role.color}/5`
                        : "border-border hover:border-muted-foreground/30"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                        `bg-${role.color}`
                      )}>
                        <role.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-foreground">{role.title}</h3>
                          <span className={cn(
                            "text-sm font-medium",
                            role.price === "Free" ? "text-success" : "text-muted-foreground"
                          )}>
                            {role.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 2: Registration Form */}
          {step === 2 && selectedRole && (
            <>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">
                  Register as {roles.find(r => r.id === selectedRole)?.title}
                </h1>
              </div>
              <p className="text-muted-foreground mb-8">
                {selectedRole === "homeowner" 
                  ? "Create your free account to start posting projects"
                  : "Complete registration to join our verified network"}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-11"
                  />
                </div>

                {selectedRole === "contractor" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company LLC"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCodes">Service ZIP Codes</Label>
                      <Input
                        id="zipCodes"
                        placeholder="85001, 85002, 85003..."
                        value={formData.zipCodes}
                        onChange={handleInputChange}
                        className="h-11"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter the ZIP codes you serve, separated by commas
                      </p>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="h-11 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {selectedRole !== "homeowner" && (
                  <div className="p-4 rounded-lg bg-accent border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">Registration Fee</span>
                      <span className="font-bold text-foreground">$199</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      One-time fee for lifetime access. You'll be redirected to payment after registration.
                    </p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-12"
                  variant={selectedRole === "homeowner" ? "homeowner" : selectedRole === "contractor" ? "contractor" : "buyer"}
                  size="lg"
                >
                  {selectedRole === "homeowner" ? "Create Free Account" : "Continue to Payment"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By registering, you agree to our{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </form>
            </>
          )}

          {/* Login Link */}
          <p className="mt-8 text-center text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center max-w-md">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Join the Marketplace
          </h2>
          <ul className="space-y-4 text-left">
            {[
              "Verified professionals only",
              "Secure payment processing",
              "24-hour competitive bidding",
              "Privacy protected",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-primary-foreground/80">
                <Check className="w-5 h-5 text-success shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
