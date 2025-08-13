import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface Product {
  id: string;
  name: string;
  category?: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit {

 products: Product[] = [
    {
      id: '10square',
      name: '10" Square',
      description: '10" Square Areca Palm Leaf Plate',
      image: 'assets/Products/Square/10square.png'
    },
    {
      id: '10squaredeep',
      name: '10" Deep Square',
      description: '10" Square Deep Areca Palm Leaf Plate',
      image: 'assets/Products/Square/deep_square.png'
    },
    {
      id: '9square',
      name: '9" Square',
      description: '9" Square Areca Palm Leaf Plate',
      image: 'assets/Products/Square/9square.png'
    },
    {
      id: '8square',
      name: '8" Square',
      description: '8" Square Areca Palm Leaf Plate',
      image: 'assets/Products/Square/8square.png'
    },
    {
      id: '7square',
      name: '7" Square',
      description: '7" Square Areca Palm Leaf Plate',
      image: 'assets/Products/Square/7square.png'
    },
    {
      id: '6square',
      name: '6" Square',
      description: '6" Square Areca Palm Leaf Plate',
      image: 'assets/Products/Square/6square.png'
    }
  ];
  roundProducts: Product[] = [
    {
      id: '12round',
      name: '12" Round',
      category: 'Round Plates',
      image: 'assets/Products/Rounds/12ROP.png',
      description: '12" Round Areca Palm Leaf Plate'
    },
    {
      id: '10round',
      name: '10" Round',
      category: 'Round Plates',
      image: 'assets/Products/Rounds/10ROP.jpg',
      description: '10" Round Areca Palm Leaf Plate'
    },
    {
      id: '9round',
      name: '9" Round',
      category: 'Round Plates',
      image: 'assets/Products/Rounds/9ROP.jpg',
      description: '9" Round Areca Palm Leaf Plate'
    },
    {
      id: '8round',
      name: '8" Round',
      category: 'Round Plates',
      image: 'assets/Products/Rounds/8ROP.jpg',
      description: '8" Round Areca Palm Leaf Plate'
    },
    {
      id: '7round',
      name: '7" Round',
      category: 'Round Plates',
      image: 'assets/Products/Rounds/7ROP.jpg',
      description: '7" Round Areca Palm Leaf Plate'
    },
    {
      id: '6round',
      name: '6" Round',
      category: 'Round Plates',
      image: 'assets/Products/Rounds/6ROP.jpg',
      description: '6" Round Areca Palm Leaf Plate'
    }
  ];
rectangleProducts = [
  {
    id: 'rectangle-7x5',
    name: '7" x 5" Rectangle',
    image: 'assets/Products/Rectangles/rectangle1.png',
    description: '7" x 5" Rectangle Areca Palm Leaf Plate'
  },
   {
    id: 'rectangle-8x5',
    name: '8" x 5" Rectangle',
    image: 'assets/Products/Rectangles/rectangle2.png',
    description: '8" x 5" Rectangle Areca Palm Leaf Plate'
  },
   {
    id: 'rectangle-9.5x6',
    name: '9.5" x 6" Rectangle',
    image: 'assets/Products/Rectangles/rectangle3.png',
    description: '9.5" x 6" Rectangle Areca Palm Leaf Plate'
  },
   {
    id: 'rectangle-12x4',
    name: '12" x 4" Rectangle',
    image: 'assets/Products/Rectangles/rectangle4.png',
    description: '12" x 4" Rectangle Areca Palm Leaf Plate'
  },
  {
    id: 'rectangle-12x7',
    name: '12" x 7" Rectangle',
    image: 'assets/Products/Rectangles/rectangle5.png',
    description: '12" x 7" Rectangle Areca Palm Leaf Plate'
  },
  {
    id: 'rectangle-14x8',
    name: '14" x 8" Rectangle',
    image: 'assets/Products/Rectangles/rectangle6.png',
    description: '14" x 8" Rectangle Classic Areca Palm Leaf Plate'
  },
  {
    id: 'rectangle-12x10',
    name: '12" x 10" Rectangle Tray',
    image: 'assets/Products/Rectangles/rectangle7.png',
    description: '12" x 10" Rectangle Tray Areca Palm Leaf Plate'
  },
  {
    id: 'rectangle-14x10',
    name: '14" x 10" Rectangle Tray',
    image: 'assets/Products/Rectangles/rectangle8.png',
    description: '14" x 10" Rectangle Tray Areca Palm Leaf Plate'
  },
  {
    id: 'rectangle-14x10-oval',
    name: '14" x 10" Rectangle Oval Tray',
    image: 'assets/Products/Rectangles/rectangle9.png',
    description: '14" x 10" Rectangle Oval Tray Areca Palm Leaf Plate'
  },

];

bowlProducts = [
  { id: '4x4-bowl', 
    name: '4" Square', 
    image: 'assets/Products/Bowls/bowl1.png',
     description: '4" Square Areca Palm Leaf Bowl'
     },
    { id: '6x6-bowl', 
    name: '6" Square', 
    image: 'assets/Products/Bowls/bowl2.png',
     description: '6" Square Areca Palm Leaf Bowl'
     },   
  { id: '4-round-bowl', name: '4" Round', image: 'assets/Products/Bowls/bowl3.png', description: '4" Round Areca Palm Leaf Bowl' },
   { id: '5-round-bowl', name: '5" Round', image: 'assets/Products/Bowls/bowl4.png', description: '5" Round Areca Palm Leaf Bowl' },
    { id: '6-round-bowl', name: '6" Round', image: 'assets/Products/Bowls/bowl5.png', description: '6" Round Areca Palm Leaf Bowl' },
     { id: '8-round-bowl', name: '8" Round', image: 'assets/Products/Bowls/bowl6.png', description: '8" Round Areca Palm Leaf Bowl' },
];

extraCurveProducts = [
  {
    id: '10-round-scalloped',
    name: '10” Round Scalloped',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img1.png',
    description: '10” Round Scalloped Areca Palm Leaf Plate'
  },
   {
    id: '7-round-scalloped',
    name: '7” Round Scalloped',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img2.png',
    description: '7” Round Scalloped Areca Palm Leaf Plate'
  },
   {
    id: '6-round-scalloped',
    name: '6” Round Scalloped',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img3.png',
    description: '6” Round Scalloped Areca Palm Leaf Plate'
  },
   {
    id: '6-Tear-Drop',
    name: '6” Tear Drop',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img4.png',
    description: '6” Tear Drop Areca Palm Leaf Plate'
  },
  {
    id: '10-Tear-Drop',
    name: '10” Tear Drop',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img5.png',
    description: '10” Tear Drop Areca Palm Leaf Plate'
  },
  {
    id: '6.5-heart',
    name: '6.5” Heart',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img6.png',
    description: '6.5” Heart Areca Palm Leaf Bowl'
  },
  {
    id: '8x3-boat',
    name: '8” x 3” Boat',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img7.png',
    description: '8” x 3” Boat Areca Palm Leaf Plate'
  },
  {
    id: '9x5-fish',
    name: '9” x 5” Fish',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img8.png',
    description: '9” x 5” Fish Areca Palm Leaf Plate'
  },
  {
    id: '4-oval',
    name: '4” Oval',
    category: 'Extra Curves',
    image: 'assets/Products/ExtraCurves/img9.png',
    description: '4” Oval Areca Palm Leaf Plate'
  },
];

comboPackProducts = [
  {
    id: '10-square',
    name: '10" Square 25C',
    image: 'assets/Products/Combo/img1.png',
    description: '10” Square Areca Palm Leaf Plate, Fork Spoon, Knife, Paper Napkin And Cups Each 25'
  },
   {
    id: '10&7-square',
    name: '10" & 7" Square 15C',
    image: 'assets/Products/Combo/img2.png',
    description: '10" & 7" Square Areca Palm Leaf Plate, Fork Spoon, Knife, Paper Napkin And Cups Each 15'
  },
   {
    id: '10-square-combo',
    name: '10" Square 15C',
    image: 'assets/Products/Combo/img3.png',
    description: '10” Square Areca Palm Leaf Plate, Fork Spoon, Knife, Paper Napkin And Cups Each 15'
  },
  {
    id: '10-square-plate',
    name: '10" Square Plate 25C',
    image: 'assets/Products/Combo/img4.png',
    description: '10” Square Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 25'
  },
  {
    id: '10&7-square-combo',
    name: '10" & 7" Square Plate 15C',
    image: 'assets/Products/Combo/img5.png',
    description: '10"7" Square Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 15'
  },
  {
    id: '10-square-plate-combo',
    name: '10" Square Plate 15C',
    image: 'assets/Products/Combo/img6.png',
    description: '10” Square Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 15'
  },
  {
    id: '10-round',
    name: '10" Round 25C',
    image: 'assets/Products/Combo/img7.png',
    description: '10” Round Areca Palm Leaf Plate, Fork Spoon, Knife Paper Napkin And Cups Each 25'
  },
  {
    id: '10&7-round',
    name: '10" & 7" Round 15C',
    image: 'assets/Products/Combo/img8.png',
    description: '10" & 7" Round Areca Palm Leaf Plate, Fork Spoon, Knife, Paper Napkin And Cups Each 15'
  },
  {
    id: '10-round-combo',
    name: '10" Round 15C',
    image: 'assets/Products/Combo/img9.png',
    description: '10” Round Areca Palm Leaf Plate, Fork Spoon, Knife, Paper Napkin And Cups Each 15'
  },
  {
    id: '10-round-plate',
    name: '10" Round Plate 25C',
    image: 'assets/Products/Combo/img10.png',
    description: '10” Round Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 25'
  },
  {
    id: '10&7-Round-combo',
    name: '10" & 7" Round 15C',
    image: 'assets/Products/Combo/img11.png',
    description: '10"7" Round Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 15'
  },
  {
    id: '10-Round-plate-combo',
    name: '10" Round Plate 15C',
    image: 'assets/Products/Combo/img12.png',
    description: '10” Round Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 15'
  },
  {
    id: '10-Round-scalloped',
    name: '10" Round Scalloped Plate 25C',
    image: 'assets/Products/Combo/img13.png',
    description: '10” Round Scalloped Areca Palm Leaf Plate, Fork Spoon, Knife Paper Napkin And Cups Each 25'
  },
    {
    id: '10&7-Round-scalloped',
    name: '10" & 7" Round Scalloped Plate 15C',
    image: 'assets/Products/Combo/img14.png',
    description: '10"7" Round Scalloped Areca Palm Leaf Plate, Fork Spoon, Knife Paper Napkin And Cups Each 15'
  },
    {
    id: '10-Round-scalloped-combo',
    name: '10" Round Scalloped Set 15C',
    image: 'assets/Products/Combo/img15.png',
    description: '10” Round Scalloped Areca Palm Leaf Plate, Fork Spoon, Knife Paper Napkin And Cups Each 15'
  },
  {
    id: '10-Round-scalloped-combo-set',
    name: '10" Round Scalloped Set 25C',
    image: 'assets/Products/Combo/img16.png',
    description: '10” Round Scalloped Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 25'
  },
   {
    id: '10&7-Round-scalloped-combo',
    name: '10" & 7" Round Scalloped 15C',
    image: 'assets/Products/Combo/img17.png',
    description: '10"7" Round Scalloped Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 15'
  },
  {
    id: '10-Round-scalloped-combo-set-15',
    name: '10" Round Scalloped Set 15C',
    image: 'assets/Products/Combo/img18.png',
    description: '10” Round Scalloped Areca Palm Leaf Plate, Fork Spoon, Knife And Paper Napkin Each 15'
  },
  {
    id: '6.5-heart-combo-24',
    name: '6.5" Heart Bowl 24Pcs',
    image: 'assets/Products/Combo/img19.png',
    description: '6.5” Heartin Areca Palm Bowl Pack Of 24'
  },
   {
    id: '6-round',
    name: '6" Round Plate 24Pcs',
    image: 'assets/Products/Combo/img20.png',
    description: '6” Round Areca Palm Leaf Bowl Pack Of 24'
  },
  {
    id: '6-square',
    name: '6" Square Bowl 24Pcs',
    image: 'assets/Products/Combo/img21.png',
    description: '6” Square Areca Palm Leaf Bowl Pack Of 24'
  },
];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    // Run only in browser
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      const cards: NodeListOf<Element> = this.el.nativeElement.querySelectorAll('.product-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      cards.forEach((card: Element) => observer.observe(card));
    }
  }
}
