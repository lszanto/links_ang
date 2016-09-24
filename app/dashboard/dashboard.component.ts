import { Component, OnInit } from '@angular/core';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

import { Link } from '../classes/link';
import { LinksService } from '../services/links.service';

@Component({
    selector: 'dashboard-comp',
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    links: Link[] = [];

    constructor(private router: Router, private linksService: LinksService) {
        if(!localStorage.getItem('jwt')) this.router.navigate([ '/login' ]);
    }

    ngOnInit() {
        this.linksService.getLinks()
            .then(links => this.links = links);
    }
}