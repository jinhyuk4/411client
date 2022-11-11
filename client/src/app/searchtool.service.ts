import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SearchtoolService {

  headers:HttpHeaders = new HttpHeaders();
  constructor(private http:HttpClient) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json')
    headers.append('Access-Control-Allow-Origin', '*')
    this.headers = headers
   }

  // getMoviesByFilter() {
  //   return this.http.get('http://localhost:3000/api/URL-IN-MY-BACKEND').pipe(map(res => res))
  // }

  getMovieById(paramsData:HttpParams) {
    return this.http.get('http://localhost:3306/movies/single', { headers: this.headers, params: paramsData}).pipe(map(res => res))
  }

  
}
