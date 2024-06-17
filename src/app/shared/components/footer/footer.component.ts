import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  homeIcon: string = 'assets/accueil.png';
  bookIcon: string = 'assets/livre.png';
  shearchIcon: string = 'assets/loupe.png';

}
