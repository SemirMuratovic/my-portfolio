import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  someInfo: any[] = [];
  constructor(private translate: TranslateService){}

  ngOnInit() {
    AOS.init();
    this.loadTranslatedInfo();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslatedInfo();
    });
  }

  loadTranslatedInfo() {
    this.someInfo = [
      {
        image: 'location.png',
        info: this.translate.instant('about-me.section-1')
      },
      {
        image: 'puzzle.png',
        info: this.translate.instant('about-me.section-2')
      },
      {
        image: 'bulb.png',
        info: this.translate.instant('about-me.section-3')
      }
    ];
  }
}
