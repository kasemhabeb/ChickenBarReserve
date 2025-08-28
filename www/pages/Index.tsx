import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Heart } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { DishCard } from '@/components/DishCard';
import { MobileMenu } from '@/components/MobileMenu';
import { CartView } from '@/components/CartView';
import { RestaurantMap } from '@/components/RestaurantMap';
import { ReservationForm } from '@/components/ReservationForm';
import { dishes, restaurantInfo } from '@/data/dishes';
import { useFavorites } from '@/hooks/useFavorites';

const Index = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showHero, setShowHero] = useState(true);
  const { favorites } = useFavorites();

  const categories = ['All', ...Array.from(new Set(dishes.map(dish => dish.category)))];

  const filteredDishes = useMemo(() => {
    return dishes.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dish.ingredients.some(ingredient => 
                             ingredient.toLowerCase().includes(searchQuery.toLowerCase())
                           );
      const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
      
      if (activeTab === 'favorites') {
        return matchesSearch && matchesCategory && favorites.includes(dish.id);
      }
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, activeTab, favorites]);

  const handleViewMenu = () => {
    setShowHero(false);
    setActiveTab('menu');
  };

  const handleGoToReservation = () => {
    setActiveTab('reservation');
  };

  if (showHero) {
    return <Hero onViewMenu={handleViewMenu} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'cart':
        return <CartView onGoToReservation={handleGoToReservation} />;
      case 'location':
        return <RestaurantMap />;
      case 'reservation':
        return <ReservationForm />;
      case 'menu':
      case 'favorites':
      default:
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-foreground">
                {restaurantInfo.name}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {restaurantInfo.description}
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search dishes, ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'golden' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">
                  {activeTab === 'favorites' ? 'Your Favorites' : 'Our Menu'}
                </h2>
                {activeTab === 'favorites' && (
                  <Heart size={20} className="text-destructive" />
                )}
              </div>
              <Badge variant="secondary">
                {filteredDishes.length} {filteredDishes.length === 1 ? 'dish' : 'dishes'}
              </Badge>
            </div>

            {/* Dishes Grid */}
            {filteredDishes.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍗</div>
                <h3 className="text-lg font-medium mb-2">
                  {activeTab === 'favorites' ? 'No favorites yet' : 'No dishes found'}
                </h3>
                <p className="text-muted-foreground">
                  {activeTab === 'favorites' 
                    ? 'Start adding some delicious dishes to your favorites!'
                    : 'Try adjusting your search or filters.'
                  }
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDishes.map(dish => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 pb-24">
        {renderContent()}
      </div>

      {/* Mobile Menu */}
      <MobileMenu activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;