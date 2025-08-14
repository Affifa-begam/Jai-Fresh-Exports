// === contact.component.ts ===
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all required fields correctly.');
      return;
    }

   this.http.post('http://localhost:3000/api/contact', this.formData)
      .subscribe({
        next: () => {
          alert('Message submitted successfully!');
          this.formData = { name: '', email: '', phone: '', city: '', message: '' };
          form.resetForm();
        },
        error: (err) => {
          alert('Error submitting form');
          console.error(err);
        }
      });
  }
}
