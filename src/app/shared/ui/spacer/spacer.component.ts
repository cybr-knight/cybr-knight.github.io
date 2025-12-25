import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spacer',
    templateUrl: './spacer.component.html',
    styleUrl: './spacer.component.css',
    standalone: true,
})
export class SpacerComponent {
  @Input()
  characterLength!: number;
}
