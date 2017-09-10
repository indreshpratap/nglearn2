import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() errors;
  @Input() label;
  @Input() msgs;
  constructor() { }

  ngOnInit() {
  }

}
