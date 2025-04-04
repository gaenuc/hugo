import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { FormControl, FormsModule,ReactiveFormsModule, FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';




@Component({
  selector: 'app-home',
  imports: [CarouselComponent, RouterLink, CheckboxModule, FormsModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form: FormGroup;
  success= false;
  constructor(private formBuilder: FormBuilder,private api:ApiService) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],       
      terms: [false, [Validators.requiredTrue]],       
    })
    this.form.valueChanges.subscribe(data=> {
      console.log(data)
    })
  }
  sendData() {
    let data=  this.form.value;
    data.from= 'HOME-PAGE'
    console.log(data)
    this.api.contact(data).subscribe(res => {
      this.success = true
      console.log(res)
    })
  }

}
