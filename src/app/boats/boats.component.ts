import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePicker } from 'primeng/datepicker';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { AccessoriesService } from '../services/accessories.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroInformationCircle, heroXMark } from '@ng-icons/heroicons/outline';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { BoatService } from '../services/boat.service';

@Component({
  selector: 'app-boats',
  imports: [CommonModule, FormsModule,ReactiveFormsModule, DatePicker,NgIcon, ToggleSwitchModule, CheckboxModule, RouterLink], 
  providers:[provideIcons({heroInformationCircle, heroXMark})],
  templateUrl: './boats.component.html',
  styleUrl: './boats.component.css'
})
export class BoatsComponent implements OnInit{
  date: Date | undefined;
  sub: any;
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  data: any
  accData: any
  showPicker: boolean= false;
  form: FormGroup;
  services:any;
  showCard= false;
  serviceData:any;
  success=false;
  constructor(private formBuilder: FormBuilder, private api:ApiService, private router: Router, private acc: AccessoriesService, private boatService: BoatService) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      date: [ '', [Validators.required]], 
      message: ['', [Validators.required]],       
      terms: [false, [Validators.requiredTrue]],       
    })
  }

  ngOnInit(): void {
      this.sub = this.route.data.subscribe(data => {
        console.log(data[0])
        this.data = data[0];
        if (this.data.error) {
          this.router.navigate(['/error-404'])
        }
      })
      console.log(this.router.parseUrl(this.router.url))
      this.services = this.acc.getServices()
      this.services.map((el: any) => {
        this.form.addControl(el.name,new FormControl(el.value, [Validators.required]));
    })          
  }

  formatDate() {   
    this.form.get('date')?.setValue( this.form.get('date')?.value.toISOString().slice(0, 10).split('-').reverse().join('/'))       
  }

  report(data: any) {
    console.log(data);
  }

  sendData() {
    let data=  this.form.value;
    data.from= 'BOAT-PAGE'
    data.boat= this.data.name
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

  getServices(id:string) {
    this.accData = this.acc.getData(id);
  }

  addService(name:string, val:boolean) {
    this.services.map((el:any, i:number) => {
      if(el.name === name) {
        this.services.value = val;
        this.form.get(el.name)?.setValue(val);
      }
    })
  }

  location(loc: string) {
    return this.boatService.getLocation(loc);
  }
}
