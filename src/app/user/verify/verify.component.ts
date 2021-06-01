import { JsonpClientBackend } from '@angular/common/http';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_3qw7vaEjyh0FAs5hbDgs3");


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
 otp=Math.floor((Math.random() * 100) + 1);
public name=JSON.parse(localStorage.getItem("name"));
public mail=JSON.parse(localStorage.getItem("email"));
public enterotp=false;
public enotp:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  
        
    }


public sendEmail(e: Event) {
 
  e.preventDefault();
  emailjs.sendForm('service_hcxyoxa', 'template_2e0ocnw', e.target as HTMLFormElement,'user_3qw7vaEjyh0FAs5hbDgs3')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    this.enterotp=true;
    
}
validate(){
  if(this.enotp==this.otp){
    localStorage.clear();
    this.router.navigateByUrl('userlogin');
  }
}
}
