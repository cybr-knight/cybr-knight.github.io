import {Component, Input} from '@angular/core';

interface IntervalObserver {
    hasFinished: boolean;
}

@Component({
    selector: 'app-terminal',
    imports: [],
    templateUrl: './terminal.component.html',
    styleUrl: './terminal.component.css'
})
export class TerminalComponent {
    readonly intervalMilliseconds = 70;
    readonly waitTime = 1200;
    displayText = "";

    @Input()
    textList!: string[]

    ngOnInit() {
        this.animateConsoleText();
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
        this.printWord(this.textList[textListIndex], observer);

        setInterval(() => {
            if (!observer.hasFinished) return;

            // reset observer for next unit of work
            observer.hasFinished = false;

            // case 1: word has printed and needs to be deleted
            if (this.displayText.length > 0) {
                setTimeout(this.deleteWord.bind(this, observer), this.waitTime);
                return;
            }

            // case 2: move onto next word
            // wrap around if reached end of array
            textListIndex = textListIndex >= (this.textList.length - 1) ? 0 : textListIndex + 1;

            this.printWord(this.textList[textListIndex], observer);
        }, this.waitTime)
    }

    animateConsoleText(): void {
        if (this.textList.length === 0) return;

        // shared memory to check when the process of printing a word has finished
        const observer: IntervalObserver = {
            hasFinished: false
        }

        if (this.textList.length > 1) {
            this.printMultipleWords(observer);
        } else {
            this.printWord(this.textList[0], observer)
        }
    }
}
