import { Component, OnInit } from '@angular/core';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
    selector: 'dashboard-comp',
    templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    constructor(private router: Router) {
        if(!localStorage.getItem('jwt')) this.router.navigate([ '/login' ]);
    }

    ngOnInit() {
    }
}