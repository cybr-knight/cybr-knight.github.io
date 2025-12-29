import {Component} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SortEducationByDatePipe} from '../../shared/pipes/sort-education-by-date.pipe';
import {EducationDownloadsComponent} from '../ui/education-downloads/education-downloads.component';
import {CardComponent} from '../../shared/ui/card/card.component';
import {Education} from '../../core/models/education';
import {EducationService} from "../data-access/education.service";
import {Observable} from 'rxjs';

@Component({
    selector: 'app-education',
    imports: [
        NgOptimizedImage,
        MatCardModule,
        MatButtonModule,
        MatBottomSheetModule,
        AsyncPipe,
        SortEducationByDatePipe,
        CardComponent,
        MatProgressBarModule,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})
export class EducationComponent {
    educationList$: Observable<Education[]>;

    constructor(private educationService: EducationService, private _bottomSheet: MatBottomSheet) {
        this.educationList$ = this.educationService.getEducation();
    }

    openBottomSheet(): void {
        this._bottomSheet.open(EducationDownloadsComponent);
    }
}
