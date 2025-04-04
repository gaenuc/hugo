import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-accessories',
  imports: [CommonModule, FormsModule, DatePicker],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {
  date: Date | undefined;
  sub: any;
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  data: any
  showPicker: boolean= false;
  constructor(private router: Router) {}
  ngOnInit(): void {
      this.sub = this.route.data.subscribe(data => {
        console.log(data[0])
        this.data = data[0];
        if (this.data.error) {
          this.router.navigate(['/error-404'])
        }
      })
  }

  formaDate(date: Date | undefined) {
    console.log(date)
    if (date ) {
      return date.toISOString().slice(0, 10).split('-').reverse().join('/')
    } else {
      return '';
    }
    
  }
  report(data: any) {
    console.log(data);
  }

}

