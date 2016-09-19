import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    login(username, password): boolean {
        this.http.post('http://localhost:9000/api/login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(response => console.log('resp', response.json()))
            .catch(this.handleError);
        return true;
    }

    handleError(error: any): void {
        console.log('Error', error);
    }
}