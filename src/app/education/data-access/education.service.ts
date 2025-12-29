import { Injectable } from '@angular/core';
import { Education } from '../../core/models/education';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PATH = './assets/data/education.json';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  getEducation(): Observable<Education[]> {
   return this.http.get<Education[]>(PATH)
  }
}
