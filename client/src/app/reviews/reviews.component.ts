import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-reviews',
  template: `

    <div  class="mt-5 pt-5" >
      <h1 class="is-size-4">Reviews on this movie</h1>
      <div class="box" *ngFor="let review of reviews">
          <div class="content">
            <p>
              <strong>{{review.user_id}}</strong> <small> @{{review.user_id}}</small>
              <br>
              {{review.review_text}}
            </p>
            <button class="button" (click)="onClickEditReview(review.review_id)">Edit Review</button>
          </div>
        </div>
    </div>
  `,
  styles: [
  ],
  providers: [ReviewsService]
})
export class ReviewsComponent implements OnInit {

  reviews:Review[] = [
    // {
    //   _id: '0',
    //   _userId: '39920384johnsmith',
    //   _rating: 4,
    //   _reviewText: 'fun movie!'
    // },
    // {
    //   _id: '1',
    //   _userId: '39920384ellemsmith',
    //   _rating: 0,
    //   _reviewText: 'terrible!'
    // }
  ];
  review:Review = new Review();

  constructor(private reviewsService:ReviewsService, private router: Router, private route:ActivatedRoute) { }


  ngOnInit(): void {
    let contentId = <string>this.route.snapshot.paramMap.get('contentId');


    const params = new HttpParams()
      .set('contentId', contentId)
    this.reviewsService.getReviewsByContentId(params)
      .subscribe(reviews => {
          console.log(reviews);
          this.reviews = <Review[]>reviews
        }
      )
  }

  onClickEditReview(reviewId:string) {
    this.router.navigate(['/edit',reviewId])
  }

}
