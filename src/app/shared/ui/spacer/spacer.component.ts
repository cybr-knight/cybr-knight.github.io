import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spacer',
    imports: [],
    templateUrl: './spacer.component.html',
    styleUrl: './spacer.component.css'
})
export class SpacerComponent {
  @Input()
  characterLength!: number;
}
