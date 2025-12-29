import { Injectable } from '@angular/core';
import { Job } from '../../core/models/job';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PATH = '/assets/data/jobs.json'; 

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getExperience(): Observable<Job[]> {
    return this.http.get<Job[]>(PATH);
  }
}
