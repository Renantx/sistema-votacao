import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-homethree-video',
    templateUrl: './homethree-video.component.html',
    styleUrls: ['./homethree-video.component.scss']
})
export class HomethreeVideoComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}