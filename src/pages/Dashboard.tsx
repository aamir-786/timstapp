import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Loader2, Home, Hammer, ShoppingBag, LogOut, Settings, Bell } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, userRole, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getRoleIcon = () => {
    switch (userRole?.role) {
      case "homeowner":
        return <Home className="w-5 h-5" />;
      case "contractor":
        return <Hammer className="w-5 h-5" />;
      case "buyer":
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getRoleColor = () => {
    switch (userRole?.role) {
      case "homeowner":
        return "bg-homeowner";
      case "contractor":
        return "bg-contractor";
      case "buyer":
        return "bg-buyer";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl text-foreground">Timstapp</span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 rounded-xl ${getRoleColor()} flex items-center justify-center text-primary-foreground`}>
              {getRoleIcon()}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Welcome back!
              </h1>
              <p className="text-muted-foreground">
                {user.email} • {userRole?.role ? userRole.role.charAt(0).toUpperCase() + userRole.role.slice(1) : "User"}
              </p>
            </div>
          </div>
        </div>

        {/* Verification Status */}
        {userRole && !userRole.is_verified && (
          <div className="mb-8 p-4 rounded-xl border border-warning bg-warning/10">
            <h3 className="font-semibold text-foreground mb-1">Account Pending Verification</h3>
            <p className="text-sm text-muted-foreground">
              {userRole.role === "homeowner" 
                ? "Your account is being verified. You'll be able to post projects soon."
                : "Please complete payment to verify your account and start bidding."}
            </p>
            {!userRole.payment_completed && userRole.role !== "homeowner" && (
              <Button className="mt-4" variant="default">
                Complete Payment - $199
              </Button>
            )}
          </div>
        )}

        {/* Dashboard Content Based on Role */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userRole?.role === "homeowner" && (
            <>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">My Projects</h3>
                <p className="text-3xl font-bold text-primary">0</p>
                <p className="text-sm text-muted-foreground">Active projects</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Total Bids</h3>
                <p className="text-3xl font-bold text-primary">0</p>
                <p className="text-sm text-muted-foreground">Across all projects</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card col-span-full md:col-span-1">
                <Button className="w-full" variant="homeowner" size="lg">
                  Post New Project
                </Button>
              </div>
            </>
          )}

          {userRole?.role === "contractor" && (
            <>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Available Projects</h3>
                <p className="text-3xl font-bold text-contractor">0</p>
                <p className="text-sm text-muted-foreground">In your service area</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">My Bids</h3>
                <p className="text-3xl font-bold text-contractor">0</p>
                <p className="text-sm text-muted-foreground">Active bids</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Won Projects</h3>
                <p className="text-3xl font-bold text-contractor">0</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </>
          )}

          {userRole?.role === "buyer" && (
            <>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Available Assets</h3>
                <p className="text-3xl font-bold text-buyer">0</p>
                <p className="text-sm text-muted-foreground">Nationwide</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">My Bids</h3>
                <p className="text-3xl font-bold text-buyer">0</p>
                <p className="text-sm text-muted-foreground">Active bids</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">Won Assets</h3>
                <p className="text-3xl font-bold text-buyer">0</p>
                <p className="text-sm text-muted-foreground">Purchased</p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
