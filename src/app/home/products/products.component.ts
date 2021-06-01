import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public flag = false;
  public visible = true;
  public value: any = 1;
  public value2: any = 1;
  public electro: any = [];
  public card: any = [];
  public cloth: any = [];
  public shoe:any=[];
  public allProduct: any = [];
 public count:number=0;
  public searchedDeatails: any = [];
  public searchInput: any;
  public cartArray: any = [];
  public currentUser: any = [];
  public displayInCart: any = [];

  public searchText: any;
  public view = true;
  public navii = false;
  public allUsers: any = [];
  public productsSection = false;
  public LogoutSection = false;
  public homeSection = true;
  public cartSection = false;
  public tempdata: any = [];
  public currentID: any = [];
  public numberofProductsInCart: any;
  public cartItem: any = [];
  public productItem: any = [];
 public inputQyt:number;
 public sorting:any;
 public badgeNumber:number=0;
public check=false;
 public productUnsortedInfo: any;
 public inputOtp: any;
 public someName: any;
    constructor(
    private route: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.http.get('http://localhost:3000/user').subscribe((data) => {
      this.allUsers = data;
    });
    this.http.get('http://localhost:3000/allProducts').subscribe((data) => {
      this.productItem = data;
    });
    this.searchText = '';


  }

  ngOnInit(){
    this.inputQyt=1;
  }

  searchFunction(event) {
    console.log(event.target.value);

    this.searchText = event.target.value;
  }


  allproducts() {
    this.value = 1;

    console.log('inside all product');
   this.http.get('http://localhost:3000/allProducts').subscribe((data) => {
      this.allProduct = data;
      console.log(this.allProduct);
      
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
      
    });
    this.value2 = 1;
  }
  addToCart(id: any) {
    this.currentUser = localStorage.getItem('currentuser');
    console.log(this.currentUser);
    console.log(this.allUsers);
    for (var i = 0; i < this.allUsers.length; i++) {
      console.log('inside for cartttttttt');

      console.log(this.allUsers[i].email);

      if (this.currentUser == this.allUsers[i].email) {
        console.log('hello');
        this.tempdata = this.allUsers[i];
        this.currentID = this.allUsers[i].id;
        console.log('tempdataa ', this.tempdata);
        console.log('curent dattaaa', this.currentID);
      }
    }
    console.log(this.tempdata.cart);

    for (var j = 0; j < this.tempdata.cart.length; j++) {
      if (this.tempdata.cart[j] == id) {
        alert('already in cart');
        return;
      }
    }
    this.tempdata.cart.push(id);
    const body = this.tempdata;
    this.http
      .put('http://localhost:3000/user/' + `${this.currentID}`, body)
      .subscribe((data) => {
        console.log(data, 'line 126');
        this.tempdata = data;
        this.numberofProductsInCart = this.tempdata.cart.length;
        console.log(this.numberofProductsInCart);
        this.badgeNumber=this.numberofProductsInCart;
      });
    //this.cartItem=this.numberofProductsInCart;
    console.log('hellooooooooooooooooo');
    this.badgeNumber;
    //console.log(this.cartItem);
  }

  Electronics() {
    this.value = 2;
    this.value2 = 2;
    console.log('inside electronics');
    this.authService.getElectronics().subscribe((data) => {
      this.electro = data;
    });
  }

  Cloths() {
    this.value = 3;
    this.value2 = 3;
    console.log('inside cloths');
    this.authService.getCloths().subscribe((data) => {
      this.cloth = data;
    });
  }
  shoes(){
    console.log("shoesssssss");

    this.value = 4;
    this.value2 = 4;
    console.log('inside cloths');
   this.authService.getShoes().subscribe(data=>{
     this.shoe=data;
   })
  }

  productSec() {
    this.homeSection = false;
    this.productsSection = true;
    this.LogoutSection = false;
    this.cartSection = false;
    this.navii = true;
    this.allproducts();
  }
  Logout() {
    this.homeSection = false;
    this.productsSection = false;
    this.LogoutSection = true;
    this.cartSection = false;
    this.navii = false;
    this.logoutFromApp()


  }
  home() {
    this.homeSection = true;
    this.productsSection = false;
    this.LogoutSection = false;
    this.cartSection = false;
    this.navii = false;
  }
  cartSec() {
    this.homeSection = false;
    this.productsSection = false;
    this.LogoutSection = false;
    this.cartSection = true;
    this.navii = false;
    this.cartPage();
    console.log('cart section call');
  }

  cartPage() {
    console.log('got it');
    //get all user's details
    this.authService.getUsers().subscribe((data) => {
      this.allUsers = data;
    });
    //get all product details
    this.http.get('http://localhost:3000/allProducts').subscribe((data) => {
      this.productItem = data;
    });
    console.log(this.allUsers);
    console.log(this.productItem);

    this.currentUser = localStorage.getItem('currentuser');
    console.log(this.currentUser);
    for (var k = 0; k < this.allUsers.length; k++) {


      if (this.currentUser == this.allUsers[k].email) {

        this.cartItem = this.allUsers[k].cart;
        for (var p = 0; p < this.cartItem.length; p++) {

          for (var q = 0; q < this.productItem.length; q++) {

            if (this.cartItem[p] == this.productItem[q].id) {
              this.displayInCart.push(this.productItem[q])
             this.count+=1;
            //  this.totalAmount=JSON.stringify(this.productItem[q].price);
            //  this.num=parseInt(this.totalAmount);

              console.log(this.displayInCart);
              //console.log(this.num2);
            }
          }

        }
        console.log('got ittttttttt');
      }
    }

   console.log("comlete cart product",this.displayInCart);
this.inputOtp=this.count;
this.someName=this.currentUser;
  }
  logoutFromApp()
  {
    alert("Logouting......")
    localStorage.removeItem('token');
    this.route.navigateByUrl('');
  }

 
}