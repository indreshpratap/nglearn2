import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';
import { User } from "app/user.interface";

@Component({

    selector: 'app-hooks',
    template: `
           {{title}}
           <div>{{desc}}</div>
           <div>
           {{product.name}} --- {{product.qty}}
           </div>
    `
})

export class HooksComponent implements OnInit, OnDestroy, OnChanges {

    @Input()
    title: string = "Initial title";
    @Input()
    desc: string = "Initial desc";
    @Input() 
    product:any;

    constructor() {
        console.log("Hooks constructor", this.title);
    }

    ngOnInit() {
        console.log("Hooks ngOnInit");

        // let user:User = {"name":"fsd" , testFunc(){ }};
    }

    ngOnDestroy(): void {
        console.log("Hooks component destroyed");
    }

    ngOnChanges(changes: SimpleChanges): void {
       
        console.log("Hooks onchanges", changes);

        if (changes['title']) {
            let change: SimpleChange = changes['title'];
            if (!change.isFirstChange()) {
                if (confirm("Title has been changed,\n Do you accept it?")) {
                    // do nothing
                } else {
                    this.title = change.previousValue;
                }
            }
        }

    }
}

