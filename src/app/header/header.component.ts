import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router, private route:ActivatedRoute){}

  logout(){
    this.router.navigateByUrl("/login");
    alert('Are You Sure You Want To Logout From This Page');
    console.log('Logout Successfully');
  }

}
