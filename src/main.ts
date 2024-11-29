import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

// Merge animations into appConfig if appConfig already exists
const mergedConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Include existing providers
    provideAnimations(), // Add animations provider
  ],
};

bootstrapApplication(AppComponent, mergedConfig)
  .catch((err) => console.error(err));
