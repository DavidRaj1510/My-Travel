"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const allDestinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1287&auto=format&fit=crop",
    description: "Iconic white-washed buildings with breathtaking views of the Aegean Sea.",
    price: "$1,299",
    rating: 4.9
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop",
    description: "Tropical paradise with lush landscapes, stunning beaches, and rich culture.",
    price: "$1,099",
    rating: 4.8
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient temples, traditional gardens, and cultural experiences.",
    price: "$1,499",
    rating: 4.9
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    price: "$1,899",
    rating: 4.9
  },
  {
    id: 5,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1287&auto=format&fit=crop",
    description: "Iconic white-washed buildings with breathtaking views of the Aegean Sea.",
    price: "$1,299",
    rating: 4.9
  },
  {
    id: 6,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop",
    description: "Tropical paradise with lush landscapes, stunning beaches, and rich culture.",
    price: "$1,099",
    rating: 4.8
  },
  {
    id: 7,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient temples, traditional gardens, and cultural experiences.",
    price: "$1,499",
    rating: 4.9
  },
  {
    id: 8,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    price: "$1,899",
    rating: 4.9
  },{
    id: 9,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1287&auto=format&fit=crop",
    description: "Iconic white-washed buildings with breathtaking views of the Aegean Sea.",
    price: "$1,299",
    rating: 4.9
  },
  {
    id: 10,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop",
    description: "Tropical paradise with lush landscapes, stunning beaches, and rich culture.",
    price: "$1,099",
    rating: 4.8
  },
  {
    id: 11,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient temples, traditional gardens, and cultural experiences.",
    price: "$1,499",
    rating: 4.9
  },
  {
    id: 12,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    price: "$1,899",
    rating: 4.9
  },{
    id: 13,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1287&auto=format&fit=crop",
    description: "Iconic white-washed buildings with breathtaking views of the Aegean Sea.",
    price: "$1,299",
    rating: 4.9
  },
  {
    id: 14,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop",
    description: "Tropical paradise with lush landscapes, stunning beaches, and rich culture.",
    price: "$1,099",
    rating: 4.8
  },
  {
    id: 15,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient temples, traditional gardens, and cultural experiences.",
    price: "$1,499",
    rating: 4.9
  },
  {
    id: 16,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1470&auto=format&fit=crop",
    description: "Ancient Incan citadel set high in the Andes Mountains.",
    price: "$1,899",
    rating: 4.9
  }
];
const Destinations = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleDestinations = showAll ? allDestinations : allDestinations.slice(0, 8);

  return (
    <div className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Discover our most sought-after destinations loved by travelers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden card-hover bg-white">
              <div className="relative h-60">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <p className="text-sm text-muted-foreground">{destination.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-bold text-primary">{destination.price}</span>
                  <span className="text-yellow-500 font-medium">⭐ {destination.rating}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button onClick={() => setShowAll(!showAll)} className="mx-auto">
            {showAll ? "Show Less" : "Show More"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Destinations;