import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecondComponent } from "app/second.component";
import { ProductDetailComponent } from "app/product/product-detail.component";
import { ProductListingComponent } from "app/product/product-listing.component";
import { HooksComponent } from "app/hooks.component";
import { ProductService } from "app/product/product.service";

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ProductListingComponent,
    ProductDetailComponent,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
