import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {

    constructor(private http: Http) {

    }

    getProductList(): Array<any> {
        return [
            { id: 1, name: "Shirt", description: "this is description of products", specification: "this is specification of products" },
            { id: 2, name: "Pants", description: "this is description of products", specification: "this is specification of products" },
            { id: 3, name: "Shoes", description: "this is description of products", specification: "this is specification of products" },
            { id: 4, name: "Jeans", description: "this is description of products", specification: "this is specification of products" },
            { id: 5, name: "Jacket", description: "this is description of products", specification: "this is specification of products" }
        ];
    }

    getProductByJson() {
        return this.http.get('assets/products.json').map(res=> {return res.json()});
    }

    getProductDetailById(id: number) {
        let product = this.getProductList().filter(o => {
            return o.id === id;
        });

        return product[0];
    }
}