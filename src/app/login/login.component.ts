import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router:Router, private route:ActivatedRoute){}

  email = '';
  password = '';
  visible: boolean = true;
  changetype: boolean = true;


   // password encryption
  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  submit(){
    if (this.email === "pratikshaghugal1@gmail.com" && this.password === "pratiksha"){
      this.router.navigate(['home']);
      alert('Login Successfully');
      console.log('Login Successfully');
      console.log('Email :', this.email);
      console.log('Password :', this.password);
    }
    else if (this.email === "pratiksha1@gmail.com" && this.password === "123"){
      alert("Please enter correct input")
      console.log(' Wrong Data');
      console.log('Email :', this.email);
      console.log('Password :', this.password);
    }
    else{
      alert("Please enter valid data")
      console.log(' Blank Entries');
      console.log('Email :', this.email);
      console.log('Password :', this.password);
    }
    this.clear()
  }
  clear(){
    this.email = "";
    this.password = ""
  }
  
}
