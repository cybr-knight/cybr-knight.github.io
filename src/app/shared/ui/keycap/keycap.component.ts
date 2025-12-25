import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-keycap',
  standalone: true,
  imports: [],
  templateUrl: './keycap.component.html',
  styleUrl: './keycap.component.css'
})
export class KeycapComponent {
  @Input()
  character!: string;
}
