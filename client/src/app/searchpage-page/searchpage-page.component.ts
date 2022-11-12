import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpage-page',
  template: `
    <!-- SEARCH USING FILTERS -->
    <div class="box">
      <h1 class="is-size-5 mt-5">Search Movies by Applying Filters</h1>

      <!-- GENRES FILTER -->
      <h1 class="is-size-6 mt-5">Select Genres</h1>
      <div class="control">
        <label class="radio">
          <input type="radio" name="answer" value="Mystery" [(ngModel)]="genre">
            Mystery
        </label>
        <label class="radio">
          <input type="radio" name="answer" value="Thriller"  [(ngModel)]="genre">
            Thriller
        </label>
        <label class="radio">
          <input type="radio" name="answer" value="Sci-Fi" [(ngModel)]="genre">
            Sci-Fi
        </label>
        <label class="radio">
          <input type="radio" name="answer" value="Romance" [(ngModel)]="genre">
            Romance
        </label>
      </div>

      <!-- RATINGS FILTER -->
      <div class="field">
        <h1 class="is-size-6 mt-5">Select Minimum Rating</h1>
        <div class="control">
          <div class="select" >
            <select [(ngModel)]="minRating">
              <option value="0">0+</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
      </div>

      <!-- RELEASED AFTER FILTER -->
      <h1 class="is-size-6 mt-5">Released After</h1>
      <input class="input is-normal mt-2" [(ngModel)]="releasedAfter" type="text" placeholder="Enter year here (e.g. 1995)">

      <!-- MIN LENGTH FILTER -->
      <h1 class="is-size-6 mt-5">Minimum Runtime</h1>
      <input class="input is-normal mt-2" [(ngModel)]="minLen" type="text" placeholder="Enter minimum movie length here">

      <!-- BTN -->
      <button class="button is-info mt-4" (click)="onFilterSearch()">Search Using Filters</button>

    </div>

    <!-- SEARCH USING TITLE -->
    <div class="box mt-5 pt-5">
      <h1 class="is-size-5">Search Movies</h1>
      <input [(ngModel)]="movieTitle" class="input is-normal mt-2" type="text" placeholder="Enter movie title here">

      <!-- BTN -->
      <button class="button is-info mt-4" (click)="onTitleSearch()">Search</button>
    </div>
    `,
  styles: [
  ]
})
export class SearchpagePageComponent implements OnInit {

  // FILTER MODEL VARIABLES
  releasedAfter:number = 1950;
  minRating:number = 0;
  genre:string = '';
  minLen:number = 0

  // SEARCH BY TITLE VARIABLES
  movieTitle:string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onFilterSearch() {
    this.router.navigate(
      ['/movies', this.releasedAfter, this.minRating, this.genre, this.minLen]
    );
  }

  onTitleSearch() {
    this.router.navigate(
      ['/movies/title', this.movieTitle]
    );
  }

}

// var releaseDate = req.body.release_year
//   var genreMovie = req.body.genre
//   var ratingsMovie = req.body.ratings
//   var lenMovie = req.body.length
