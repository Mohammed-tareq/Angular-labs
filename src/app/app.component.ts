import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [ NavComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerc';
}
