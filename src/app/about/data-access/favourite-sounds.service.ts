import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Sound } from "../../core/models/sound";
import { Observable } from "rxjs";

const PATH = './assets/data/sounds.json';

@Injectable({
  providedIn: 'root'
})
export class FavouriteSoundsService {

  constructor(private http: HttpClient) { }

  getSounds(): Observable<Sound[]> {
    return this.http.get<Sound[]>(PATH);
  }
}
