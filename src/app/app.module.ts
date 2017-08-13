import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from "app/product/product-detail.component";
import { ProductListingComponent } from "app/product/product-listing.component";
import { HooksComponent } from "app/hooks.component";
import { ProductService } from "app/product/product.service";
import { SecondComponent } from "app/second.component";
import { ApprootComponent } from './approot.component';
import { AboutComponent } from "app/about.component";
import { ProductViewMoreComponent } from "app/product/product-view-more.component";

import 'rxjs/Rx';
import { ProductViewSpecComponent } from "app/product/product-spec-more.component";
const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "products", component: ProductListingComponent,
  children:[
    {path:"view-more/:id/:name",component:ProductViewMoreComponent},
    {path:"view-spec/:id",component:ProductViewSpecComponent},
  ]
},
  { path: "second", component: SecondComponent },
  { path: "aboutus", component: AboutComponent },
  { path: "**", redirectTo: "/products", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ProductListingComponent,
    ProductDetailComponent,
    HooksComponent,
    ApprootComponent,
    AboutComponent,
    ProductViewMoreComponent,
    ProductViewSpecComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // registering routes and importing the Router module
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  // bootstrap: [AppComponent]
  bootstrap: [ApprootComponent]
})
export class AppModule { }
