import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroHeartSolid } from '@ng-icons/heroicons/solid';
import { bootstrapFacebook, bootstrapInstagram } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  imports: [NgIcon, RouterLink],
  providers: [provideIcons({bootstrapFacebook, bootstrapInstagram})],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
