import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

// WORKING ON THIS NOW

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  headers:HttpHeaders = new HttpHeaders();
  constructor(private http:HttpClient) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', '*')
    this.headers = headers
   }


  getMoviesByFilter(filters:HttpParams) {
    console.log('filt')
    console.log('filters:', filters)
    console.log(this.http.get('http://localhost:3306/movies', { headers: this.headers, params: filters}).
      pipe(map(res => res)))
    return this.http.get('http://localhost:3306/movies', { headers: this.headers, params: filters}).
    pipe(map(res => res))
  }
}
