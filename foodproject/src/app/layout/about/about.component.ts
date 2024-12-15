import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  imports: [NavComponent,FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar);
  }
}
