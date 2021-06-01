import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
   if(localStorage.getItem("user")){ 
    localStorage.removeItem("user");
    return true;
  }else{
    this.router.navigateByUrl('');
    return false;
  }
   }
  
}
