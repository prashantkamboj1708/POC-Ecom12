import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
public email:any;
public password:any;

public credentials:any;
verify=false;


  constructor(private service:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
getuserdata(){
  this.service.getuser().subscribe(data=>{
    this.credentials=data;
    console.log(data);
    this.credentials.forEach(element => {
      if(this.email==element.email && this.password==element.password && element.block==false){
        console.log("correct");
        this.service.send.next(element);
        localStorage.setItem("user","pass");
        this.router.navigateByUrl('userdashboard');
      }
    });
})

}

homepage(){
  this.router.navigateByUrl('homepage');
}
}