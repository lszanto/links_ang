import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Link } from '../classes/link';

@Injectable()
export class LinksService {
    private headers = new Headers({ 'Content-Type': 'application/json', authorization: 'bearer ' + localStorage.getItem('jwt') });
    private uid = localStorage.getItem('uid');

    constructor(private http: Http) { }

    getLinks(): Promise<Link[]> {
        return this.http.get('http://localhost:9000/api/user/' + this.uid)
                    .toPromise()
                    .then(response => response.json().Links as Link[])
                    .catch(this.handleError);
    }

    addLink(title: String, url: String) {
        this.http.post('http://localhost:9000/api/links', JSON.stringify({ url: url, title: title }), { headers: this.headers })
        .subscribe(
            response => {
                console.log(response);
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