import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-homeeight-intro',
    templateUrl: './homeeight-intro.component.html',
    styleUrls: ['./homeeight-intro.component.scss']
})
export class HomeeightIntroComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService
    ) { }

    ngOnInit(): void {}

}