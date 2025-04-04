import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig, } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import Aura from '@primeng/themes/aura';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        
      }),withRouterConfig({onSameUrlNavigation:'ignore'})
      
      
    ),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
              darkModeSelector: false || 'none'
          }
        }
    }),
    provideNgIconsConfig({
      size: '24px',
    }),
    provideHttpClient(withFetch())
   
  ]
};
