import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private isAdmin = false;

    private isUser = false;
    private authDetails = {
        "member": { edit: true, delete: false }
    }
    constructor() { }

    checkIsAdmin() {
        return this.isAdmin;
    }
    checkIsUser() {
        return this.isUser;
    }

    loginAsUser() {
        this.isUser = true;
        console.log("working");
    }

    loginAsAdmin() {
        this.isAdmin = true;
        console.log("working 1");
    }

    logout() {
        this.isAdmin = false;
        this.isUser = false;
        console.log("working 4");
    }

    canEdit(moduleName) {
        return this.authDetails[moduleName].edit;
    }
    canDelete(moduleName) {
        return this.authDetails[moduleName].delete;
    }

    changePermission(moduleName) {
        this.authDetails[moduleName].edit = !this.authDetails[moduleName].edit; 
        this.authDetails[moduleName].delete = !this.authDetails[moduleName].delete; 
    }


}