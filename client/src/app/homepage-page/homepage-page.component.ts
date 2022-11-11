import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-page',
  template: `
    <h1 class="is-size-2 mt-5">
      Temporary home page
    </h1>
  `,
  styles: [
  ]
})
export class HomepagePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
