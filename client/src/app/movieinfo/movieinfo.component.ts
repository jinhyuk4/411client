import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchtoolService } from '../searchtool.service';
import { MovieInfo } from '../movieinfo';
import { HttpParams } from '@angular/common/http';

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
              <p class="title is-4">{{movieInfo.movie_name}}</p>
              <p class="subtitle is-6">Released 2020</p>
            </div>
          </div>

          <div class="content">
            <strong>Directed by:</strong> {{movieInfo.director}}
            <br>
            <strong>Average Ratings (imdb):</strong> {{movieInfo.ratings}}
            <br>
            <strong>Genre:</strong> {{movieInfo.genre}}
            <br>
            <strong>Show Runtime:</strong> {{movieInfo.length}}
            <br>
            <!-- <strong>Actors:</strong> <a href="#"> Robert Downey</a> <a href="#"> Chris Evans</a>  -->
            <!-- <br> -->
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
    let movieId = <string>this.route.snapshot.paramMap.get('contentId');
    this.movieId = movieId
    
    const params = new HttpParams()
      .set('movie_id', movieId)
    console.log(params)

    console.log('movie Id Param:' + movieId)

    this.searchtoolService.getMovieById(params)
      .subscribe(fetchedMovieInfo => {
        var movieInfoArray: Array<MovieInfo> = <MovieInfo[]>fetchedMovieInfo;
        console.log('fetched whole array: ', fetchedMovieInfo)
        console.log('fetched movie by movieId:', movieInfoArray[0])
        this.movieInfo = movieInfoArray[0]
        // this.movieInfo = (<MovieInfo>[] fetchedMovieInfo)[0];
      })
  }


}
