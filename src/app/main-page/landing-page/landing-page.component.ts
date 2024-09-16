import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent{
  social = [
    {
      image: 'github',
      link: 'https://github.com/SemirMuratovic',
      target: '_blank'
    },
    {
      image: 'email',
      link: '#contact',
      target: '_self'
    },
    {
      image: 'linkedin',
      link: 'https://de.linkedin.com/',
      target: '_blank'
    },
  ];

  constructor(private translate: TranslateService) {}

}
