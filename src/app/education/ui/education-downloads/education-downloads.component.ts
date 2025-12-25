import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-education-downloads',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './education-downloads.component.html',
  styleUrl: './education-downloads.component.css'
})
export class EducationDownloadsComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef<EducationDownloadsComponent>){
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
