import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { UserGuard } from './user.guard';
import { LandingpageComponent } from './user/landingpage/landingpage.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { VerifyComponent } from './user/verify/verify.component';
import{HomepageComponent} from 'src/app/home/homepage/homepage.component';
import { ProductsComponent } from './home/products/products.component';


const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  }
  ,{
    path:'userlogin',
    component:UserloginComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
 
 {
    path:'verify',
    component:VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
