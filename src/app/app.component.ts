import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { NgOptimizedImage, NgIf } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/feature/home.component';
import { KeycapComponent } from "./shared/ui/keycap/keycap.component";
import { SpacerComponent } from "./shared/ui/spacer/spacer.component";

const HomeRoute = "/";
const AboutRoute = "/about";
const ExperienceRoute = "/experience";
const EducationRoute = "/education";
const ProjectsRoute = "/projects";
const KeyboardsRoute = "/keyboards";

@Component({
    selector: 'app-root',
    imports: [
        NgIf,
        NgOptimizedImage,
        RouterOutlet,
        HomeComponent,
        FooterComponent,
        MatSidenavModule,
        MatButtonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        KeycapComponent,
        SpacerComponent
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
  
  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router){
    this.mobileQuery = media.matchMedia(`(max-width: ${this.MaxWidth}px)`);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  @HostListener('document: keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.key) {
      case '1':
        this.router.navigate([HomeRoute]);
        break;
      case '2':
        this.router.navigate([AboutRoute]);
        break;
      case '3':
        this.router.navigate([ExperienceRoute]);
        break;
      case '4':
        this.router.navigate([EducationRoute]);
        break;
      case '5':
        this.router.navigate([ProjectsRoute]);
        break;
      case '6':
        this.router.navigate([KeyboardsRoute]);
        break;
    }
  }
}
