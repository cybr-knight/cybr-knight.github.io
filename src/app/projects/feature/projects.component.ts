import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { ColouredBoxComponent } from '../../shared/ui/coloured-box/coloured-box.component';
import { AnimatedTextComponent } from '../../shared/ui/animated-text/animated-text.component';
import { TerminalTextComponent } from '../../shared/ui/terminal-text/terminal-text.component';
import { SortProjectsByYearPipe } from '../../shared/pipes/sort-projects-by-year.pipe';
import { ProjectsService } from "../data-access/projects.service";
import { Colours } from '../../shared/enums/colours';
import { Project } from '../../shared/models/project';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-projects',
    imports: [
        NgFor,
        NgIf,
        AsyncPipe,
        NgOptimizedImage,
        MatCardModule,
        MatButtonModule,
        MatProgressBar,
        ColouredBoxComponent,
        AnimatedTextComponent,
        TerminalTextComponent,
        SortProjectsByYearPipe
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly Dialogue = "My favourite aspect of programming is being able to create almost anything that I can think of. Here are some of my personal favourite projects."
  readonly TerminalText = ["My Projects"];
  readonly Blue = Colours.Blue;

  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectsService) {
    this.projects$ = this.projectService.getProjects(); 
  }
}
