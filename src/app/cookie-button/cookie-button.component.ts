import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-button',
  imports: [CommonModule],
  templateUrl: './cookie-button.component.html',
  styleUrl: './cookie-button.component.css'
})
export class CookieButtonComponent {
  openPreferences() {
    if ((window as any).Iubenda?.preferenceCenter) {
      (window as any).Iubenda.preferenceCenter.open();
    } else {
      console.error('Iubenda non è caricato correttamente.');
    }
  }
}
