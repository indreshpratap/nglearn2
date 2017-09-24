import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    template: `
    <h2>About US</h2>
    <p>This is about us page</p>
    
    <a routerLink="/products">Go to our listed product page</a> 

<select #rakesh (change)="setHighlight($event)">
    <option value="lightyellow">Yellow</option>
    <option value="lightgreen">GREEN</option>
    <option value="lightblue">Blue</option>
</select>
{{hightlight}}
<div class="well">
    <h3 [highlighter]="hightlight">Pipe Example</h3>
    <h3 [highlighter]="rakesh.value">high Example</h3>
    </div>
    {{range | multiplyer:3 }}
    {{'Indresh Pratap Singh'|lower}}

    <h2 [focushighlight]="rakesh.value">Highlight on Mouse over</h2>
    `
})

export class AboutComponent implements OnInit {
    range = 10;
    hightlight = "lightyellow";
    constructor() { }

    ngOnInit() { }

    setHighlight(event) {
        this.hightlight = event.target.value;
    }
}