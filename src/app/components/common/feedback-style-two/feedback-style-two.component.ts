import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-two',
    templateUrl: './feedback-style-two.component.html',
    styleUrls: ['./feedback-style-two.component.scss']
})
export class FeedbackStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    swiperFeedbackSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		center: true,
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='ri-arrow-left-s-line'></i>",
			"<i class='ri-arrow-right-s-line'></i>",
		]
    }

}