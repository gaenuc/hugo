import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
const url = 'https://www.hugoexperience.com/back/api.php';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {

  }

  contact(data:any) {
   console.log(JSON.stringify(data));
   return this.http.post<any> (url, data).pipe(map(res => {
     return res;
   }))
 }}
