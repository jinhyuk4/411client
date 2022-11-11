import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchtoolService } from '../searchtool.service';
import { MovieInfo } from '../movieinfo';

@Component({
  selector: 'app-movieinfo',
  template: `
    <div class="card mt-5">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Avengers: Infinity War  movie Id: {{movieId}}</p>
             
              <p class="subtitle is-6">Released 2020</p>
            </div>
          </div>

          <div class="content">
            <strong>Directed by:</strong> Joe Russo
            <br>
            <strong>Average Ratings (imdb):</strong> 8.7
            <br>
            <strong>Genre:</strong> Fantasy
            <br>
            <strong>Show Runtime:</strong> 2h 37m
            <br>
            <strong>Actors:</strong> <a href="#"> Robert Downey</a> <a href="#"> Chris Evans</a> 
            <br>
          </div>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class MovieinfoComponent implements OnInit {

  movieId:string = "";
  movieInfo:MovieInfo = new MovieInfo();
  constructor(private route: ActivatedRoute, private searchtoolService:SearchtoolService) { }

  ngOnInit(): void {
    let movieId = <string>this.route.snapshot.paramMap.get('movieId');
    this.movieId = movieId
    this.fetchMovie(movieId)
  }

  fetchMovie(movieId:string): void {
    this.searchtoolService.getMovieById(movieId)
      .subscribe(fetchedMovieInfo => {
        this.movieInfo = <MovieInfo>fetchedMovieInfo
      })
  }

}
