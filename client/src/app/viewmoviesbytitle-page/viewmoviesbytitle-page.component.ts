import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../review';

import { Router } from '@angular/router';
@Component({
  selector: 'app-viewmoviesbytitle-page',
  template: `
    <h1 class="is-size-3 mt-5">
      Displying movie(s) with title {{movieTitle}}
    </h1>
    <div class="box mt-3" *ngFor="let movie of movies">
      <h1 class="is-size-3">
        {{movie.movie_name}}
      </h1>
      <p>Released in {{movie.release_year}}</p>
      <button class="button mt-2" (click)="onViewDetails(movie.movie_id)">View Details</button>
    </div>
  `,
  styles: [
  ]
})
export class ViewmoviesbytitlePageComponent implements OnInit {

  movieTitle:string = ''

  movies:Movie[] = [];

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.movieTitle = <string>this.route.snapshot.paramMap.get('movieTitle');
  }

  onViewDetails(id:string) {
    this.router.navigate(
      ['/movies', id]
    );
  }

}
