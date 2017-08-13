import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from "app/product/product.service";

@Component({
  
    selector: 'app-product-spec',
    templateUrl: 'product-spec-more.component.html'
})

export class ProductViewSpecComponent implements OnInit {

    product:any={};
    constructor(private router:Router,private activated:ActivatedRoute,private service: ProductService) {
       
     }

    ngOnInit() { 
        console.log(this.activated.snapshot.params);
        console.log(+this.activated.snapshot.params.id);
        // this.activated.params
        //     .subscribe(i=>{
        //     console.log("subscribed",i);
        //       this.product=   this.service.getProductDetailById(+i.id);
        // });


    this.product=   this.service.getProductDetailById(+this.activated.snapshot.params.id);
    }

    backToView() {
        this.router.navigate(['/products/view-more',this.product.id,this.product.name]);
    }
}