import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

// WORKING ON THIS NOW

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMoviesByFilter(filters:Object) {
    return this.http.get('http://localhost:3000/api/movies', filters).pipe(map(res => res))
  }
}
