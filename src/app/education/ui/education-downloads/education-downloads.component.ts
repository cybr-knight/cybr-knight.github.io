import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-education-downloads',
    imports: [MatListModule],
    templateUrl: './education-downloads.component.html',
    styleUrl: './education-downloads.component.css',
    standalone: true,
})
export class EducationDownloadsComponent {
    constructor(private _bottomSheetRef: MatBottomSheetRef<EducationDownloadsComponent>) {
    }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
