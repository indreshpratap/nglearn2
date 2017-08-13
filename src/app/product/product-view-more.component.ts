import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from "app/product/product.service";

@Component({
  
    selector: 'app-product-view',
    templateUrl: 'product-view-more.component.html'
})

export class ProductViewMoreComponent implements OnInit {

    product:any={};
    constructor(private activated:ActivatedRoute,private service: ProductService) {
        console.log("test");
     }

    ngOnInit() { 
        console.log(this.activated.snapshot.params);
        console.log(+this.activated.snapshot.params.id);
        this.activated.params
            .subscribe(i=>{
            console.log("subscribed",i);
              this.product=   this.service.getProductDetailById(+i.id);
        });


    // this.product=   this.service.getProductDetailById(+this.activated.snapshot.params.id);
    }
}