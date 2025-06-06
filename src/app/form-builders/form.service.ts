import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient
  ) { }

  getFormList(){
   return this.http.get('https://dummyjson.com/products')
  }
  saveForm(){
    return this.http.get('https://dummyjson.com/products')
  }
  deleteItem(){
    
  }

  getCountryList(){
    return this.http.get('../../assets/countryDetails.json');
  }
}
