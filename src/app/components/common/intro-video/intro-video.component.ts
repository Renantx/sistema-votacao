import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-intro-video',
    templateUrl: './intro-video.component.html',
    styleUrls: ['./intro-video.component.scss']
})
export class IntroVideoComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}