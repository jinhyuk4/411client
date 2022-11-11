import { Component, OnInit } from '@angular/core';
import { Movie } from '../review';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-viewmovieslist-page',
  template: `
    <h1 class="is-size-3 mt-5">
      Displying movies released after {{releasedAfter}}, 
      with minimum rating {{minRating}}, minimum playing time {{minLen}}, and
      genre {{genre}}.
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
export class ViewmovieslistPageComponent implements OnInit {

  movies:Movie[] = [
    {
      movie_id: 'kwjlkjxf',
      release_year: 1995,
      ratings: 2,
      movie_name: 'Cool Movie',
      genre: 'Drama',
      length: 3
    },
    {
      movie_id: 'sfdkjwlkj',
      release_year: 1998,
      ratings: 4,
      movie_name: 'Another Movie',
      genre: 'Thriller',
      length: 3
    }
  ];
  releasedAfter:number = 0;
  minRating:number = 0;
  genre:string = '';
  minLen:number = 0;
  constructor(private router:Router, private route:ActivatedRoute, private service:MoviesService) { }

  ngOnInit(): void {
    let movieId = <string>this.route.snapshot.paramMap.get('movieId');
    this.releasedAfter = <number><unknown>this.route.snapshot.paramMap.get('releasedAfter');
    this.minRating = <number><unknown>this.route.snapshot.paramMap.get('minRating');
    this.genre = <string><unknown>this.route.snapshot.paramMap.get('genre');
    this.minLen = <number><unknown>this.route.snapshot.paramMap.get('minLen');

    const params = new HttpParams()
      .set('release_year', this.releasedAfter)
      .set('ratings', this.minRating)
      .set('genre', this.genre)
      .set('length', this.minLen)

    this.service.getMoviesByFilter(params).subscribe(result => {
      console.log(result);
      this.movies = <Movie[]>result;
    })
  }

  onViewDetails(id:string) {
    this.router.navigate(
      ['/movies', id]
    );
  }


}


