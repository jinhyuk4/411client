import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Review } from './review';
import {map} from 'rxjs/operators'
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  headers:HttpHeaders = new HttpHeaders();
  constructor(private http:HttpClient) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', '*')
    this.headers = headers
   }

  // GET all reviews as JSON
  getReviews() {
    return this.http.get('http://localhost:3000/api/URL-IN-MY-BACKEND').pipe(map(res => res));
  }

  // Get reviews by content Id
  getReviewsByContentId(contentIdData:HttpParams) {
    console.log('contentId data: ', contentIdData.get('contentId'))
    console.log(this.http.get('http://localhost:3306/reviews/contentId', { headers: this.headers, params: contentIdData}).pipe(map(res => res)))
    return this.http.get('http://localhost:3306/reviews/contentId', { headers: this.headers, params: contentIdData}).pipe(map(res => res))
  }

  getAdvancedQueryReview(){
    console.log(this.http.get('http://localhost:3306/advancedquery1', { headers: this.headers}).pipe(map(res => res)))
    return this.http.get('http://localhost:3306/reviews/advancedquery1', { headers: this.headers}).pipe(map(res => res))
  }

  getAdvancedQueryReview2(){
    console.log(this.http.get('http://localhost:3306/reviews/advancedquery2', { headers: this.headers}).pipe(map(res => res)))
    return this.http.get('http://localhost:3306/reviews/advancedquery2', { headers: this.headers}).pipe(map(res => res))
  }

  // CREATE and store new review
  addReview(newReview:Object) { // TODO: is this type JSON or object?
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3306/reviews', newReview, {headers: headers}).pipe(map(res => res));
  }

  // DELETE review by its id
  deleteReview(reviewDelete:Object){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const httpOptions = {
      headers: headers,
      body: reviewDelete,
  };
    // return this.http.delete('http://localhost:3306/reviews', reviewDelete, {headers: headers}).pipe(map(res => res));
    return this.http.delete('http://localhost:3306/reviews', httpOptions).pipe(map(res => res));
  }

  updateReview(reviewUpdate:Object){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3306/reviews', reviewUpdate, {headers: headers}).pipe(map(res => res));
  }
}
