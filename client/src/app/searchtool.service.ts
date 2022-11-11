import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SearchtoolService {

  constructor(private http:HttpClient) { }

  getMoviesByFilter() {
    return this.http.get('http://localhost:3000/api/URL-IN-MY-BACKEND').pipe(map(res => res))
  }

  getMovieById(id:string) {
    return this.http.get('http://localhost:3000/api/URL-IN-MY-BACKEND/id').pipe(map(res => res))
  }

  
}
