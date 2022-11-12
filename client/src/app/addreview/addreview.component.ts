import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';
import { ActivatedRoute } from '@angular/router';
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-addreview',
  template: `
    <form (submit)="addReview()">
      <h1 class="is-size-4 mt-5 pt-5">Add Your Review</h1>
      <div class="field">
        <label class="label">Review Text</label>
        <div class="control">
          <textarea class="textarea" name="reviewText" [(ngModel)]="reviewText" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Select rating</label>
        <div class="control">
          <div class="select">
            <select [(ngModel)]="rating" name="rating" name="rating">
              <option [value]="0">0</option>
              <option [value]="0">1</option>
              <option [value]="0">2</option>
              <option [value]="0">3</option>
              <option [value]="0">4</option>
              <option [value]="0">5</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <input type="submit" (click)="addReview()" class="button is-link" value="Submit Review"/>
        </div>
      </div>

    </form>
  `,
  styles: [
  ]
})
export class AddreviewComponent implements OnInit {

 
  rating:number = 4;
  reviewText:string = '';
  contentId:string = '';

  constructor(private reviewsService:ReviewsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.contentId = <string>this.route.snapshot.paramMap.get('contentId');
  }

  addReview() {
    console.log('uuid test: ' + uuid())
    const newReview = {
      content_id: `${this.contentId}`,
      user_id: '1',
      review_id: '500',
      review_text: `${this.reviewText}`,
      rating: this.rating
    }
    this.reviewsService.addReview(newReview)
      .subscribe(review => {
        // console.log('added review')
        console.log(review)
      })
  }
}
