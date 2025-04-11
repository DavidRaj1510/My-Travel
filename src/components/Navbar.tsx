import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import SignInDialog from "./SignInDialog";
import UserProfileButton from "./UserProfileButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-medium" : "text-foreground hover:text-primary";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">RajTravels</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/destinations" className={`${isActive('/destinations')} transition-colors`}>Destinations</Link>
          <Link to="/tours" className={`${isActive('/tours')} transition-colors`}>Tours</Link>
          <Link to="/experiences" className={`${isActive('/experiences')} transition-colors`}>Experiences</Link>
          <Link to="/about" className={`${isActive('/about')} transition-colors`}>About Us</Link>
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search className="w-5 h-5" />
          </Button>
          
          {isAuthenticated ? (
            <UserProfileButton />
          ) : (
            <SignInDialog />
          )}
        </div>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <Link to="/destinations" className={`${isActive('/destinations')} transition-colors`}>Destinations</Link>
          <Link to="/tours" className={`${isActive('/tours')} transition-colors`}>Tours</Link>
          <Link to="/experiences" className={`${isActive('/experiences')} transition-colors`}>Experiences</Link>
          {/* <Link to="/about" className={`${isActive('/about')} transition-colors`}>About Us</Link> */}
          
          {isAuthenticated ? (
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">My Account</span>
              <UserProfileButton />
            </div>
          ) : (
            <SignInDialog trigger={
              <Button className="bg-primary text-white hover:bg-primary/90 w-full">
                Sign In
              </Button>
            } />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
