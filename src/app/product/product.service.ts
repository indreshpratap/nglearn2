import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    getProductList(): Array<any> {
        return [
            { id: 1, name: "Shirt",  description: "this is description of products",specification: "this is specification of products" },
            { id: 2, name: "Pants",  description: "this is description of products",specification: "this is specification of products" },
            { id: 3, name: "Shoes",  description: "this is description of products",specification: "this is specification of products" },
            { id: 4, name: "Jeans",  description: "this is description of products",specification: "this is specification of products" },
            { id: 5, name: "Jacket", description: "this is description of products",specification: "this is specification of products" }
        ];
    }

    getProductDetailById(id: number) {
        let product = this.getProductList().filter(o => {
            return o.id === id;
        });
        
        return product[0];
    }
}