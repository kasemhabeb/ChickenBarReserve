import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';

interface CartViewProps {
  onGoToReservation: () => void;
}

export const CartView = ({ onGoToReservation }: CartViewProps) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <ShoppingBag size={64} className="mx-auto text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Add some delicious dishes to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Your Order</CardTitle>
          <Button variant="ghost" onClick={clearCart} className="text-destructive">
            <Trash2 size={16} />
            Clear All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg border">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-primary mt-1">
                  €{item.price.toFixed(2)} each
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus size={14} />
                </Button>
                
                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={14} />
                </Button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                  className="text-destructive h-auto p-1"
                >
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>
          ))}

          <div className="border-t pt-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span className="text-primary">€{totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <Button 
            variant="hero" 
            className="w-full" 
            size="lg"
            onClick={onGoToReservation}
          >
            Reserve Table & Order
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};