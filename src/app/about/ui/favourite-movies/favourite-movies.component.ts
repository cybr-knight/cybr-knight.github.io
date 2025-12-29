import {Component} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatProgressBar} from '@angular/material/progress-bar';
import {FavouriteMoviesService} from "../../data-access/favourite-movies.service";
import {Movie} from "../../../core/models/movie";
import {Observable} from 'rxjs';

@Component({
    selector: 'app-favourite-movies',
    imports: [
        AsyncPipe,
        MatProgressBar
    ],
    templateUrl: './favourite-movies.component.html',
    styleUrl: './favourite-movies.component.css'
})
export class FavouriteMoviesComponent {
    movies$: Observable<Movie[]>;

    constructor(private moviesService: FavouriteMoviesService) {
        this.movies$ = this.moviesService.getMovies();
    }
}
