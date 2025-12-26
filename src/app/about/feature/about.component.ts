import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { FavouriteSoundsComponent } from '../ui/favourite-sounds/favourite-sounds.component';
import { FavouriteMoviesComponent } from '../ui/favourite-movies/favourite-movies.component';
import { FavouriteGamesComponent } from '../ui/favourite-games/favourite-games.component';
import { ColouredBoxComponent } from '../../shared/ui/coloured-box/coloured-box.component';
import { Colours } from '../../shared/enums/colours';

@Component({
    selector: 'app-about',
    imports: [
        MatTabsModule,
        NgOptimizedImage,
        FavouriteSoundsComponent,
        FavouriteMoviesComponent,
        FavouriteGamesComponent,
        ColouredBoxComponent,
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly Blue = Colours.Blue;
}
