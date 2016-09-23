import { Component } from '@angular/core';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login.component.html'
})

export class LoginComponent {
    loggingIn: boolean = false;

    constructor(private userService: UserService, private router: Router) { }

    tryLogin(username: string, password: string): void {
        // show logging screen
        this.loggingIn = true;

        // attempt login
        if(this.userService.login(username, password)) {
            // redirect
            this.router.navigate([ '/main' ]);
        } else {
            // not logging in
            this.loggingIn = false;

            // show error
            console.log('Nope');
        }
    }
}