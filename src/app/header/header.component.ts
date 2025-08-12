import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollHandler = () => {};

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollHandler = () => {
        const navbar = document.querySelector('.custom-navbar');
        if (navbar) {
          if (window.scrollY > 50) {
            navbar.classList.add('shrink');
          } else {
            navbar.classList.remove('shrink');
          }
        }
      };
      window.addEventListener('scroll', this.scrollHandler);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  closeMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMenu = document.getElementById('navMenu');
      if (navMenu) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu) || new bootstrap.Collapse(navMenu);
        bsCollapse.hide();
      }
    }
  }
}
