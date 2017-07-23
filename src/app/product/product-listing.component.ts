
import { Component, OnInit } from "@angular/core";
import { ProductService } from "app/product/product.service";

@Component({
    selector: 'app-product-listing',
    templateUrl: 'product-listing.component.html',
    // providers:[ProductService]
})
export class ProductListingComponent implements OnInit {


    products: any[];

    cart: any[] = [];
    item = "fsd";
    price = 10;
   
    // prodService: ProductService;

    constructor(private productService: ProductService) {
        // this.prodService = productService;
        /*
        this.products = [
            { id: 1, name: "Shirt" },
            { id: 2, name: "Pants" },
            { id: 3, name: "Shoes" },
            { id: 4, name: "Jeans" }
        ];
        */
        //  this.products= productService.getProductList();

    }

    ngOnInit(): void {
        this.products = this.productService.getProductList();
    }

    pushToCart(data: any) {
        let matched: any[] = this.cart.filter(i => { return i.id == data.id });
        if (matched && matched.length) {
            matched[0].qty += 1;
        } else {
            // typescript copy of object
            // let cdata = {...data};

            // old javascript copy of object
            let cdata: any = { name: data.name, id: data.id };

            cdata.qty = 1;

            this.cart.push(cdata);
        }

    }

    removeFromCart(data) {
        let indx = this.findIndex(this.cart, (o) => { return o.id === data.id });
        // let indx = this.cart.indexOf(data);
        if (indx !== -1) {
            this.cart.splice(indx, 1);
        }
    }

    private findIndex(elm, closure): number {
        let indx = -1;
        for (var i = 0; i < elm.length; i++) {
            var matched = closure(elm[i]);
            if (matched) {
                indx = i;
                break;
            }
        }
        return indx;
    }
}