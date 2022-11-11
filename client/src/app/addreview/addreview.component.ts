import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { Review } from '../review';

@Component({
  selector: 'app-addreview',
  template: `
    <form (submit)="addReview()">
      <h1 class="is-size-4 mt-5 pt-5">Add Your Review</h1>
      <div class="field">
        <label class="label">Review Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Select rating</label>
        <div class="control">
          <div class="select">
            <select [(ngModel)]="_rating" name="rating">
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
          <input type="submit" class="button is-link" value="Submit Review"/>
        </div>
      </div>

    </form>
  `,
  styles: [
  ]
})
export class AddreviewComponent implements OnInit {

 
  _rating:number = 4;
  _reviewText:string = '';

  constructor(private reviewsService:ReviewsService) { }

  ngOnInit(): void {
  }

  addReview() {
    const newReview = {
      _id: 'TODO',
      _userId: 'TODO',
      _reviewText: this._reviewText,
      _userRating: this._rating
    }
    this.reviewsService.addReview(newReview)
      .subscribe(review => {
        console.log('added review')
      })
  }
  

}
