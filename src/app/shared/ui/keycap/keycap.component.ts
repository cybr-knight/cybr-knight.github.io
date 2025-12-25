import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-keycap',
    templateUrl: './keycap.component.html',
    styleUrl: './keycap.component.css',
    standalone: true,
})
export class KeycapComponent {
    @Input()
    character!: string;
}
