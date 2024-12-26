import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-five',
    templateUrl: './feedback-style-five.component.html',
    styleUrls: ['./feedback-style-five.component.scss']
})
export class FeedbackStyleFiveComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    testimonialsSlides: OwlOptions = {
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
    }

}