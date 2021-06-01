import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public urlUser='http://localhost:3000/user';
  public urlPro='http://localhost:3000/allProducts';
  public urlCloths='http://localhost:3000/Cloths';
  public urlElectronics='http://localhost:3000/electronics';
   public info:any=[];
userurl="http://localhost:3000/users";
adminurl="http://localhost:3000/admin"
constructor(private http:HttpClient) {
  this.http.get('http://localhost:3000/user').subscribe(data=>{
        this.info=data;
        console.log(this.info);

      })
 }
public send=new BehaviorSubject({})
public collect=<any>this.send.asObservable();

authuser(data){
  return this.http.post(this.userurl,data);
}
getuser(){
  return this.http.get(this.userurl);
}
getadmindata(){
return this.http.get(this.adminurl);
}
updateuser(id,data){
  return this.http.put(`${this.userurl}`+`/${id}`,data);
}
getUsers(){

  return this.http.get(this.urlUser);
}
getShoes()
{
return this.http.get('http://localhost:3000/shoes');
}
getAllProducts(){
    return this.http.get(this.urlPro);
}
getElectronics()
{
  return this.http.get(this.urlElectronics);
}
getCloths()
{
  return this.http.get(this.urlCloths);
}
}
