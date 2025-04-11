import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6">Destiny</h3>
          <p className="text-white/80 mb-6">
            Discover amazing destinations and authentic travel experiences around the world. Let us help you create unforgettable memories.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Explore</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Destinations</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Tour Packages</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Travel Experiences</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Special Offers</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Travel Guides</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Travel Blog</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-white/80 hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
              <span className="text-white/80">123 Travel Street, Adventure City, World 10001</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span className="text-white/80">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span className="text-white/80">eedraj2003@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>© {new Date().getFullYear()} DavidRaj Travel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
