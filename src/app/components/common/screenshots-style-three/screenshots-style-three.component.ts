import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-screenshots-style-three',
    templateUrl: './screenshots-style-three.component.html',
    styleUrls: ['./screenshots-style-three.component.scss']
})
export class ScreenshotsStyleThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    screenshotsSlides: OwlOptions = {
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
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
    }

}