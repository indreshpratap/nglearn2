import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
import { ProductService } from "app/product/product.service";
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, FormArray } from "@angular/forms";
// import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-prod-model-form',
    templateUrl: './product-model-form.component.html',

})

export class ProductModelFormComponent implements OnInit {

    form: FormGroup;

    maxlength = 0;
    defaultValues: any = { name: "Shirt", category: "Cloth", quantity: "5", color1: "Green" };
    constructor(private service: ProductService, private fb: FormBuilder) { }

    ngOnInit() {
        this.maxlength = 6;
        // this.buildForm(defaultValues);
        this.buildByBuilder();
    }

    setValues() {
        // only works if we are setting the value for each control
        // this.form.setValue(this.defaultValues);
        // set only specific control values
        this.form.patchValue(this.defaultValues);
        // set specific control value
        this.form.get('name').setValue("indresh pratap singh");
    }

    toogleForm() {
        // to enable/disable complete form group
        // if(this.form.disabled){
        //     this.form.enable();
        // }else {
        //     this.form.disable();
        // }
        // individual form control enable disable
        let name: AbstractControl = this.form.get("name");
        if (name.disabled) {
            name.enable();
        } else {
            name.disable();
        }
    }
    doSave() { }

    addNominee(checked) {

        if (checked) {
            this.form.addControl('nominee', this.fb.group({
                name: ['', Validators.required],
                relationship: ['', Validators.required]
            })
            );
        } else {
            this.form.removeControl("nominee");
        }
    }

    buildForm(state: any) {
        this.form = new FormGroup({
            "name": new FormControl(state.name, [Validators.required, Validators.pattern(/^[a-zA-Z_ ]*$/)]),
            "category": new FormControl(state.category, [Validators.required, this.nospaceAllowed, Validators.maxLength(this.maxlength)]),
            "color": new FormControl(state.color, [Validators.required, this.nospaceAllowed, Validators.pattern(/^[a-z]*$/)]),
            "quantity": new FormControl(state.quantity, [Validators.required, Validators.minLength(2)])
        });
    }

    buildByBuilder() {
        this.form = this.fb.group({
            "name": ['', [Validators.required, Validators.pattern(/^[a-zA-Z_ ]*$/)]],
            "category": ['', [Validators.required, this.nospaceAllowed, Validators.maxLength(this.maxlength)]],
            "color": ['', [Validators.required, this.nospaceAllowed, Validators.pattern(/^[a-z]*$/)]],
            "quantity": ['', [Validators.required, Validators.minLength(2)]],
            "documents": this.fb.array([])
        });
    }

    get documents() {
        return this.form.get('documents') as FormArray;
    }
    addNewDocument() {
        this.documents.push(this.fb.group({
            docname: [''],
            docno: ['']
        }, { validator: this.allinputrequired }));
    }

    removeDoc(indx) {
        console.log(this.documents.at(indx));
        this.documents.removeAt(indx);
    }

    nospaceAllowed(control: FormControl) {
        if (control.value) {
            // let reg= new RegExp(" ");
            let value: string = control.value;
            return / /.test(value) ? { nospaceallowed: true } : null;
        }
    }
    allinputrequired(control: FormGroup) {
    let v =control.value;
        if (v.docname && v.docno) {
        return null;
        }else {
return { allinputrequired: true };
        }
            // let reg= new RegExp(" ");
           // let value: string = control.value;
            // return / /.test(value) ? { nospaceallowed: true } : null;
        // }
    }
}