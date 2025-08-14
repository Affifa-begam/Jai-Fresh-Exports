// === app.routes.ts ===
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ProductsComponent } from './products/products.component';

import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'footer', component: FooterComponent }
];
