import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private scrollHandler = () => {};

  enquiryData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private http: HttpClient
  ) {}

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

  submitQuickEnquiry(form: NgForm) {
  if (form.valid) {
    this.http.post('http://localhost:3000/api/quick-enquiry', this.enquiryData).subscribe({
      next: () => {
        alert('Message sent successfully!');
        form.resetForm();

        const modalEl = document.getElementById('enquiry');
        if (modalEl) {
          const modalInstance =
            bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
          modalInstance.hide();
        }

        // 🔹 Ensure leftover backdrop & body classes are removed
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
          backdrop.remove();
        }
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('padding-right');
      },
      error: () => {
        alert('Failed to send message. Please try again.');
      }
    });
  } else {
    alert('Please fill all required fields with valid details.');
  }
}
}
