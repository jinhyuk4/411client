import { Component, OnInit } from '@angular/core';
import { Review } from '../review';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import {v4 as uuid} from "uuid";

@Component({
  selector: 'app-advancedqueries-page',
  template: `
    <div class="box">
      <h1 class="is-size-3 mt-5">Advanced Query 1:</h1>
      <p>
      SELECT actor_name, AVG(ratings) as avg_show_rating, AVG(release_year) as avg_release_year
      FROM Shows s JOIN Shows_Cast c ON s.show_id=c.show_id JOIN Actors a ON c.actor_Id=a.actor_Id
      GROUP BY actor_name
      HAVING AVG(ratings)>7
      ORDER BY avg_show_rating DESC
      LIMIT 15
      </p>
      <button class="button mt-3" (click)="onAdvancedQuery1()">Run Query</button>

      <div *ngFor="let result of queryOneResult">
        <h1 class="is-size-4">Actor name: {{result.actor_name}}</h1>
        <h1 class="is-size-5">Avg release year: {{result.avg_release_year}}</h1>

        <h1 class="is-size-5">Avg show rating: {{result.avg_show_rating}}</h1>

      </div>
    </div>
    <div class="box">
      <h1 class="is-size-3 mt-5">Advanced Query 2:</h1>
      <p>
      SELECT movie_name, ratings FROM Movies m JOIN Movies_Cast c ON m.movie_id=c.movie_id JOIN 
      Actors a ON c.actor_Id=a.actor_Id WHERE actor_name = 'Robert De Niro' AND ratings> 
      (SELECT AVG(ratings) FROM Movies m1 JOIN Movies_Cast c1 ON m1.movie_id=c1.movie_id JOIN Actors 
      a1 ON c1.actor_Id=a1.actor_Id WHERE actor_name = 'Robert De Niro') ORDER BY ratings DESC LIMIT 15
      </p>
      <button class="button mt-3" (click)="onAdvancedQuery2()">Run Query</button>
      <div *ngFor="let result of queryTwoResult">
        <h1 class="is-size-4">Movie name: {{result.movie_name}}</h1>
        <h1 class="is-size-5">Rating: {{result.ratings}}</h1>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class AdvancedqueriesPageComponent implements OnInit {

  queryOneResult: any =[]
  queryTwoResult: any = []

  constructor(private moviesService:MoviesService, private route:ActivatedRoute) { }


  ngOnInit(): void {
  }


  onAdvancedQuery1() {
    this.moviesService.getAdvancedQuery1()
      .subscribe(result => {
        console.log(result)
        this.queryOneResult = <Array<Object>>result
      })
  }

  onAdvancedQuery2() {
    this.moviesService.getAdvancedQuery2()
      .subscribe(result => {
        console.log(result)
        this.queryTwoResult = <Array<Object>> result
      })
  }

}
