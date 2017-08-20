import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/gaurds/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-approot',
  templateUrl: './approot.component.html',
  styleUrls: ['./approot.component.css']
})
export class ApprootComponent implements OnInit {

  isadmin = false;
  MODULE_NAME = "member";
 

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(type: number) {
    switch (type) {
      case 1: this.authService.loginAsAdmin(); this.isadmin = this.authService.checkIsAdmin(); break;
      case 2: this.authService.loginAsUser(); break;
      default: break;
    }
  }

  logout() {
    this.authService.logout();
    this.isadmin = false;
    this.router.navigateByUrl("/second");
    
  }

  // below are computed properties
  get canEdit() {
    return this.authService.canEdit(this.MODULE_NAME);
  }
  get canDelete() {
    return this.authService.canDelete(this.MODULE_NAME);
  }

  tooglePermission() {
    this.authService.changePermission(this.MODULE_NAME);
  }
}
