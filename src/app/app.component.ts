import {ChangeDetectorRef, Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FooterComponent} from './core/footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [
        NgOptimizedImage,
        RouterOutlet,
        FooterComponent,
        MatSidenavModule,
        MatButtonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    readonly Title = 'coreyBarrDev';
    readonly GithubSvg = '/assets/logos/github/github-mark-white.svg';
    readonly LinkedinSvg = '/assets/logos/linkedin/linkedin.svg';
    readonly ItchSvg = '/assets/logos/itch/itchio-logo-textless-white.svg';
    readonly MaxWidth = 1000;

    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia(`(max-width: ${this.MaxWidth}px)`);
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
}
