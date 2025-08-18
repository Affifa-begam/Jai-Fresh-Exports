import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  constructor(private router: Router, private http: HttpClient) {}

  // ===== Navigation Methods =====
  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToGallery() {
    this.router.navigate(['/gallery']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  // ===== Form Submit =====
  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all fields correctly.');
      return;
    }

    // Optional: Additional validation
    if (!/^[0-9]{10}$/.test(this.formData.phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(this.formData.email)) {
      alert('Invalid email format.');
      return;
    }

   this.http.post('http://localhost:3000/api/quick-enquiry', this.formData)
      .subscribe({
        next: () => {
          alert('Enquiry submitted successfully!');
          this.formData = { name: '', phone: '', email: '', message: '' };
          form.resetForm();
        },
        error: (err) => {
          console.error(err);
          alert('Error submitting enquiry.');
        }
      });
  }
}
