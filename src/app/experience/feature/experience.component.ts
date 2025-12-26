import {Component} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBar} from '@angular/material/progress-bar';
import {ExperienceService} from "../data-access/experience.service";
import {SortExperienceByYearPipe} from '../../shared/pipes/sort-experience-by-year.pipe';
import {CardComponent} from '../../shared/ui/card/card.component';
import {Job} from '../../shared/models/job';
import {Colours} from '../../shared/enums/colours';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-experience',
    imports: [
        MatCardModule,
        NgOptimizedImage,
        SortExperienceByYearPipe,
        CardComponent,
        MatProgressBar,
        AsyncPipe
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
    readonly Blue = Colours.Blue;

    jobs$: Observable<Job[]>;

    constructor(private experienceService: ExperienceService) {
        this.jobs$ = this.experienceService.getExperience();
    }
}
