import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatProgressBar} from '@angular/material/progress-bar';
import {Sound} from "../../../shared/models/sound";
import {FavouriteSoundsService} from "../../data-access/favourite-sounds.service";
import {Observable} from 'rxjs';

@Component({
    selector: 'app-favourite-sounds',
    imports: [
        AsyncPipe,
        MatProgressBar
    ],
    templateUrl: './favourite-sounds.component.html',
    styleUrl: './favourite-sounds.component.css'
})
export class FavouriteSoundsComponent {
    soundsList$: Observable<Sound[]>;

    constructor(private soundService: FavouriteSoundsService) {
        this.soundsList$ = this.soundService.getSounds();
    }
}
