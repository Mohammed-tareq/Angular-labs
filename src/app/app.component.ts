import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContectComponent } from './contect/contect.component';
import { FooterComponent } from './footer/footer.component';

declare var AOS: any;

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,AboutComponent,SkillsComponent,ContectComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  

  ngOnInit() {
    AOS.init({
      duration: 1000,
      // once: true,
      // offset: 100
    });
  }
}
