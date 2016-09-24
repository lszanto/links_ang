import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http, private router: Router) { }

    login(username, password) {
        this.http.post('http://localhost:9000/api/login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
        .subscribe(
            response => {
                localStorage.setItem('jwt', response.json().token);
                localStorage.setItem('uid', response.json().user.ID);
                this.router.navigate([ '/main' ]);
            },
            error => {
                this.handleError(error);
            }
        );
    }

    handleError(error: any): void {
        console.log('Error', error);
    }
}