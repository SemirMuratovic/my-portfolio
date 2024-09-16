import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skillIcons = [
    {
      name: 'HTML',
      image: 'html.png'
    },
    {
      name: 'CSS',
      image: 'css.png'
    },
    {
      name: 'JavaScript',
      image: 'javascript.png'
    },
    {
      name: 'TypeScript',
      image: 'typescript.png'
    },
    {
      name: 'Angular',
      image: 'angular.png'
    },
    {
      name: 'Firebase',
      image: 'firebase.png'
    },
    {
      name: 'GIT',
      image: 'git.png'
    },
    {
      name: 'Rest-Api',
      image: 'api.png'
    },
    {
      name: 'Scrum',
      image: 'scrum.png'
    },
    {
      name: 'Material Design',
      image: 'material.png'
    },
    {
      name: 'Continualy Learning',
      image: 'learning.png'
    },
  ]

  constructor(private translate: TranslateService){}

}
