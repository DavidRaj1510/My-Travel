
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="py-20 px-4 bg-primary/10 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            Get Inspired for Your Next Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Subscribe to our newsletter for exclusive travel tips, destination inspiration, and special offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-8 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow py-6 px-4 border-muted"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <Button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
              {!isSubmitting && <SendHorizontal className="w-4 h-4 ml-2" />}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground/80 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive travel-related emails.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
