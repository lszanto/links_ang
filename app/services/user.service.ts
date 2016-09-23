import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private token: string = '';

    constructor(private http: Http) { }

    login(username, password): Promise<object> {
        return this.http.post('http://localhost:9000/api/login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(response => response.json()['token'] as object)
            .catch(this.handleError);
    }

    handleError(error: any): void {
        console.log('Error', error);
    }
}