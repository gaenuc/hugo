import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tour',
  imports: [RouterLink, CheckboxModule, FormsModule,ReactiveFormsModule],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {
  data = [
    {
      "title": "Escursioni da Mazzarò",
      "durata": "1 ora",
      "prezzo": "35 € a persona",
      "descrizione": "Tour panoramico tra le grotte e baie più belle della costa di Taormina, con soste per foto e relax.",
      "check_in": "Spiaggia di Mazzarò"},
    {
      "title": "Escursioni da Giardini Naxos",
      "durata": "2 ore",
      "prezzo": "40 € a persona",
      "descrizione": "Giro completo della costa tra Giardini Naxos e Taormina, con visita alle grotte marine e soste per il bagno. Incluso prosecco a bordo per rendere l’esperienza ancora più speciale.",
      "check_in": "Pontile Portum Giardini Naxos"
    }
    
    
  ]
  form: FormGroup;
  success= false;
  constructor(private formBuilder: FormBuilder, private api:ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      date: [ '', [Validators.required]], 
      message: ['', [Validators.required]],       
      terms: [false, [Validators.requiredTrue]],       
    })
  }

  sendData() {
    let data=  this.form.value;
    data.from= 'TOUR-PAGE'
   
    // const data = {
    //   from: 'BOAT-PAGE',
    //   boat: this.data.name,
    //   date: this.form.value.date,
    //   name: this.form.value.name,
    //   email: this.form.get('email')?.value,
    //   message: this.form.get('message')?.value      
    // }
    console.log(data)

    this.api.contact(data).subscribe(res => {
      this.success = true
      console.log(res)
    })
  }

}
