import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  standalone: true,
  imports: [],
  templateUrl: './animated-text.component.html',
  styleUrl: './animated-text.component.css'
})
export class AnimatedTextComponent {
  readonly IntervalTime = 7;
  
  @Input()
  text!: string;

  displayedText: string;

  constructor() {
    this.displayedText = "";
  }

  ngOnInit() {
    this.animateText();
  }

  animateText(): void  {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index >= this.text.length) {
        clearInterval(intervalId);
        return;
      } 
      this.displayedText += this.text[index];
      index++;
    }, this.IntervalTime);
  }
}
