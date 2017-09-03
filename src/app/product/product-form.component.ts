import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "app/product/product.service";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-prod-form',
    templateUrl: './product-form.component.html',
   
})

export class ProductFormComponent implements OnInit {
    
    product:any;

    constructor(private activated:ActivatedRoute,
        private service:ProductService ) { }

    ngOnInit() {
       let id =  +this.activated.snapshot.params.id;
       this.product = this.service.getProductDetailById(id);
     }

     doSave(mybtn,form:NgForm) {
        if(form.valid){
            let value = form.value;
           console.log("before setting id: ",value);
            value.id = this.product.id;
           console.log("after setting id: ",value);
           
        }
     }
}