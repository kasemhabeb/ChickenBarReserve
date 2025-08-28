import { useState } from "react";
import { Heart, Clock, Flame, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dish } from "@/data/dishes";
import { useFavorites } from "@/hooks/useFavorites";
import { useCart } from "@/hooks/useCart";

interface DishCardProps {
  dish: Dish;
}

export const DishCard = ({ dish }: DishCardProps) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const isFavorite = favorites.includes(dish.id);
  const spiceIcons = Array(5).fill(0).map((_, i) => (
    <Flame 
      key={i} 
      size={12} 
      className={i < dish.spiceLevel ? "text-spice" : "text-muted"} 
    />
  ));

  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={dish.image}
            alt={dish.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isImageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            } hover:scale-105`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300 ${
            isFavorite ? 'text-destructive' : 'text-muted-foreground'
          }`}
          onClick={() => toggleFavorite(dish.id)}
        >
          <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
        </Button>

        <Badge className="absolute top-2 left-2 bg-background/90 text-foreground backdrop-blur-sm">
          {dish.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-foreground line-clamp-1">
            {dish.name}
          </h3>
          <span className="text-xl font-bold text-primary">
            €{dish.price.toFixed(2)}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {dish.description}
        </p>

        <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{dish.preparationTime}min</span>
          </div>
          
          {dish.spiceLevel > 0 && (
            <div className="flex items-center gap-1">
              {spiceIcons}
            </div>
          )}
        </div>

        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-1">Ingredients:</p>
          <p className="text-xs text-foreground line-clamp-2">
            {dish.ingredients.join(", ")}
          </p>
        </div>

        <Button
          variant="cart"
          className="w-full"
          onClick={() => addToCart(dish)}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};