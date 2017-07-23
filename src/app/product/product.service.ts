import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    getProductList(): Array<any> {
        return [
            { id: 1, name: "Shirt" },
            { id: 2, name: "Pants" },
            { id: 3, name: "Shoes" },
            { id: 4, name: "Jeans" },
            { id: 5, name: "Jacket" }
        ];
    }
}