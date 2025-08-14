import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ Enables HttpClient in standalone mode
  ]
});
