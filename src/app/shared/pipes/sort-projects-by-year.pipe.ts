import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../../core/models/project';

@Pipe({
  name: 'sortProjectsByYear',
  standalone: true
})
export class SortProjectsByYearPipe implements PipeTransform {

  transform(projects: Project[]): Project[] {
    return projects.sort((a, b): number => {return b.year - a.year});
  }
  
}
