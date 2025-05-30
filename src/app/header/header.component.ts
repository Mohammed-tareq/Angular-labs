import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
imgPath=["../../assets/images/lin.png",
  "../../assets/images/git.png",
  "../../assets/images/f2.png",
  "../../assets/images/logo 1.png",
  "../../assets/images/Rectangle-67.png",
  "../../assets/images/Rectangle 26.png",
  "../../assets/images/Group (1).png",
];


}
