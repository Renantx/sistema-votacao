import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-homefour-video',
    templateUrl: './homefour-video.component.html',
    styleUrls: ['./homefour-video.component.scss']
})
export class HomefourVideoComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}