import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! changed';
  description = "This is description";
  disableEmail = true;
  email = 'test@gmail.com';
  paraWidth = null;

  warningflag = false;

  colors = ["White", "Green", "Red"];
  items = [
    { name: "Wheat", price: { total: 10, tax: 3 } },
    { name: "Rice", price: { total: 10, tax: 3 } },
    { name: "Suger", price: { total: 10, tax: 3 } },
    { name: "Salt", price: { total: 10, tax: 3 } },
    { name: "Tea", price: { total: 10, tax: 3 } },
    { name: "Milk", price: { total: 10, tax: 3 } }
  ];
  toogleWarning() {
    this.warningflag = !this.warningflag;
  }
  alertMe(pr: any, test: MouseEvent, t2: MouseEvent) {
    console.log(pr);
    console.log(event);
    console.log(t2);
    window.alert("Hi you clicked me");
  }

  toogle() {
    this.disableEmail = !this.disableEmail;
  }

  showHook = true;
  hookTitle = "Hook Default title";
  hookDescription = "Hook Description";
  qty = 1;
  specialProduct = { name: "Special Product", qty: this.qty };

  toogleHooks() {
    this.showHook = !this.showHook;
  }
  counter = 1;
  changeHookTitle() {
    this.hookTitle = "Hook title " + ++this.counter;
  }

  changeHookDesc() {
    this.hookDescription = "Hook Description " + ++this.counter;
  }

  increaseSpecialProductQty() {
    // not detectable
    // this.specialProduct.qty += 1;

    // detectable because we changed the value of specialProduct variable
    this.specialProduct = { name: this.specialProduct.name, qty: ++this.qty };
  }


}
