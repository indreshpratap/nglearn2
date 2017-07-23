
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from "app/product/product.service";

@Component({
    selector: 'app-product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {

    constructor(prodSer:ProductService){
        console.log(prodSer.getProductList());
    }

    @Input()
    product: any;

    @Input()
    mode:number;

    @Output()
    onAddToCart: EventEmitter<any> = new EventEmitter<any>();
    
    @Output()
    onRemove: EventEmitter<any> = new EventEmitter<any>();


    addToCart() {
        this.onAddToCart.emit(this.product);
    }

    remove(){
        this.onRemove.emit(this.product);
    }

}