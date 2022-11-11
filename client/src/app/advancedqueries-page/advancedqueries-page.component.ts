import { Component, OnInit } from '@angular/core';

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
      <button class="button mt-3">Run Query</button>
    </div>
    <div class="box">
      <h1 class="is-size-3 mt-5">Advanced Query 2:</h1>
      <p>
      SELECT movie_name, ratings FROM Movies m JOIN Movies_Cast c ON m.movie_id=c.movie_id JOIN 
      Actors a ON c.actor_Id=a.actor_Id WHERE actor_name = 'Robert De Niro' AND ratings> 
      (SELECT AVG(ratings) FROM Movies m1 JOIN Movies_Cast c1 ON m1.movie_id=c1.movie_id JOIN Actors 
      a1 ON c1.actor_Id=a1.actor_Id WHERE actor_name = 'Robert De Niro') ORDER BY ratings DESC LIMIT 15
      </p>
      <button class="button mt-3">Run Query</button>
    </div>
  `,
  styles: [
  ]
})
export class AdvancedqueriesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
