import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-four',
    templateUrl: './feedback-style-four.component.html',
    styleUrls: ['./feedback-style-four.component.scss']
})
export class FeedbackStyleFourComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    feedbackTabSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		dots: true,
		margin: 30,
		center: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		]
    }

}