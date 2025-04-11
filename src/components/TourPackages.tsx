import { Card } from "@/components/ui/card";
import { Clock, Users, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const allTourPackages = [
  {
    id: 1,
    title: "European Explorer",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1520&auto=format&fit=crop",
    duration: "12 days",
    groupSize: "Max 15",
    season: "Apr-Oct",
    countries: ["France", "Italy", "Switzerland"],
    description: "Experience the best of Europe with this carefully crafted tour through iconic cities and countryside."
  },
  {
    id: 2,
    title: "Southeast Asia Adventure",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop",
    duration: "14 days",
    groupSize: "Max 12",
    season: "Year-round",
    countries: ["Thailand", "Vietnam", "Cambodia"],
    description: "Immerse yourself in the vibrant cultures, ancient temples, and delicious cuisine of Southeast Asia."
  },
  {
    id: 3,
    title: "South American Journey",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "16 days",
    groupSize: "Max 10",
    season: "Sep-Apr",
    countries: ["Peru", "Brazil", "Argentina"],
    description: "Discover diverse landscapes from Machu Picchu to the Amazon rainforest and vibrant cities."
  },
  {
    id: 4,
    title: "Middle East Mystique",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "10 days",
    groupSize: "Max 8",
    season: "Oct-Mar",
    countries: ["UAE", "Jordan", "Israel"],
    description: "Explore desert landscapes, ancient wonders, and modern marvels of the Middle East."
  },
  {
    id: 5,
    title: "European Explorer",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1520&auto=format&fit=crop",
    duration: "12 days",
    groupSize: "Max 15",
    season: "Apr-Oct",
    countries: ["France", "Italy", "Switzerland"],
    description: "Experience the best of Europe with this carefully crafted tour through iconic cities and countryside."
  },
  {
    id: 6,
    title: "Southeast Asia Adventure",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop",
    duration: "14 days",
    groupSize: "Max 12",
    season: "Year-round",
    countries: ["Thailand", "Vietnam", "Cambodia"],
    description: "Immerse yourself in the vibrant cultures, ancient temples, and delicious cuisine of Southeast Asia."
  },
  {
    id: 7,
    title: "South American Journey",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "16 days",
    groupSize: "Max 10",
    season: "Sep-Apr",
    countries: ["Peru", "Brazil", "Argentina"],
    description: "Discover diverse landscapes from Machu Picchu to the Amazon rainforest and vibrant cities."
  },
  {
    id: 8,
    title: "Middle East Mystique",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "10 days",
    groupSize: "Max 8",
    season: "Oct-Mar",
    countries: ["UAE", "Jordan", "Israel"],
    description: "Explore desert landscapes, ancient wonders, and modern marvels of the Middle East."
  }, {
    id: 9,
    title: "European Explorer",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1520&auto=format&fit=crop",
    duration: "12 days",
    groupSize: "Max 15",
    season: "Apr-Oct",
    countries: ["France", "Italy", "Switzerland"],
    description: "Experience the best of Europe with this carefully crafted tour through iconic cities and countryside."
  },
  {
    id: 10,
    title: "Southeast Asia Adventure",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop",
    duration: "14 days",
    groupSize: "Max 12",
    season: "Year-round",
    countries: ["Thailand", "Vietnam", "Cambodia"],
    description: "Immerse yourself in the vibrant cultures, ancient temples, and delicious cuisine of Southeast Asia."
  },
  {
    id: 11,
    title: "South American Journey",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "16 days",
    groupSize: "Max 10",
    season: "Sep-Apr",
    countries: ["Peru", "Brazil", "Argentina"],
    description: "Discover diverse landscapes from Machu Picchu to the Amazon rainforest and vibrant cities."
  },
  {
    id: 12,
    title: "Middle East Mystique",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "10 days",
    groupSize: "Max 8",
    season: "Oct-Mar",
    countries: ["UAE", "Jordan", "Israel"],
    description: "Explore desert landscapes, ancient wonders, and modern marvels of the Middle East."
  }, {
    id: 13,
    title: "European Explorer",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1520&auto=format&fit=crop",
    duration: "12 days",
    groupSize: "Max 15",
    season: "Apr-Oct",
    countries: ["France", "Italy", "Switzerland"],
    description: "Experience the best of Europe with this carefully crafted tour through iconic cities and countryside."
  },
  {
    id: 14,
    title: "Southeast Asia Adventure",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1470&auto=format&fit=crop",
    duration: "14 days",
    groupSize: "Max 12",
    season: "Year-round",
    countries: ["Thailand", "Vietnam", "Cambodia"],
    description: "Immerse yourself in the vibrant cultures, ancient temples, and delicious cuisine of Southeast Asia."
  },
  {
    id: 15,
    title: "South American Journey",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "16 days",
    groupSize: "Max 10",
    season: "Sep-Apr",
    countries: ["Peru", "Brazil", "Argentina"],
    description: "Discover diverse landscapes from Machu Picchu to the Amazon rainforest and vibrant cities."
  },
  {
    id: 16,
    title: "Middle East Mystique",
    image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1426&auto=format&fit=crop",
    duration: "10 days",
    groupSize: "Max 8",
    season: "Oct-Mar",
    countries: ["UAE", "Jordan", "Israel"],
    description: "Explore desert landscapes, ancient wonders, and modern marvels of the Middle East."
  }
];

const TourPackages = () => {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const { toast } = useToast();

  const handleViewDetails = (id: number) => {
    setSelectedTour(id);
    setTimeout(() => {
      toast({
        title: "Tour Details",
        description: "We've sent the detailed itinerary to your email.",
      });
      setSelectedTour(null);
    }, 1500);
  };

  const handleToggleView = () => {
    setVisibleCount((prev) =>
      prev === 8 ? allTourPackages.length : 8
    );
  };

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Popular Tour Packages</h2>
          <p className="section-subtitle">
            All-inclusive group tours designed to maximize your travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allTourPackages.slice(0, visibleCount).map((tour) => (
            <Card key={tour.id} className="overflow-hidden card-hover">
              <div className="relative h-60">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{tour.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {tour.groupSize}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {tour.season}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {tour.countries.length} Countries
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{tour.description}</p>
                <Button
                  className="w-full btn-primary"
                  onClick={() => handleViewDetails(tour.id)}
                  disabled={selectedTour === tour.id}
                >
                  {selectedTour === tour.id ? "Loading Details..." : "View Tour Details"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={handleToggleView}
          >
            {visibleCount === 8 ? "View All Tour Packages" : "Show Less"} 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;

