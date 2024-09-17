import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() languageChanged = new EventEmitter<string>();
  constructor(
    private scrollService: ScrollService,
    private router: Router,
    public translate: TranslateService
  ) {}

  currentLang = 'en';
  menuOpen = false;
  @ViewChild('openedMenu') openedMenu!: ElementRef;
  @ViewChild('menuIcon') menuIcon!: ElementRef;

  ngOnInit() {
    const savedLanguage = localStorage.getItem('currentLanguage');
    this.currentLang = savedLanguage ? savedLanguage : 'en';
    this.translate.use(this.currentLang);
  }

  navigateTo(event: Event, elementId: string) {
    const currentUrl = window.location.href;
    if (
      currentUrl.includes('/imprint') ||
      currentUrl.includes('/privacy-policy') ||
      currentUrl.includes('/datenschutz')
    ) {
      this.router.navigateByUrl('/#' + elementId);
    } else {
      this.scrollToElement(event, elementId);
    }
  }

  scrollToElement(event: Event, elementId: string) {
    event.preventDefault();
    this.scrollService.setLinkClick(true);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      this.scrollService.setLinkClick(false);
    }, 2000);
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
    localStorage.setItem('currentLanguage', this.currentLang);
    const currentUrl = window.location.href;
    if (currentUrl.includes('/privacy-policy')) {
      window.location.reload();
    }
  }

  menu() {
    if (!this.menuOpen) {
      this.open();
    } else {
      this.closed();
    }
  }

  open() {
    this.menuOpen = true;
    this.openedMenu.nativeElement.style.display = 'flex';
    this.openedMenu.nativeElement.classList.add('open');
    this.menuIcon.nativeElement.src = './assets/images/burger-close.png';
    document.body.style.overflowY = 'hidden';
  }

  closed() {
    this.menuOpen = false;
    this.openedMenu.nativeElement.style.display = 'none';
    this.openedMenu.nativeElement.classList.remove('open');
    this.menuIcon.nativeElement.src = './assets/images/burger.png';
    document.body.style.overflowY = 'scroll';
  }
}
