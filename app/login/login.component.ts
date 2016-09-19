import { Component } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
    loggingIn: boolean = false;

    constructor(private userService: UserService) { }

    tryLogin(username: string, password: string): void {
        this.loggingIn = true;

        this.userService.login(username, password);
    }
}