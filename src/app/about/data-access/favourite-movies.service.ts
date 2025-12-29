import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movie } from "../../core/models/movie";
import { Observable } from "rxjs";

const PATH = './assets/data/movies.json'

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(PATH);
  }
}
