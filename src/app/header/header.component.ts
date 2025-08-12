import { Component, Inject, PLATFORM_ID } from '@angular/core';
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
export class HeaderComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

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
