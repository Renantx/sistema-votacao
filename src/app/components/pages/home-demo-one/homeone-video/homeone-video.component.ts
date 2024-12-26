import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-homeone-video',
    templateUrl: './homeone-video.component.html',
    styleUrls: ['./homeone-video.component.scss']
})
export class HomeoneVideoComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}