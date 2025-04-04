import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { Carousel } from 'primeng/carousel';
const ANIMATION_TIMING = '600ms ease-out';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule,CarouselModule, ButtonModule, TagModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
 })
export class CarouselComponent  implements OnInit {

  constructor() {
    Carousel.prototype.onTouchMove = () => { };
  }

  @Input() type!: 'tours' | 'partners';

  cards :any = [
    {name:'dolcevita tour', img:'/assets/img/card_dolcevitatour.webp', link:['/barche','fiat-500-dolce-vita'], frag:'tour', text:'Vivi l\'autentico Italian Style a bordo della leggendaria Fiat 500 del mare!'},
    {name:'escursioni di gruppo', img:'/assets/img/card_escursioni-di-gruppo.webp', link:['/tour'], frag:'no', text:'Tour in barca tra grotte e baie di Taormina, con soste bagno, foto e prosecco.'},
    {name:'noleggio blumax', img:'/assets/img/card_blumax.webp', link:['/barche','blumax-40-cavalli'], frag:'no', text:' Perfetta per chi vuole esplorare la costa in autonomia, non necessita patente'},
    {name:'noleggio allegra 20', img:'/assets/img/card_allegra20.webp', link:['/barche','allegra-20'], frag:'no', text:'Motoscafo bello e compatto, perfetto per passare divertenti giornate in barca'},
    {name:'noleggio allegra 21 sun', img:'/assets/img/card_allegra21.webp', link:['/barche','allegra-21-sun'], frag:'no', text:' Elegante e sportivo, l\'All 21 Sun combina design italiano e abitabilità da day cruiser.'},
    {name:'Noleggio Dolcevita', img:'/assets/img/card_dolcevita.webp', link:['/barche','fiat-500-dolce-vita'], frag:'no', text:'Iconica barca ispirata alla Fiat 500, unisce design italiano, stile unico e divertimento in acqua.'},
    {name:'Noleggio seablue', img:'/assets/img/card_seablue.webp', link:['/servizi','seablue'], frag:'no', text:'Esplora le meraviglie sommerse con il Seablue!'}
]

  
  partners:any = ['a sicula','sicily jet surfing','taormina quad excursion','poseidon boat excursion']
  responsiveOptions: any[] | undefined;
  responsiveOptions2: any[] | undefined;
  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
    this.responsiveOptions2 = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
  }

  report (el:any) {
    console.log(el)
  }
}
