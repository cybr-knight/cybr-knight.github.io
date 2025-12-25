import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-coloured-box',
    templateUrl: './coloured-box.component.html',
    styleUrl: './coloured-box.component.css',
    standalone: true,
})
export class ColouredBoxComponent {
  @Input()
  colour!: string;
}
