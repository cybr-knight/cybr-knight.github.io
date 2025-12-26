import {Component} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBar} from '@angular/material/progress-bar';
import {CardComponent} from '../../shared/ui/card/card.component';
import {SortProjectsByYearPipe} from '../../shared/pipes/sort-projects-by-year.pipe';
import {ProjectsService} from "../data-access/projects.service";
import {Colours} from '../../shared/enums/colours';
import {Project} from '../../shared/models/project';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-projects',
    imports: [
        AsyncPipe,
        NgOptimizedImage,
        MatCardModule,
        MatButtonModule,
        MatProgressBar,
        CardComponent,
        SortProjectsByYearPipe
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    readonly Blue = Colours.Blue;

    projects$: Observable<Project[]>;

    constructor(private projectService: ProjectsService) {
        this.projects$ = this.projectService.getProjects();
    }
}
