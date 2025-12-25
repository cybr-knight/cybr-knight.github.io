import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatProgressBar} from '@angular/material/progress-bar';
import {FavouriteGamesService} from "../../data-access/favourite-games.service";
import {Game} from "../../../shared/models/game";
import {Observable} from 'rxjs';

@Component({
    selector: 'app-favourite-games',
    imports: [
        AsyncPipe,
        MatProgressBar
    ],
    templateUrl: './favourite-games.component.html',
    styleUrl: './favourite-games.component.css'
})
export class FavouriteGamesComponent {
    games$: Observable<Game[]>;

    constructor(private gamesService: FavouriteGamesService) {
        this.games$ = this.gamesService.getGames();
    }
}
