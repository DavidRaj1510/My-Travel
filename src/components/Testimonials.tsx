
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop",
    content: "Our Santorini tour was absolutely magical! The views were breathtaking, and our guide knew all the hidden spots away from the crowds. This was truly the trip of a lifetime.",
    rating: 5,
    tour: "Santorini Explorer"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Vancouver, Canada",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
    content: "The Southeast Asia Adventure exceeded all my expectations. From the temples of Thailand to the beaches of Vietnam, every detail was perfectly arranged. I've already booked my next trip!",
    rating: 5,
    tour: "Southeast Asia Adventure"
  },
  {
    id: 3,
    name: "Emma Garcia",
    location: "Madrid, Spain",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
    content: "The cooking class in Tuscany was the highlight of our Italian vacation. We made pasta from scratch and enjoyed it with local wine while overlooking the countryside. Perfection!",
    rating: 5,
    tour: "Italian Culinary Journey"
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">
            Real experiences shared by our community of passionate travelers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 border border-muted shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 border-2 border-primary mr-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary mt-1">Tour: {testimonial.tour}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
