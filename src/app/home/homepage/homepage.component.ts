import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotocheckout(){
  this.router.navigateByUrl('cart/checkout');
  }
homepage(){
  this.router.navigateByUrl('homepage');
}
gotoproducts(){
  this.router.navigateByUrl('products');
}
}
