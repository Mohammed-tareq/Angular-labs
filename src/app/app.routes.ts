import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContectComponent } from './contect/contect.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: '#about', component: AboutComponent },
  { path: '#skills', component: SkillsComponent },
  { path: '#contect', component: ContectComponent },
  { path: '#footer', component: FooterComponent },
];
