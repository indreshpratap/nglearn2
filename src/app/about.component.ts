import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    template: `
    <h2>About US</h2>
    <p>This is about us page</p>
    
    <a routerLink="/products">Go to our listed product page</a> 

    `
})

export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}