import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route:Router){

  }
  public login(email:any,password:any)
  {
    
    if((email=="") || (password==""))
    {
      alert("Enter the details")
    }
    else
    {
    if((email=="admin") && (password=="admin"))
    {
    this.route.navigate(['/home'])
    }
    else{
      alert("Incoorect credentials provided. Please try again")
    }
    }
  }
}
