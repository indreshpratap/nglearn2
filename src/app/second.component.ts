import {Component} from '@angular/core';

@Component({
selector:"app-second",
template:`
<div>{{description}}</div>

<a routerLink="/products">Go to products (Absolute url)</a><br>
<a routerLink="../products">Go to products (Relative url)</a>
`
})

export class SecondComponent {
description = "From second component";
}