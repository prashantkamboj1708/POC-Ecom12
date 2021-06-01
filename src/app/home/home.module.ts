import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
  
  ]
  ,
  exports:[HomepageComponent,
    ProductsComponent
  ]
})
export class HomeModule { }
