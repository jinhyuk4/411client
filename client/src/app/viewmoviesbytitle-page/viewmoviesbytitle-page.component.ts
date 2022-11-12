import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../review';
import { HttpParams } from '@angular/common/http';
import { MoviesService } from '../movies.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-viewmoviesbytitle-page',
  template: `
    <h1 class="is-size-3 mt-5">
      Displying movie(s) with title {{movieTitle}}
    </h1>
    <li class="box mt-3" *ngFor="let movie of movies">
      <h1 class="is-size-3">
        {{movie.movie_name}}
      </h1>
      <p>Released in {{movie.release_year}}</p>
      <button class="button mt-2" (click)="onViewDetails(movie.movie_id)">View Details</button>
  </li>
  `,
  styles: [
  ]
})
export class ViewmoviesbytitlePageComponent implements OnInit {

  movieTitle:string = ''

  movies:Movie[] = [];

  constructor(private route:ActivatedRoute, private router:Router, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieTitle = <string>this.route.snapshot.paramMap.get('movieTitle');

    const params = new HttpParams()
      .set('movie_name', this.movieTitle)
    console.log('params: ', params)

    console.log('calling function...')
    this.moviesService.getMoviesByTitle(params) 
      .subscribe(result => {
        console.log(result)
        this.movies = <Movie[]>result
      })
  }

  onViewDetails(id:string) {
    this.router.navigate(
      ['/movies', id]
    );
  }

}
