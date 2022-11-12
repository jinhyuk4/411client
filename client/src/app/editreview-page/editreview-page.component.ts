import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';
import { ActivatedRoute } from '@angular/router';
import {v4 as uuid} from "uuid";


@Component({
  selector: 'app-editreview-page',
  template: `
    <div class="box mt-5">
      <h1 class="mt-2 is-size-4">Editing review with Id {{reviewId}}</h1>

      <!-- TODO: Fetch review data using reviewId (already got this) and populate textarea with review text -->
      <!-- Then handle saving and deleting. Then, after these are done, return them to the home page -->
      <textarea class="textarea"[(ngModel)]="updated_review_text"></textarea>

      <div class="mt-2">
        <button (click)="deleteReview()"class="button is-warning mr-2">Delete</button>
        <button (click)="updateReview()"class="button is-info">Save</button>
      </div>
      
      
    </div>
  `,
  styles: [
  ]
})
export class EditreviewPageComponent implements OnInit {

  reviewId:string = '';
  updated_review_text:string = '';
  contentId:string = '';

  constructor(private reviewsService:ReviewsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewId = <string>this.route.snapshot.paramMap.get('reviewId');
  }

  updateReview() {
    console.log('uuid test: ' + uuid())
    const reviewUpdate = {
      // content_id: `${this.contentId}`,
      // user_id: '1',
      review_id: this.reviewId,
      review_text: `${this.updated_review_text}`,
      // rating: this.rating
    }
    this.reviewsService.updateReview(reviewUpdate)
      .subscribe(review => {
        // console.log('added review')
        console.log(review)
      })
  }

  deleteReview() {
    console.log('uuid test: ' + uuid())
    const reviewUpdate = {
      // content_id: `${this.contentId}`,
      // user_id: '1',
      review_id: this.reviewId,
      // review_text: `${this.updated_review_text}`,
      // rating: this.rating
    }
    this.reviewsService.deleteReview(reviewUpdate)
      .subscribe(review => {
        // console.log('added review')
        console.log(review)
      })
  }

}
