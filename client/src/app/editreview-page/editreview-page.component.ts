import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editreview-page',
  template: `
    <div class="box mt-5">
      <h1 class="mt-2 is-size-4">Editing review with Id {{reviewId}}</h1>

      <!-- TODO: Fetch review data using reviewId (already got this) and populate textarea with review text -->
      <!-- Then handle saving and deleting. Then, after these are done, return them to the home page -->
      <textarea class="textarea"></textarea>

      <div class="mt-2">
        <button class="button is-warning mr-2">Delete</button>
        <button class="button is-info">Save</button>
      </div>
      
      
    </div>
  `,
  styles: [
  ]
})
export class EditreviewPageComponent implements OnInit {

  reviewId:string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviewId = <string>this.route.snapshot.paramMap.get('reviewId');
  }

}
