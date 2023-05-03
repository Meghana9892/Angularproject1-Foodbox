import { Component } from '@angular/core';
import { products } from 'src/models/products';
import { productservice } from '../services/productservices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products!:products[];
 
  constructor(private productservice:productservice){
    this.getProducts()
  }

  private getProducts()
  {
    this.productservice.getProducts().subscribe({

      next:(res)=>{
       this.products=res;
       
      },
      error:(err)=>console.log(err)
    })
  }
}
