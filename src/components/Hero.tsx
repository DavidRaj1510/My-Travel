import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter a destination to search for",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would search the database
    // For now, we'll just navigate to the destinations page
    toast({
        title: "Searching...",
        description: `Finding results for "${searchTerm}"`,
    });
    
    setTimeout(() => {
      navigate("/destinations");
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop')" }}>
      <div className="hero-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center py-32">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 text-shadow animate-fade-in">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 text-shadow animate-fade-in">
          Explore breathtaking destinations around the world with our carefully curated tours and authentic experiences.
        </p>
        
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white p-3 rounded-full flex items-center shadow-lg animate-fade-in">
          <div className="flex-grow flex items-center pl-4">
            <Search className="w-5 h-5 text-muted-foreground mr-2" />
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="w-full bg-transparent border-none outline-none text-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-full px-6">
            Explore Now
          </Button>
        </form>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-white">
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
            <div className="text-3xl font-bold">100+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-white/80">Tours</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-white/80">Customers</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
            <div className="text-3xl font-bold">4.9</div>
            <div className="text-white/80">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
