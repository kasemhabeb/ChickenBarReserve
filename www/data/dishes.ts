export interface Dish {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  image: string;
  category: string;
  spiceLevel: number; // 1-5
  preparationTime: number; // in minutes
}

export const dishes: Dish[] = [
  {
    id: "1",
    name: "Classic Buffalo Wings",
    description: "Crispy chicken wings tossed in our signature buffalo sauce",
    ingredients: ["Chicken wings", "Buffalo sauce", "Celery", "Blue cheese", "Carrots"],
    price: 12.50,
    image: "/src/assets/buffalo-wings.jpg",
    category: "Wings",
    spiceLevel: 3,
    preparationTime: 15
  },
  {
    id: "2",
    name: "Crispy Chicken Sandwich",
    description: "Buttermilk fried chicken breast with fresh lettuce and tomato",
    ingredients: ["Chicken breast", "Brioche bun", "Lettuce", "Tomato", "Mayo", "Pickles"],
    price: 14.90,
    image: "/src/assets/chicken-sandwich.jpg",
    category: "Sandwiches",
    spiceLevel: 1,
    preparationTime: 12
  },
  {
    id: "3",
    name: "Chicken Tikka Masala",
    description: "Tender chicken in creamy tomato-based curry sauce",
    ingredients: ["Chicken thigh", "Tikka masala sauce", "Basmati rice", "Naan bread", "Cilantro"],
    price: 18.50,
    image: "/src/assets/chicken-tikka.jpg",
    category: "Curry",
    spiceLevel: 2,
    preparationTime: 25
  },
  {
    id: "4",
    name: "Grilled Caesar Salad",
    description: "Grilled chicken breast over crisp romaine with parmesan",
    ingredients: ["Grilled chicken", "Romaine lettuce", "Parmesan", "Croutons", "Caesar dressing"],
    price: 13.90,
    image: "/src/assets/chicken-caesar.jpg",
    category: "Salads",
    spiceLevel: 0,
    preparationTime: 10
  },
  {
    id: "5",
    name: "Korean Fried Chicken",
    description: "Double-fried chicken with sweet and spicy gochujang glaze",
    ingredients: ["Chicken drumettes", "Gochujang", "Sesame oil", "Green onions", "Sesame seeds"],
    price: 16.90,
    image: "/src/assets/buffalo-wings.jpg",
    category: "International",
    spiceLevel: 4,
    preparationTime: 20
  },
  {
    id: "6",
    name: "Nashville Hot Chicken",
    description: "Fiery hot fried chicken with pickles on white bread",
    ingredients: ["Chicken breast", "Nashville hot seasoning", "White bread", "Pickles", "Coleslaw"],
    price: 15.50,
    image: "/src/assets/chicken-sandwich.jpg",
    category: "Spicy",
    spiceLevel: 5,
    preparationTime: 18
  },
  {
    id: "7",
    name: "Chicken Parmesan",
    description: "Breaded chicken cutlet with marinara and mozzarella",
    ingredients: ["Chicken cutlet", "Marinara sauce", "Mozzarella", "Parmesan", "Pasta"],
    price: 17.90,
    image: "/src/assets/chicken-tikka.jpg",
    category: "Italian",
    spiceLevel: 0,
    preparationTime: 22
  },
  {
    id: "8",
    name: "BBQ Chicken Pizza",
    description: "Wood-fired pizza with BBQ chicken and red onions",
    ingredients: ["Pizza dough", "BBQ chicken", "Red onions", "Mozzarella", "BBQ sauce", "Cilantro"],
    price: 19.90,
    image: "/src/assets/buffalo-wings.jpg",
    category: "Pizza",
    spiceLevel: 1,
    preparationTime: 15
  },
  {
    id: "9",
    name: "Chicken Teriyaki Bowl",
    description: "Grilled chicken with teriyaki glaze over steamed rice",
    ingredients: ["Chicken thigh", "Teriyaki sauce", "Steamed rice", "Broccoli", "Carrots"],
    price: 14.50,
    image: "/src/assets/chicken-caesar.jpg",
    category: "Bowls",
    spiceLevel: 0,
    preparationTime: 15
  },
  {
    id: "10",
    name: "Lemon Herb Roasted Chicken",
    description: "Half roasted chicken with lemon and fresh herbs",
    ingredients: ["Half chicken", "Lemon", "Rosemary", "Thyme", "Roasted potatoes"],
    price: 22.90,
    image: "/src/assets/chicken-tikka.jpg",
    category: "Roasted",
    spiceLevel: 0,
    preparationTime: 35
  },
  {
    id: "11",
    name: "Chicken Quesadilla",
    description: "Grilled tortilla filled with seasoned chicken and cheese",
    ingredients: ["Flour tortilla", "Grilled chicken", "Cheese blend", "Peppers", "Onions", "Salsa"],
    price: 11.90,
    image: "/src/assets/chicken-sandwich.jpg",
    category: "Mexican",
    spiceLevel: 2,
    preparationTime: 12
  },
  {
    id: "12",
    name: "Honey Garlic Wings",
    description: "Sticky wings glazed with honey and garlic sauce",
    ingredients: ["Chicken wings", "Honey", "Garlic", "Soy sauce", "Green onions"],
    price: 13.50,
    image: "/src/assets/buffalo-wings.jpg",
    category: "Wings",
    spiceLevel: 1,
    preparationTime: 18
  },
  {
    id: "13",
    name: "Chicken Fajitas",
    description: "Sizzling chicken strips with peppers and onions",
    ingredients: ["Chicken strips", "Bell peppers", "Onions", "Tortillas", "Guacamole", "Sour cream"],
    price: 16.50,
    image: "/src/assets/chicken-caesar.jpg",
    category: "Mexican",
    spiceLevel: 2,
    preparationTime: 15
  },
  {
    id: "14",
    name: "Chicken Pad Thai",
    description: "Traditional Thai stir-fried noodles with chicken",
    ingredients: ["Rice noodles", "Chicken", "Bean sprouts", "Peanuts", "Pad thai sauce", "Lime"],
    price: 15.90,
    image: "/src/assets/chicken-tikka.jpg",
    category: "Asian",
    spiceLevel: 2,
    preparationTime: 14
  },
  {
    id: "15",
    name: "Chicken Club Sandwich",
    description: "Triple-decker with chicken, bacon, lettuce and tomato",
    ingredients: ["Grilled chicken", "Bacon", "Lettuce", "Tomato", "Toast", "Mayo"],
    price: 13.90,
    image: "/src/assets/chicken-sandwich.jpg",
    category: "Sandwiches",
    spiceLevel: 0,
    preparationTime: 10
  },
  {
    id: "16",
    name: "General Tso's Chicken",
    description: "Crispy chicken in sweet and tangy sauce",
    ingredients: ["Battered chicken", "General tso sauce", "Broccoli", "Steamed rice", "Sesame seeds"],
    price: 16.90,
    image: "/src/assets/buffalo-wings.jpg",
    category: "Chinese",
    spiceLevel: 2,
    preparationTime: 20
  },
  {
    id: "17",
    name: "Chicken Shawarma Wrap",
    description: "Marinated chicken with tahini sauce in lavash bread",
    ingredients: ["Marinated chicken", "Lavash bread", "Tahini", "Cucumber", "Tomato", "Pickles"],
    price: 12.90,
    image: "/src/assets/chicken-caesar.jpg",
    category: "Middle Eastern",
    spiceLevel: 1,
    preparationTime: 12
  },
  {
    id: "18",
    name: "Chicken Alfredo Pasta",
    description: "Creamy alfredo pasta with grilled chicken breast",
    ingredients: ["Fettuccine", "Grilled chicken", "Alfredo sauce", "Parmesan", "Garlic bread"],
    price: 17.50,
    image: "/src/assets/chicken-tikka.jpg",
    category: "Italian",
    spiceLevel: 0,
    preparationTime: 18
  },
  {
    id: "19",
    name: "Jerk Chicken Platter",
    description: "Caribbean spiced grilled chicken with rice and beans",
    ingredients: ["Jerk chicken", "Rice and beans", "Plantains", "Coleslaw", "Scotch bonnet"],
    price: 18.90,
    image: "/src/assets/chicken-sandwich.jpg",
    category: "Caribbean",
    spiceLevel: 4,
    preparationTime: 25
  },
  {
    id: "20",
    name: "Chicken Pot Pie",
    description: "Comfort food classic with flaky pastry crust",
    ingredients: ["Chicken", "Mixed vegetables", "Chicken gravy", "Puff pastry", "Fresh herbs"],
    price: 16.50,
    image: "/src/assets/buffalo-wings.jpg",
    category: "Comfort Food",
    spiceLevel: 0,
    preparationTime: 30
  }
];

export const restaurantInfo = {
  name: "Golden Coop Restaurant",
  description: "Experience the finest chicken dishes from around the world. Our chefs use only the freshest ingredients and time-honored recipes to bring you unforgettable flavors.",
  address: "123 Culinary Street, Food District",
  phone: "+1 (555) 123-BIRD",
  hours: "Daily 11:00 AM - 10:00 PM",
  coordinates: { lat: 40.7589, lng: -73.9851 } // NYC coordinates for demo
};