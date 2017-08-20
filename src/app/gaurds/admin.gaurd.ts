import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from "app/gaurds/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private authService:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.checkIsAdmin();
    }
}