import { Injectable } from '@angular/core';
import { Project } from '../../core/models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PATH = './assets/data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(PATH);
  }
}
