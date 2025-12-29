import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '../../core/models/job';

@Pipe({
  name: 'sortExperienceByYear',
  standalone: true
})
export class SortExperienceByYearPipe implements PipeTransform {

  transform(jobs: Job[]): Job[] {
    return jobs.sort((a, b): number => {return parseInt(b.startDate) - parseInt(a.startDate)});
  }

}
