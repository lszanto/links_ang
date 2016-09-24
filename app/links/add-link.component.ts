import { Component } from '@angular/core';

import { LinksService } from '../services/links.service';

@Component({
    selector: 'add-link',
    templateUrl: 'app/links/add-link.component.html'
})

export class AddLinkComponent {
    constructor(private linksService: LinksService) {}

    addLink(title: String, url: String) {
        this.linksService.addLink(title, url);
    }
}