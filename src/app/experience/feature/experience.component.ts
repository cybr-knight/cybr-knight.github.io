import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ExperienceService } from "../data-access/experience.service";
import { SortExperienceByYearPipe } from '../../shared/pipes/sort-experience-by-year.pipe';
import { ColouredBoxComponent } from '../../shared/ui/coloured-box/coloured-box.component';
import { Job } from '../../shared/models/job';
import { TerminalTextComponent } from '../../shared/ui/terminal-text/terminal-text.component';
import { Colours } from '../../shared/enums/colours';
import { AnimatedTextComponent } from '../../shared/ui/animated-text/animated-text.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-experience',
    imports: [
        MatCardModule,
        NgFor,
        NgIf,
        NgOptimizedImage,
        SortExperienceByYearPipe,
        ColouredBoxComponent,
        AnimatedTextComponent,
        TerminalTextComponent,
        MatProgressBar,
        AsyncPipe
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly Dialogue = "Welcome to my job experience page! As you can see, I was a Blackjack dealer long before I wrote my first program and I haven't looked back since!";
  readonly TerminalText = ["Experience"];
  readonly Blue = Colours.Blue;

  jobs$: Observable<Job[]>;

  constructor(private experienceService: ExperienceService) {
    this.jobs$ = this.experienceService.getExperience();
  }
}
