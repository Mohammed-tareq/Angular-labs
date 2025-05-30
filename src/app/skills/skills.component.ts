import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  img: string;
  name: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    { img: "assets/images/html.png", name: "HTML" },
    { img: "assets/images/css.png", name: "CSS" },
    { img: "assets/images/js (2).png", name: "JAVA SCRIPT" },
    { img: "assets/images/sql.png", name: "MY SQL" },
    { img: "assets/images/bt.png", name: "BOOTSTRAP" },
    { img: "assets/images/php.jfif", name: "PHP" },
    { img: "assets/images/lara.jpg", name: "LARAVEL" },
    { img: "assets/images/an.jfif", name: "ANGULAR" }
  ];

  learn: Skill[] = [
    { img: "assets/images/js (2).png", name: "Node JS" },
    { img: "assets/images/sass.png", name: "SASS" },
    { img: "assets/images/mon.png", name: "MONGO DB" },
    { img: "assets/images/ts.png", name: "TYPE SCRIPT" }
  ];

  other: Skill[] = [
    { img: "assets/images/c++.png", name: "C++" },
    { img: "assets/images/git.png", name: "GIT" },
    { img: "assets/images/linx.jpg", name: "LINUX" }
  ];
}
