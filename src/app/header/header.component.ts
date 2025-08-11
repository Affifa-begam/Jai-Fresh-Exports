import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileOpen = false;

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    // lock body scroll when mobile menu open
    if (this.mobileOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }

  closeMobile() {
    this.mobileOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
