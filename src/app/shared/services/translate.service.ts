import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('selectedLanguage');
    const defaultLang = savedLang || this.translate.getBrowserLang() || 'en';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}

