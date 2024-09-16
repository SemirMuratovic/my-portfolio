import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {  
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

  constructor(private translate: TranslateService){}

}
