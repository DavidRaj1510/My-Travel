
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import TourPackages from "@/components/TourPackages";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <Destinations />
      <TourPackages />
      <Experiences />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;
