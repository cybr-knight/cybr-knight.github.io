import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { FavouriteSoundsComponent } from '../ui/favourite-sounds/favourite-sounds.component';
import { FavouriteMoviesComponent } from '../ui/favourite-movies/favourite-movies.component';
import { FavouriteGamesComponent } from '../ui/favourite-games/favourite-games.component';
import { CardComponent } from '../../shared/ui/card/card.component';
import {TranslatorComponent} from "../../shared/ui/translator/translator.component";

@Component({
    selector: 'app-about',
    imports: [
        MatTabsModule,
        NgOptimizedImage,
        FavouriteSoundsComponent,
        FavouriteMoviesComponent,
        FavouriteGamesComponent,
        CardComponent,
        TranslatorComponent,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
}
