import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  homeIcon: string = 'assets/accueil.png';
  bookIcon: string = 'assets/livre.png';
  shearchIcon: string = 'assets/loupe.png';

  constructor(
    private _router: Router,
  ) {}

  OnClick(){
    this._router.navigate(['/']);
  }
}
