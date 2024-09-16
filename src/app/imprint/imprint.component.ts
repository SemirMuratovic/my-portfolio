import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(public translate: TranslateService) {}

  ngOnInit() {
    const savedLanguage = localStorage.getItem('currentLanguage') || 'en';
    this.translate.use(savedLanguage);
  }
}
