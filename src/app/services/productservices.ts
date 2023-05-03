import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class productservice {
  baseUrl="/api/products";
  constructor(private http:HttpClient) { }


 getProducts()
  {
    return this.http.get<products[]>(this.baseUrl);
  }

   addProduct(p:products)
  {
   return this.http.post(this.baseUrl,p);
  }


}
