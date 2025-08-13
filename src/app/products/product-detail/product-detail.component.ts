import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Product {
  id: string;
  name: string;
   category: string;
  image: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  productId: string | null = null;
  product: Product | undefined;

  products: Product[] = [
    {
  id: '10square',
  name: '10” Square Plates',
  category: 'Square Plates',
  image: 'assets/Products/Square/10square.png',
  description: `Crafted in India from naturally fallen Areca Palm leaves, our 10” Square Plates combine sustainability with strength. 
                Each plate is thoroughly cleaned and steam-pressed into shape — completely free from chemicals or additives. 
                Naturally compostable, they break down in under 2 months after disposal, just like any fallen leaf in nature. 
                Ideal for both everyday use and special occasions, they’re as kind to the planet as they are to your table.`,
  features: [
    'Size: 10” X 10”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Strong and durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},

{
  id: '10squaredeep',
  name: '10” Deep Square Plates',
  category: 'Square Plates',
  image: 'assets/Products/Square/deep_square.png',
  description: `Sustainably made in India from naturally fallen Areca Palm leaves, our 10” Deep Square Plates are cleaned, steam-pressed, and entirely chemical-free. Compostable in under 2 months, they’re perfect for hot or cold dishes — a durable, eco-friendly choice for any occasion.`,
  features: [
    'Size: 10” X 10”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Extremely durable — single use only',
    'Suitable for hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '9square',
  name: '9” Square Plates',
  category: 'Square Plates',
  image: 'assets/Products/Square/9square.png',
  description: `Eco-friendly and durable, our 9” Square Plates are crafted in India from naturally fallen Areca Palm leaves. Cleaned, steam-pressed, and free from chemicals, they compost in under 2 months — perfect for serving hot or cold dishes at any event.`,
  features: [
    'Size: 9” X 9”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Strong and durable — single use only',
    'Suitable for hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '8square',
  name: '8” Square Plates',
  category: 'Square Plates',
  image: 'assets/Products/Square/8square.png',
  description: `Crafted from naturally fallen Areca Palm leaves, our 8” Square Plates offer a sustainable alternative to disposable tableware. Chemical-free, compostable in under 2 months, and perfect for serving both hot and cold dishes.`,
  features: [
    'Size: 8” X 8”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Strong and durable — single use only',
    'Suitable for hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '7square',
  name: '7” Square Plates',
  category: 'Square Plates',
  image: 'assets/Products/Square/7square.png',
  description: `Lightweight yet sturdy, our 7” Square Plates are crafted in India from naturally fallen Areca Palm leaves. Free from chemicals and additives, they compost naturally in under 2 months — perfect for serving snacks, desserts, or light meals.`,
  features: [
    'Size: 7” X 7”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '6square',
  name: '6” Square Plates',
  category: 'Square Plates',
  image: 'assets/Products/Square/6square.png',
  description: `Compact and eco-friendly, our 6” Square Plates are made from naturally fallen Areca Palm leaves. Chemical-free and compostable in under 2 months, they’re ideal for appetizers, desserts, and small servings.`,
  features: [
    'Size: 6” X 6”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '12round',
  name: '12” Round Plates',
  category: 'Round Plates',
  image: 'assets/Products/Rounds/12ROP.png',
  description: `Crafted in India from naturally fallen Areca Palm leaves, our 12” Round Plates combine natural beauty with durability. 
                Each plate is meticulously cleaned and steam-pressed into shape — entirely free from chemicals or additives. 
                Compostable in under 2 months, these plates are perfect for large meals, parties, or catering events.`,
  features: [
    'Size: 12” Diameter',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Strong and durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10round',
  name: '10” Round Plates',
  category: 'Round Plates',
  image: 'assets/Products/Rounds/10ROP.jpg',
  description: `Made from naturally fallen Areca Palm leaves in India, our 10” Round Plates are a sustainable choice for everyday dining or special occasions. 
                Free from chemicals and additives, these plates are sturdy, stylish, and compostable in under 2 months.`,
  features: [
    'Size: 10” Diameter',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Strong and durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '9round',
  name: '9” Round Plates',
  category: 'Round Plates',
  image: 'assets/Products/Rounds/9ROP.jpg',
  description: `Eco-friendly and versatile, our 9” Round Plates are crafted in India from naturally fallen Areca Palm leaves. 
                These plates are cleaned, steam-pressed, and chemical-free — perfect for serving lunch, snacks, or desserts.`,
  features: [
    'Size: 9” Diameter',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Strong and durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '8round',
  name: '8” Round Plates',
  category: 'Round Plates',
  image: 'assets/Products/Rounds/8ROP.jpg',
  description: `Sustainably made in India from naturally fallen Areca Palm leaves, our 8” Round Plates are ideal for serving appetizers, side dishes, or desserts. 
                These plates are durable, lightweight, and compostable within 2 months.`,
  features: [
    'Size: 8” Diameter',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '7round',
  name: '7” Round Plates',
  category: 'Round Plates',
  image: 'assets/Products/Rounds/7ROP.jpg',
  description: `Crafted from naturally fallen Areca Palm leaves, our 7” Round Plates offer a sustainable and attractive serving option for snacks and desserts. 
                Completely chemical-free, these plates naturally decompose in less than 2 months.`,
  features: [
    'Size: 7” Diameter',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '6round',
  name: '6” Round Plates',
  category: 'Round Plates',
  image: 'assets/Products/Rounds/6ROP.jpg',
  description: `Compact yet sturdy, our 6” Round Plates are made in India from naturally fallen Areca Palm leaves. 
                Perfect for bite-sized treats, snacks, or small servings, these plates are compostable in under 2 months.`,
  features: [
    'Size: 6” Diameter',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-7x5',
  name: '7” x 5” Rectangle Plate',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle1.png',
  description: `Compact and eco-friendly, our 7” x 5” Rectangle Plates are crafted in India from naturally fallen Areca Palm leaves.
                Perfect for appetizers, snacks, or small servings, these plates are compostable in under 2 months.`,
  features: [
    'Size: 7” x 5”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-8x5',
  name: '8” x 5” Rectangle Plate',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle2.png',
  description: `Stylish and sustainable, our 8” x 5” Rectangle Plates are made in India from naturally fallen Areca Palm leaves.
                Ideal for finger foods, desserts, or light meals, they break down naturally within 2 months.`,
  features: [
    'Size: 8” x 5”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-9.5x6',
  name: '9.5” x 6” Rectangle Plate',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle3.png',
  description: `Our 9.5” x 6” Rectangle Plates offer more room while staying eco-friendly.
                Made in India from naturally fallen Areca Palm leaves, they’re perfect for light lunches or serving sides.`,
  features: [
    'Size: 9.5” x 6”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-12x4',
  name: '12” x 4” Rectangle Plate',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle4.png',
  description: `Elegant and elongated, our 12” x 4” Rectangle Plates are great for sushi, breadsticks, or tasting platters.
                Made in India from naturally fallen Areca Palm leaves, they are fully compostable within 2 months.`,
  features: [
    'Size: 12” x 4”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-12x7',
  name: '12” x 7” Rectangle Plate',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle5.png',
  description: `Spacious and eco-friendly, our 12” x 7” Rectangle Plates are crafted from naturally fallen Areca Palm leaves in India.
                Ideal for serving main courses or sharing platters, they decompose naturally in under 2 months.`,
  features: [
    'Size: 12” x 7”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-14x8',
  name: '14” x 8” Rectangle Plate',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle6.png',
  description: `Our 14” x 8” Rectangle Classic Plates provide a generous serving area while keeping your event eco-friendly.
                Made in India from naturally fallen Areca Palm leaves, they are sturdy and compost completely in under 2 months.`,
  features: [
    'Size: 14” x 8”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-12x10',
  name: '12” x 10” Rectangle Tray',
  category: 'Rectangle Plates',
  image: 'assets/Products/Rectangles/rectangle7.png',
  description: `The 12” x 10” Rectangle Tray is perfect for serving larger meals, platters, or shared appetizers.
                Crafted in India from naturally fallen Areca Palm leaves, this sturdy tray is fully compostable within 2 months.`,
  features: [
    'Size: 12” x 10”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-14x10',
  name: '14” x 10” Rectangle Tray',
  category: 'Rectangle  Plates',
  image: 'assets/Products/Rectangles/rectangle8.png',
  description: `Large and durable, our 14” x 10” Rectangle Trays are perfect for buffet service or big family meals.
                Made in India from naturally fallen Areca Palm leaves, they are compostable in less than 2 months.`,
  features: [
    'Size: 14” x 10”',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: 'rectangle-14x10-oval',
  name: '14” x 10” Rectangle Oval Tray',
  category: 'Rectangle  Plates',
  image: 'assets/Products/Rectangles/rectangle9.png',
  description: `Combining elegance and eco-consciousness, our 14” x 10” Rectangle Oval Trays are crafted in India from naturally fallen Areca Palm leaves.
                Perfect for centerpieces, large dishes, or shared servings, they decompose completely in under 2 months.`,
  features: [
    'Size: 14” x 10” Oval',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},

 {
    id: '4x4-bowl',
    name: '4” Square Bowl',
    category: 'Bowls',
    image: 'assets/Products/Bowls/bowl1.png',
    description: `Compact and practical, our 4” Square Bowls are crafted in India from naturally fallen Areca Palm leaves.
                  Perfect for dips, condiments, or small servings, these bowls decompose naturally in under 2 months.`,
    features: [
      'Size: 4” Square',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '6x6-bowl',
    name: '6” Square Bowl',
    category: 'Bowls',
    image: 'assets/Products/Bowls/bowl2.png',
    description: `Our 6” Square Bowls combine elegance with sustainability, made in India from naturally fallen Areca Palm leaves.
                  Ideal for salads, snacks, or desserts, they are sturdy, lightweight, and compost within 2 months.`,
    features: [
      'Size: 6” Square',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '4-round-bowl',
    name: '4” Round Bowl',
    category: 'Bowls',
    image: 'assets/Products/Bowls/bowl3.png',
    description: `Perfect for sauces, chutneys, or bite-sized portions, our 4” Round Bowls are made in India from naturally fallen Areca Palm leaves.
                  Fully compostable in under 2 months, they’re a great eco-friendly alternative to plastic.`,
    features: [
      'Size: 4” Diameter',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '5-round-bowl',
    name: '5” Round Bowl',
    category: 'Bowls',
    image: 'assets/Products/Bowls/bowl4.png',
    description: `Our 5” Round Bowls offer just the right size for soups, snacks, or desserts.
                  Crafted in India from naturally fallen Areca Palm leaves, they’re strong, lightweight, and compostable within 2 months.`,
    features: [
      'Size: 5” Diameter',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '6-round-bowl',
    name: '6” Round Bowl',
    category: 'Bowls',
    image: 'assets/Products/Bowls/bowl5.png',
    description: `Versatile and eco-friendly, our 6” Round Bowls are perfect for salads, curries, or rice servings.
                  Made in India from naturally fallen Areca Palm leaves, they are fully compostable within 2 months.`,
    features: [
      'Size: 6” Diameter',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '8-round-bowl',
    name: '8” Round Bowl',
    category: 'Bowls',
    image: 'assets/Products/Bowls/bowl6.png',
    description: `Our 8” Round Bowls provide ample space for generous servings of salads, pasta, or shared dishes.
                  Crafted in India from naturally fallen Areca Palm leaves, they’re sturdy, stylish, and compostable in under 2 months.`,
    features: [
      'Size: 8” Diameter',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },

    {
    id: '10-round-scalloped',
    name: '10” Round Scalloped',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img1.png',
    description: `Our 10” Round Scalloped Plates bring a decorative touch to your table while remaining eco-friendly. 
                  Crafted in India from naturally fallen Areca Palm leaves, these plates combine elegance with durability 
                  and fully compost within 2 months.`,
    features: [
      'Size: 10” Diameter - Scalloped Edge',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '7-round-scalloped',
    name: '7” Round Scalloped',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img2.png',
    description: `Perfect for desserts, snacks, or appetizers, our 7” Round Scalloped Plates offer style and sustainability. 
                  Made in India from naturally fallen Areca Palm leaves, they are sturdy, safe, and compostable in under 2 months.`,
    features: [
      'Size: 7” Diameter - Scalloped Edge',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '6-round-scalloped',
    name: '6” Round Scalloped',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img3.png',
    description: `Our 6” Round Scalloped Plates are perfect for side dishes or small servings. 
                  Eco-friendly, elegant, and completely biodegradable within 2 months, they are made from naturally fallen Areca Palm leaves.`,
    features: [
      'Size: 6” Diameter - Scalloped Edge',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '6-Tear-Drop',
    name: '6” Tear Drop',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img4.png',
    description: `Our 6” Tear Drop Plates feature a unique shape ideal for appetizers, finger foods, or desserts. 
                  Made in India from naturally fallen Areca Palm leaves, they are 100% compostable within 2 months.`,
    features: [
      'Size: 6” Tear Drop Shape',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '10-Tear-Drop',
    name: '10” Tear Drop',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img5.png',
    description: `Designed for creative food presentations, our 10” Tear Drop Plates are stylish and eco-conscious. 
                  They are made from naturally fallen Areca Palm leaves in India and fully compost within 2 months.`,
    features: [
      'Size: 10” Tear Drop Shape',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '6.5-heart',
    name: '6.5” Heart',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img6.png',
    description: `Our 6.5” Heart Bowls add a charming touch to any event, perfect for serving snacks, desserts, or romantic meals. 
                  Crafted from naturally fallen Areca Palm leaves, they decompose completely within 2 months.`,
    features: [
      'Size: 6.5” Heart Shape',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '8x3-boat',
    name: '8” x 3” Boat',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img7.png',
    description: `Our 8” x 3” Boat Plates are ideal for serving elongated dishes like kebabs or appetizers. 
                  Eco-friendly and stylish, they are made in India from naturally fallen Areca Palm leaves and compost fully within 2 months.`,
    features: [
      'Size: 8” x 3” Boat Shape',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '9x5-fish',
    name: '9” x 5” Fish',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img8.png',
    description: `Our 9” x 5” Fish Plates bring fun and creativity to your table settings. 
                  Made from naturally fallen Areca Palm leaves in India, they’re sturdy, unique, and fully compostable in under 2 months.`,
    features: [
      'Size: 9” x 5” Fish Shape',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '4-oval',
    name: '4” Oval',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img9.png',
    description: `Our 4” Oval Plates are perfect for small servings, sauces, or dips. 
                  Crafted in India from naturally fallen Areca Palm leaves, they decompose entirely within 2 months.`,
    features: [
      'Size: 4” Oval Shape',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
   {
    id: '10-square',
    name: '10" Square 25C',
    category: 'Combo Packs',
    image: 'assets/Products/Combo/img1.png',
    description: `Our 10” Square Combo Pack includes sturdy Areca Palm Leaf Plates, Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 25. 
                  Crafted in India from naturally fallen Areca Palm leaves, they are perfect for large gatherings, catering, or events, and compost completely in under 2 months.`,
    features: [
      'Includes: 10” Square Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (25 pieces each)',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '10&7-square',
    name: '10" & 7" Square 15C',
    category: 'Combo Packs',
    image: 'assets/Products/Combo/img2.png',
    description: `This 10” & 7” Square Combo Pack offers versatility for meals of all sizes, with Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 15. 
                  Eco-friendly and durable, these Areca Palm Leaf Plates are crafted from naturally fallen leaves in India.`,
    features: [
      'Includes: 10” and 7” Square Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (15 pieces each)',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '10-square-combo',
    name: '10" Square 15C',
    category: 'Combo Packs',
    image: 'assets/Products/Combo/img3.png',
    description: `A compact 10” Square Combo Pack with Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 15. 
                  Perfect for small parties or picnics, these plates are made in India from naturally fallen Areca Palm leaves.`,
    features: [
      'Includes: 10” Square Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (15 pieces each)',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '10-square-plate',
    name: '10" Square Plate 25C',
    category: 'Combo Packs',
    image: 'assets/Products/Combo/img4.png',
    description: `This 10” Square Plate Combo Set comes with Forks, Spoons, Knives, and Paper Napkins — each in a set of 25. 
                  Strong, stylish, and sustainable, they’re perfect for weddings, events, and catering services.`,
    features: [
      'Includes: 10” Square Plates, Forks, Spoons, Knives, and Paper Napkins (25 pieces each)',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '10&7-square-combo',
    name: '10" & 7" Square Plate 15C',
    category: 'Combo Packs',
    image: 'assets/Products/Combo/img5.png',
    description: `A practical 10” & 7” Square Plate Combo Set, including Forks, Spoons, Knives, and Paper Napkins — each in a set of 15. 
                  Ideal for versatile dining setups, these plates are crafted from eco-friendly Areca Palm leaves.`,
    features: [
      'Includes: 10” and 7” Square Plates, Forks, Spoons, Knives, and Paper Napkins (15 pieces each)',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },
  {
    id: '10-square-plate-combo',
    name: '10" Square Plate 15C',
    category: 'Combo Packs',
    image: 'assets/Products/Combo/img6.png',
    description: `A 10” Square Plate Combo Set with Forks, Spoons, Knives, and Paper Napkins — each in a set of 15. 
                  Perfect for casual events, picnics, or family gatherings.`,
    features: [
      'Includes: 10” Square Plates, Forks, Spoons, Knives, and Paper Napkins (15 pieces each)',
      'Customizable packaging options',
      'Fully biodegradable and compostable',
      'Durable — single use only',
      'Suitable for both hot and cold foods',
      'Microwave and low-heat oven safe'
    ]
  },

  // Continuing Combo Pack Products list...

{
  id: '10-round',
  name: '10" Round 25C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img7.png',
  description: `The 10” Round Combo Pack includes Areca Palm Leaf Plates, Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 25.
                Perfect for big events or catering services, crafted from naturally fallen palm leaves.`,
  features: [
    'Includes: 10” Round Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (25 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10&7-round',
  name: '10" & 7" Round 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img8.png',
  description: `This versatile 10” & 7” Round Combo Pack offers Plates, Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 15.
                Designed for eco-conscious gatherings, biodegradable and sturdy.`,
  features: [
    'Includes: 10” and 7” Round Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-round-combo',
  name: '10" Round 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img9.png',
  description: `Compact 10” Round Combo Set including Plates, Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 15.
                Ideal for home parties and picnics.`,
  features: [
    'Includes: 10” Round Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-round-plate',
  name: '10" Round Plate 25C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img10.png',
  description: `10” Round Plate Set with Forks, Spoons, Knives, and Paper Napkins — each in a set of 25.
                Strong, elegant, and sustainable.`,
  features: [
    'Includes: 10” Round Plates, Forks, Spoons, Knives, and Paper Napkins (25 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10&7-Round-combo',
  name: '10" & 7" Round 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img11.png',
  description: `A balanced mix of 10” & 7” Round Plates with Forks, Spoons, Knives, and Paper Napkins — each in a set of 15.`,
  features: [
    'Includes: 10” and 7” Round Plates, Forks, Spoons, Knives, and Paper Napkins (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-Round-plate-combo',
  name: '10" Round Plate 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img12.png',
  description: `10” Round Plate Combo Set with Forks, Spoons, Knives, and Paper Napkins — each in a set of 15.`,
  features: [
    'Includes: 10” Round Plates, Forks, Spoons, Knives, and Paper Napkins (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-Round-scalloped',
  name: '10" Round Scalloped Plate 25C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img13.png',
  description: `Stylish 10” Round Scalloped Plates with Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 25.`,
  features: [
    'Includes: 10” Round Scalloped Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (25 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10&7-Round-scalloped',
  name: '10" & 7" Round Scalloped Plate 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img14.png',
  description: `10” & 7” Round Scalloped Plates with Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 15.`,
  features: [
    'Includes: 10” and 7” Round Scalloped Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-Round-scalloped-combo',
  name: '10" Round Scalloped Set 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img15.png',
  description: `Elegant 10” Round Scalloped Plates with Forks, Spoons, Knives, Paper Napkins, and Cups — each in a set of 15.`,
  features: [
    'Includes: 10” Round Scalloped Plates, Forks, Spoons, Knives, Paper Napkins, and Cups (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-Round-scalloped-combo-set',
  name: '10" Round Scalloped Set 25C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img16.png',
  description: `Premium 10” Round Scalloped Plate Combo with Forks, Spoons, Knives, and Paper Napkins — each in a set of 25.`,
  features: [
    'Includes: 10” Round Scalloped Plates, Forks, Spoons, Knives, and Paper Napkins (25 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10&7-Round-scalloped-combo',
  name: '10" & 7" Round Scalloped 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img17.png',
  description: `10” & 7” Round Scalloped Plates with Forks, Spoons, Knives, and Paper Napkins — each in a set of 15.`,
  features: [
    'Includes: 10” and 7” Round Scalloped Plates, Forks, Spoons, Knives, and Paper Napkins (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '10-Round-scalloped-combo-set-15',
  name: '10" Round Scalloped Set 15C',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img18.png',
  description: `Stylish 10” Round Scalloped Plates with Forks, Spoons, Knives, and Paper Napkins — each in a set of 15.`,
  features: [
    'Includes: 10” Round Scalloped Plates, Forks, Spoons, Knives, and Paper Napkins (15 pieces each)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '6.5-heart-combo-24',
  name: '6.5" Heart Bowl 24Pcs',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img19.png',
  description: `6.5” Heart-shaped Areca Palm Bowls — pack of 24.
                Eco-friendly, sturdy, and perfect for desserts or snacks.`,
  features: [
    'Size: 6.5” Heart Shape Bowl (24 pieces)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '6-round',
  name: '6" Round Plate 24Pcs',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img20.png',
  description: `6” Round Areca Palm Leaf Plates — pack of 24.
                Perfect for snacks, starters, or desserts.`,
  features: [
    'Size: 6” Round Plate (24 pieces)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
},
{
  id: '6-square',
  name: '6" Square Bowl 24Pcs',
  category: 'Combo Packs',
  image: 'assets/Products/Combo/img21.png',
  description: `6” Square Areca Palm Leaf Bowls — pack of 24.
                Strong, natural, and eco-friendly.`,
  features: [
    'Size: 6” Square Bowl (24 pieces)',
    'Customizable packaging options',
    'Fully biodegradable and compostable',
    'Durable — single use only',
    'Suitable for both hot and cold foods',
    'Microwave and low-heat oven safe'
  ]
}


   // You can add all other products here in same format
  ];

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.products.find(p => p.id === this.productId);
  }
  
}
