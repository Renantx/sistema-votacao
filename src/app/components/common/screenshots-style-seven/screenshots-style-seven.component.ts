import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-screenshots-style-seven',
    templateUrl: './screenshots-style-seven.component.html',
    styleUrls: ['./screenshots-style-seven.component.scss']
})
export class ScreenshotsStyleSevenComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    screenshotsSlides: OwlOptions = {
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
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