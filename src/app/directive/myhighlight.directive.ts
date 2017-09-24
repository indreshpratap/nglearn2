import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges, HostListener } from "@angular/core";

@Directive({
    selector: "[highlighter]"

})
export class MyHightlightDirective implements OnInit, OnChanges {

    ngOnChanges(changes: SimpleChanges): void {
        this.highlightColor = changes.highlightColor.currentValue;
        this.changeColor();
    }

    @Input("highlighter") highlightColor;

    constructor(private el: ElementRef) {
    }

    ngOnInit(): void {
        this.changeColor();
    }

    changeColor() {
        this.el.nativeElement.style.backgroundColor = this.highlightColor || "yellow";
    }

}

@Directive({
    selector: "[focushighlight]"

})
export class FocusHightlightDirective implements OnChanges {

    @Input("focushighlight") highlightColor;

    constructor(private el: ElementRef) { }


    ngOnChanges(changes: SimpleChanges): void {
        this.highlightColor = changes.highlightColor.currentValue;
    }


    @HostListener("mouseover")
    highlight() {
        this.changeColor(this.highlightColor);
    }

    @HostListener("mouseleave")
    removeBG() {
        this.changeColor('transparent');
    }

    changeColor(currentColor) {

        this.el.nativeElement.style.backgroundColor = currentColor;
    }

}