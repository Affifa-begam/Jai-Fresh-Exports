import { Component } from '@angular/core';
 // 👈 Import it
import { RouterModule, RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
   
    RouterOutlet,
  
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
