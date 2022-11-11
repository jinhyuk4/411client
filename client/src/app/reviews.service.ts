import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Review } from './review';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }

  // GET all reviews as JSON
  getReviews() {
    return this.http.get('http://localhost:3000/api/URL-IN-MY-BACKEND').pipe(map(res => res));
  }

  // CREATE and store new review
  addReview(newReview:Object) { // TODO: is this type JSON or object?
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/URL-IN-MY-BACKEND', newReview, {headers: headers}).pipe(map(res => res));
  }

  // DELETE review by its id
  deleteReview(id:String){
    return this.http.delete('http://localhost:3000/api/URL-IN-MY-BACKEND/' + id).pipe(map(res => res));
  }

 
}
