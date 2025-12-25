import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coloured-box',
  standalone: true,
  imports: [],
  templateUrl: './coloured-box.component.html',
  styleUrl: './coloured-box.component.css'
})
export class ColouredBoxComponent {
  @Input()
  colour!: string;
}
