import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Colours } from '../../enums/colours';

interface IntervalObserver {
  hasFinished: boolean;
}

@Component({
  selector: 'app-terminal-text',
  standalone: true,
  imports: [],
  templateUrl: './terminal-text.component.html',
  styleUrl: './terminal-text.component.css'
})
export class TerminalTextComponent {
  readonly colours: string[];
  readonly intervalMilliseconds: number;
  readonly waitTime: number;
  readonly cursorInterval: number;
  
  displayText: string;
  currentColour: string;

  @Input()
  textList!: string[]

  @ViewChild('cursor') 
  cursorElementRef!: ElementRef;

  constructor() {
    this.colours = [Colours.DarkBlue, Colours.DarkGreen, Colours.DarkGrey];
    this.displayText = "";
    this.currentColour = this.colours[0];
    this.intervalMilliseconds = 100;
    this.waitTime = 1200;
    this.cursorInterval = 500;
  }
  
  ngOnInit() {
    this.animateConsoleText();
  }
  
  ngAfterViewInit() {
    this.animateCursor(this.cursorElementRef.nativeElement);
  }

  // periodically prints a word one character at a time
  printWord(word: string, observer: IntervalObserver): void {
    let index = 0;

    const interval = setInterval(() => {
      if (index === word.length - 1) {
        clearInterval(interval);
        observer.hasFinished = true;
      }
      this.displayText += word[index];
      index++;
    }, this.intervalMilliseconds);
  }

  // periodically deletes a word one character at a time
  deleteWord(observer: IntervalObserver): void {
    
    const interval = setInterval(() => {
      if (this.displayText === "") {
        observer.hasFinished = true;
        clearInterval(interval);
        return;
      }
      
      this.displayText = this.displayText.slice(0, -1)
    }, this.intervalMilliseconds);
  }

  printMultipleWords(observer: IntervalObserver): void {
    let textListIndex = 0;
    let coloursIndex = 0;
    this.printWord(this.textList[textListIndex], observer);
    
    const interval = setInterval(() => {
      if (!observer.hasFinished) return;
  
      // reset observer for next unit of work
      observer.hasFinished = false;
  
      // case 1: word has printed and needs to be deleted
      if(this.displayText.length > 0) {
        setTimeout(this.deleteWord.bind(this, observer), this.waitTime);
        return;
      }
  
      // case 2: move onto next word / colour
      // wrap around if reached end of array
      textListIndex = textListIndex >= (this.textList.length - 1) ? 0 : textListIndex + 1;
      coloursIndex = coloursIndex >= (this.colours.length - 1) ? 0 : coloursIndex + 1;
  
      this.currentColour = this.colours[coloursIndex]
      this.printWord(this.textList[textListIndex], observer);
    }, this.waitTime)
  }

  animateConsoleText(): void {
    if (this.textList.length === 0) return;

    // shared memory to check when the process of printing a word has finished
    const observer: IntervalObserver = {
      hasFinished: false
    }

    if (this.textList.length > 1){
      this.printMultipleWords(observer);
    } else {
      this.printWord(this.textList[0], observer)
    }
  }

  animateCursor(cursor: HTMLElement | null) {
    if (cursor === null) return;
    setInterval(() => {
      cursor.classList.toggle("hidden");
    }, this.cursorInterval);
  }
}
