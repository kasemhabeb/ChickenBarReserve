import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone } from 'lucide-react';
import { restaurantInfo } from '@/data/dishes';

export const RestaurantMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [showApiInput, setShowApiInput] = useState(true);

  const initializeMap = async (googleApiKey: string) => {
    if (!mapRef.current) return;

    try {
      const loader = new Loader({
        apiKey: googleApiKey,
        version: 'weekly',
        libraries: ['places']
      });

      await loader.load();
      
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: restaurantInfo.coordinates,
        zoom: 15,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#fef7ed' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          }
        ]
      });

      new google.maps.Marker({
        position: restaurantInfo.coordinates,
        map: mapInstance,
        title: restaurantInfo.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#f59e0b',
          fillOpacity: 1,
          strokeColor: '#d97706',
          strokeWeight: 2
        }
      });

      setMap(mapInstance);
      setShowApiInput(false);
    } catch (error) {
      console.error('Error loading map:', error);
      alert('Error loading map. Please check your API key.');
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      initializeMap(apiKey.trim());
    }
  };

  if (showApiInput) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="text-primary" />
              Restaurant Location
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApiKeySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Enter Google Maps API Key to view location:
                </label>
                <input
                  type="text"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Your Google Maps API Key"
                  className="w-full p-2 border border-border rounded-md bg-background"
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Get your API key from <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Cloud Console</a>
                </p>
              </div>
              <Button type="submit" variant="golden">
                Load Map
              </Button>
            </form>
            
            <div className="mt-6 space-y-3">
              <h3 className="font-semibold">Restaurant Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span>{restaurantInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-muted-foreground" />
                  <span>{restaurantInfo.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-muted-foreground" />
                  <span>{restaurantInfo.phone}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="text-primary" />
            Our Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={mapRef} 
            className="w-full h-64 rounded-lg border border-border"
          />
          
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-muted-foreground" />
              <span>{restaurantInfo.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-muted-foreground" />
              <span>{restaurantInfo.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-muted-foreground" />
              <span>{restaurantInfo.phone}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};