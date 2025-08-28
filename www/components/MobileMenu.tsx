import { Home, Heart, ShoppingCart, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";

interface MobileMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const MobileMenu = ({ activeTab, onTabChange }: MobileMenuProps) => {
  const { itemCount } = useCart();

  const menuItems = [
    { id: 'menu', icon: Home, label: 'Menu' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart', badge: itemCount },
    { id: 'location', icon: MapPin, label: 'Location' },
    { id: 'reservation', icon: Calendar, label: 'Reserve' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
      <div className="flex items-center justify-around py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center p-2 min-w-0 flex-1 relative transition-all duration-300 ${
                isActive 
                  ? 'text-primary scale-110' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="relative">
                <Icon size={20} className={isActive ? 'mb-1' : 'mb-1'} />
                {item.badge && item.badge > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 min-w-5 h-5 text-xs flex items-center justify-center p-0"
                  >
                    {item.badge > 99 ? '99+' : item.badge}
                  </Badge>
                )}
              </div>
              <span className={`text-xs truncate w-full text-center ${
                isActive ? 'font-medium' : ''
              }`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};