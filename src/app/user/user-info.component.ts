import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
    <h2>Hello Rakesh</h2>
    <p>
        This is rakesh
    </p>
    `
})

export class UserInfoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}