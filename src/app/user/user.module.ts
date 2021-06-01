import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifyComponent } from './verify/verify.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    UserloginComponent,
    VerifyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[
    LandingpageComponent,
    UserloginComponent,
    VerifyComponent,
   
  
  ]
})
export class UserModule { }
