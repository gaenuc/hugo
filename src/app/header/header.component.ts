import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroBars3Solid } from '@ng-icons/heroicons/solid';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgIcon,Menu, RouterLink],
  providers: [provideIcons({heroBars3Solid})],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  boatItems: MenuItem[] | undefined;
  @Output() customEvent = new EventEmitter<boolean>();
  isChatOpen = false;
  ngOnInit() {
    this.items = [
      {
        label: 'Le Barche',
        style:{"color":"#1890BF"},
        items: [              
          {
            label:'Blumax 40 Cavalli',
            routerLink:['/barche','blumax-40-cavalli'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Fiat 500 Dolce Vita',
            routerLink:['/barche','fiat-500-dolce-vita'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Allegra 20',
            routerLink:['/barche','allegra-20'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Allegra 21 Sun',
            routerLink:['/barche','allegra-21-sun'],
            style:{"margin-left":"12px"}
          },
        ]
      },                 
      {
        label: 'Servizi',
        items: [
          {
            label:'Le Escursioni',
            routerLink:['/tour'],
            style:{"margin-left":"12px"}
          }
        ]
      },
      {
        label: 'Hugo Experience',
        items: [
          
          {
            label:'Chi è Hugo',
            routerLink:['/contatti'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Parla con Noi',
            command:() =>{ this.toggleChat()},
            style:{"margin-left":"12px"}
          },

        ]    
      }, 
    ]
    this.boatItems = [
      {
        label: 'Le Barche',
        items: [              
          {
            label:'Blumax 40 Cavalli',
            routerLink:['/barche','blumax-40-cavalli'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Fiat 500 Dolce Vita',
            routerLink:['/barche','fiat-500-dolce-vita'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Allegra 20',
            routerLink:['/barche','allegra-20'],
            style:{"margin-left":"12px"}
          },
          {
            label:'Allegra 21 Sun',
            routerLink:['/barche','allegra-21-sun'],
            style:{"margin-left":"12px"}
          },
        ]
      }
    ]
  }    

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    this.customEvent.emit(this.isChatOpen)
  }
}