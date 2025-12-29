import {Component, input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-card',
    imports: [
        NgClass
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
    colour = input<"primary" | "secondary" | "tertiary">("primary");
}
