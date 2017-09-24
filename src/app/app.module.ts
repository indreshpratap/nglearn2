import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { UserInfoComponent } from "app/user/user-info.component";
import { AuthService } from "app/gaurds/auth.service";
import { UserGuard } from "app/gaurds/user.gaurd";
import { AdminGuard } from "app/gaurds/admin.gaurd";
import { ProductFormComponent } from "app/product/product-form.component";
import { ProductModelFormComponent } from "app/product/product-model-form.component";
import { FormErrorComponent } from './form-error/form-error.component';
import { MultiplyerPipe, LowercasePipe } from 'app/pipes/multiplyer.pipe';
import { MyHightlightDirective, FocusHightlightDirective } from 'app/directive/myhighlight.directive';

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  {
    path: "products", component: ProductListingComponent,
    canActivate: [AdminGuard],
    children: [
      { path: "view-more/:id/:name", component: ProductViewMoreComponent },
      { path: "view-spec/:id", component: ProductViewSpecComponent },
      { path: "edit/:id", component: ProductFormComponent },
    ]
  },
  { path: "second", component: SecondComponent },
  { path: "aboutus", component: AboutComponent,canActivate:[UserGuard] },
  {
    path: "user", canActivate:[UserGuard],
    children: [
      { path: "info", component: UserInfoComponent }
    ]
  },
  {path:"new-product",component:ProductModelFormComponent},
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
    ProductViewSpecComponent,
    UserInfoComponent,
    ProductFormComponent ,
    ProductModelFormComponent,
    FormErrorComponent,
    MultiplyerPipe ,
    LowercasePipe,
    MyHightlightDirective,
    FocusHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // registering routes and importing the Router module
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, AuthService, UserGuard, AdminGuard],
  // bootstrap: [AppComponent]
  bootstrap: [ApprootComponent]
})
export class AppModule { }
