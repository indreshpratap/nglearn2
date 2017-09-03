import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
import { ProductService } from "app/product/product.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
// import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-prod-model-form',
    templateUrl: './product-model-form.component.html',

})

export class ProductModelFormComponent implements OnInit {

    form: FormGroup;

    maxlength = 0;
    constructor(private service: ProductService) { }

    ngOnInit() {
        let state: any = { name: "Shirt", category: "Cloth", quantity: "5", color: "Green" };
        this.maxlength = 6;
        this.buildForm(state);

    }

    doSave() {

    }

    buildForm(state: any) {
        this.form = new FormGroup({
            "name": new FormControl(state.name,[ Validators.required]),
            "category": new FormControl(state.category, [Validators.required,this.nospaceAllowed, Validators.maxLength(this.maxlength)]),
            "color": new FormControl(state.color, [Validators.required,this.nospaceAllowed]),
            "quantity": new FormControl(state.quantity, Validators.required)
        });
    }


    nospaceAllowed(control: FormControl) {
        if (control.value) {
            // let reg= new RegExp(" ");
            let value: string = control.value;
            return / /.test(value) ? {nospaceallowed:true} : null;
        }
    }
}