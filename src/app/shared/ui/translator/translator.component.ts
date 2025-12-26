import {Component, input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-translator',
  imports: [
      MatButtonModule,
  ],
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.css',
})
export class TranslatorComponent {
  text = input.required<string>();
  translation = input.required<string>();

  translate = false;

  handleTranslate() {
    this.translate = !this.translate;

    const element = document.getElementById('translator-text');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
  }
}
