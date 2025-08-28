import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";
import { restaurantInfo } from "@/data/dishes";
import heroImage from "@/assets/hero-chicken.jpg";

interface HeroProps {
  onViewMenu: () => void;
}

export const Hero = ({ onViewMenu }: HeroProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Golden Coop Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex items-center justify-center mb-6">
          <ChefHat size={48} className="text-golden mr-4" />
          <h1 className="text-4xl md:text-6xl font-bold">
            {restaurantInfo.name}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-cream opacity-90 max-w-2xl mx-auto">
          {restaurantInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={onViewMenu}
            className="text-lg px-8"
          >
            View Our Menu
          </Button>
          
          <div className="text-cream/80 text-sm">
            <p>{restaurantInfo.hours}</p>
            <p>{restaurantInfo.phone}</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};