import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name: any;
  price: any;
  file: any;
  cartItems: any = [];

  product:any  = [
    {
      name: 'Blueberry Sauce ',
      price : 200,
      image: "assets/card 1.jpg"
    },
    {
      name: 'Hot Chocolate',
      price : 100,
      image: "assets/card 2.jpg"
    },
    {
      name: 'Chocolate Cake',
      price : 500,
      image: "assets/card 3.jpg"
    },
    {
      name: 'Donut',
      price : 250,
      image: "assets/card 13.jpg"
    },
    {
      name: 'Red Velvet Cake',
      price : 640,
      image: "assets/card 14.jpg"
    },
    {
      name: 'Chocolate Dessert',
      price : 299,
      image: "assets/card 15.jpg"
    },
    {
      name: 'Chocolate Mousse Mini',
      price : 550,
      image: "assets/card 16.jpg"
    },
    {
      name: 'Mocha Cupcakes',
      price : 340,
      image: "assets/card 8.jpg"
    },
    {
      name: 'Motichoor Ladoo',
      price : 720,
      image: "assets/card 18.jpg"
    },
    {
      name: 'Coconut Ladoo',
      price : 560,
      image: "assets/card 10.jpg"
    },
    {
      name: 'Rasgulla',
      price : 999,
      image: "assets/card 11.jpg"
    },
    {
      name: 'chocolate bombs',
      price : 890,
      image: "assets/card 12.jpg"
    }
  ]

  addData(){
    let obj:any={
      name:this.name,
      price:this.price,
      image:this.file
    }
    this.product.push(obj);
  }
  
  addCart(item: any){
   this.cartItems.push(item)
 }

 handleUpload(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    this.file = reader.result
  };
 }

 delete(i:any){
  this.cartItems.splice(i, 1)
 };

 data = [
  {id:1, name: 'Blueberry Sauce', price: 200, Image: 'assets/card 1.jpg'},

  {id:1, name: 'Hot Chocolate', price: 100, Image: 'assets/card 2.jpg'},

  {id:1, name: 'Chocolate Cake', price: 500, Image: 'assets/card 3.jpg'},

  {id:1, name: 'Hot Chocolate', price: 250, Image: 'assets/card 13.jpg'},

  {id:1, name: 'Hot Chocolate', price: 640, Image: 'assets/card 14.jpg'},

  {id:1, name: 'Hot Chocolate', price: 290, Image: 'assets/card 15.jpg'},

  {id:1, name: 'Hot Chocolate', price: 550, Image: 'assets/card 16.jpg'},

  {id:1, name: 'Hot Chocolate', price: 340, Image: 'assets/card 8.jpg'},

  {id:1, name: 'Hot Chocolate', price: 720, Image: 'assets/card 18.jpg'},

  {id:1, name: 'Hot Chocolate', price: 100, Image: 'assets/card 18.jpg'},

  {id:1, name: 'Hot Chocolate', price: 560, Image: 'assets/card 10.jpg'},

  {id:1, name: 'Hot Chocolate', price: 999, Image: 'assets/card 11.jpg'},

  {id:1, name: 'Hot Chocolate', price: 890, Image: 'assets/card 12.jpg'},

 ]
 
 searchText: any;

}