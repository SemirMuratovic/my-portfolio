import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { InViewportModule } from 'ng-in-viewport';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    SingleProjectComponent,
    InViewportModule,
    TranslateModule,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  myProjects: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadTranslatedInfo();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslatedInfo();
    });
  }

  loadTranslatedInfo() {
    this.myProjects = [
      {
        projectImage: 'laptop-join.png',
        projectName: 'Join',
        skills: ['HTML', 'CSS', 'JavaScript'],
        description: this.translate.instant('portfolio.project-1'),
        liveTestLink: 'https://join.semir-muratovic.de/index.html',
        gitHubLink: 'https://github.com/SemirMuratovic/Join',
      },
      {
        projectImage: 'laptop-el-pollo-loco.png',
        projectName: 'El Pollo Loco',
        skills: ['HTML', 'CSS', 'JavaScript'],
        description: this.translate.instant('portfolio.project-2'),
        liveTestLink: 'https://el-pollo-loco.semir-muratovic.de/index.html',
        gitHubLink: 'https://github.com/SemirMuratovic/El-Polo-loco',
      },
      {
        projectImage: 'laptop-pokedex.png',
        projectName: 'Pokédex',
        skills: ['HTML', 'CSS', 'JavaScript', 'API'],
        description: this.translate.instant('portfolio.project-3'),
        liveTestLink: 'https://pokedex.semir-muratovic.de/index.html',
        gitHubLink: 'https://github.com/SemirMuratovic/Pokedex',
      },
    ];
  }
}
