import { Component } from '@angular/core';
import { TerminalTextComponent } from '../../shared/ui/terminal-text/terminal-text.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-keyboards',
    imports: [
        TerminalTextComponent,
        NgOptimizedImage
    ],
    templateUrl: './keyboards.component.html',
    styleUrl: './keyboards.component.css'
})
export class KeyboardsComponent {

}
