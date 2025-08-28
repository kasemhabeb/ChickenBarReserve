import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('chicken-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (dishId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(dishId)
        ? prev.filter(id => id !== dishId)
        : [...prev, dishId];
      
      localStorage.setItem('chicken-favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return { favorites, toggleFavorite };
};