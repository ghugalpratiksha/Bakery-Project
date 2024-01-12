import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  name: any;
  email: any;
  number: any;
  address:any;
  message: any;

  Submit(){
    console.log('Name Submitted', this.name);
    console.log('Email Submitted', this.email);
    console.log('Number Submitted', this.number);
    console.log('Address Submitted', this.address);
    console.log('Message Submitted', this.message);
    alert('Thanks For Contacting Us');
    this.clear();
  }

  clear(){
    this.name= "",
    this.email= "",
    this.number= "",
    this.address= "",
    this.message= ""
  }
}
