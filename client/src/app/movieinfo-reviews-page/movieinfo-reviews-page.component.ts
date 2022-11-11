import { Component, OnInit } from '@angular/core';
import { MovieinfoComponent } from '../movieinfo/movieinfo.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { AddreviewComponent } from '../addreview/addreview.component';

@Component({
  selector: 'app-movieinfo-reviews-page',
  template: `
    <p>
      <app-movieinfo></app-movieinfo>
      <app-reviews></app-reviews>
      <app-addreview></app-addreview>
    </p>
  `,
  styles: [
  ]
})
export class MovieinfoReviewsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
