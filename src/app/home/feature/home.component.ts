import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { ColouredBoxComponent } from '../../shared/ui/coloured-box/coloured-box.component';
import { TerminalTextComponent } from '../../shared/ui/terminal-text/terminal-text.component';
import { Colours } from '../../shared/enums/colours';

@Component({
    selector: 'app-home',
    imports: [
        NgOptimizedImage,
        ColouredBoxComponent,
        TerminalTextComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly Blue = Colours.Blue;
  readonly Green = Colours.Green;
  readonly textList = ["Hello world", "I'm Corey", "I code stuff"];
}
