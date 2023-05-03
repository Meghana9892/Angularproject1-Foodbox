import { Component } from '@angular/core';
import { productservice } from '../services/productservices';
import { Router } from '@angular/router';
import { products } from 'src/models/products';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private productservice:productservice,private route:Router){}

  product:products={id:0,productname:"",price:0};
  products!:products[];

  addproduct(id:any,productname:any,price:any)
  {
    if((id==0) || (productname=="") || (price==0))
    {
      alert("Enter the details")
    }
    else
    {
    this.productservice.addProduct(this.product).subscribe({
      next:(res)=>{
        this.products.push(this.product);  
      },
      error:(err)=>console.log(err)
    })
    alert("Product added")
  }
}


  public back()
  {
    this.route.navigate(['/home'])
  }

}
