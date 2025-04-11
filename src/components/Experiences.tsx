import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const experiences = [
  {
    id: 1,
    title: "Cooking Class in Tuscany",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
    location: "Florence, Italy",
    duration: "3 hours",
    rating: 4.9,
    reviews: 128,
    price: "$89",
  },
  {
    id: 2,
    title: "Northern Lights Safari",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1470&auto=format&fit=crop",
    location: "Tromsø, Norway",
    duration: "4 hours",
    rating: 4.8,
    reviews: 95,
    price: "$129",
  },
  {
    id: 3,
    title: "Sunrise Hike to Mount Batur",
    image: "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=1476&auto=format&fit=crop",
    location: "Bali, Indonesia",
    duration: "7 hours",
    rating: 4.9,
    reviews: 214,
    price: "$65",
  },
  {
    id: 4,
    title: "Traditional Tea Ceremony",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1470&auto=format&fit=crop",
    location: "Kyoto, Japan",
    duration: "1.5 hours",
    rating: 4.7,
    reviews: 87,
    price: "$45",
  },
  {
    id: 5,
    title: "Cooking Class in Tuscany",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
    location: "Florence, Italy",
    duration: "3 hours",
    rating: 4.9,
    reviews: 128,
    price: "$89",
  },
  {
    id: 6,
    title: "Northern Lights Safari",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1470&auto=format&fit=crop",
    location: "Tromsø, Norway",
    duration: "4 hours",
    rating: 4.8,
    reviews: 95,
    price: "$129",
  },
  {
    id: 7,
    title: "Sunrise Hike to Mount Batur",
    image: "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=1476&auto=format&fit=crop",
    location: "Bali, Indonesia",
    duration: "7 hours",
    rating: 4.9,
    reviews: 214,
    price: "$65",
  },
  {
    id: 8,
    title: "Traditional Tea Ceremony",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1470&auto=format&fit=crop",
    location: "Kyoto, Japan",
    duration: "1.5 hours",
    rating: 4.7,
    reviews: 87,
    price: "$45",
  }, {
    id: 9,
    title: "Cooking Class in Tuscany",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1447&auto=format&fit=crop",
    location: "Florence, Italy",
    duration: "3 hours",
    rating: 4.9,
    reviews: 128,
    price: "$89",
  },
  {
    id: 10,
    title: "Northern Lights Safari",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1470&auto=format&fit=crop",
    location: "Tromsø, Norway",
    duration: "4 hours",
    rating: 4.8,
    reviews: 95,
    price: "$129",
  },
  {
    id: 11,
    title: "Sunrise Hike to Mount Batur",
    image: "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=1476&auto=format&fit=crop",
    location: "Bali, Indonesia",
    duration: "7 hours",
    rating: 4.9,
    reviews: 214,
    price: "$65",
  },
  {
    id: 12,
    title: "Traditional Tea Ceremony",
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?q=80&w=1470&auto=format&fit=crop",
    location: "Kyoto, Japan",
    duration: "1.5 hours",
    rating: 4.7,
    reviews: 87,
    price: "$45",
  }
];

const Experiences = () => {
  const [bookingId, setBookingId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const { toast } = useToast();

  const handleBookNow = (id: number) => {
    setBookingId(id);
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: `Your experience has been booked successfully. Check your email for details.`,
      });
      setBookingId(null);
    }, 1500);
  };

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 4);

  return (
    <div className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Unique Experiences</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Authentic activities led by local experts, creating unforgettable memories
            </p>
          </div>
          <Button
            variant="link"
            className="text-primary flex items-center mt-4 md:mt-0"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? (
              <>
                Show less <ArrowLeft className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                View all experiences <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleExperiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden card-hover">
              <div className="relative h-48">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">{experience.location}</span>
                  <span className="mx-2">•</span>
                  <span>{experience.duration}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{experience.title}</h3>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{experience.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">
                    ({experience.reviews} reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">From {experience.price}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/90 p-0"
                    onClick={() => handleBookNow(experience.id)}
                    disabled={bookingId === experience.id}
                  >
                    {bookingId === experience.id ? "Booking..." : "Book now"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
