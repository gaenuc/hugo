import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNG } from 'primeng/config';
@Component({
    selector: 'app-root',
    imports: [
      CommonModule,
      RouterOutlet, 
      HeaderComponent, 
      FooterComponent      
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isChatOpen = false;
  title = 'Hugo Experience';
  constructor(private primeng: PrimeNG) {}
  handleEvent(eventData:boolean) {
    this.isChatOpen = eventData;
  }
  ngOnInit() {
    this.primeng.ripple.set(true);  
  }  
}