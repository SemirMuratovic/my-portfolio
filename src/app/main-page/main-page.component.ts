import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ScrollService } from '../shared/services/scroll.service';
import { Subscription } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements AfterViewInit, OnDestroy {
  private scrollListener = this.onScroll.bind(this);
  private isLinkClick = false;
  private subscription: Subscription | undefined;

  constructor(private scrollService: ScrollService) {}

  addButtonEventListeners() {
    document.querySelectorAll('.btn-prim').forEach((link) => {
      link.addEventListener('click', () => {
        console.log(this.isLinkClick);

        this.isLinkClick = true;
        setTimeout(() => (this.isLinkClick = false), 1000);
      });
    });
  }

  ngAfterViewInit() {
    this.subscription = this.scrollService.isLinkClick$.subscribe((value) => {
      this.isLinkClick = value;
    });
    window.addEventListener('scroll', this.scrollListener);
    this.addButtonEventListeners();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollListener);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onScroll() {
    if (this.isLinkClick) {
      return;
    }
    
    const sectionIds = ['about_me', 'my_skills', 'portfolio'];
    const contactSectionId = 'contact';
    const offsets = sectionIds.map((id) => {
      const element = document.getElementById(id);
      return element
        ? element.getBoundingClientRect().top + window.scrollY
        : Number.MAX_VALUE;
    });
    const contactSection = document.getElementById(contactSectionId);
    const contactSectionOffset = contactSection
      ? contactSection.getBoundingClientRect().top + window.scrollY
      : Number.MAX_VALUE;
    const contactSectionHeight = contactSection
      ? contactSection.clientHeight
      : 0;
    const scrollPosition = window.scrollY + window.innerHeight / 6;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      scrollPosition >= contactSectionOffset &&
      scrollPosition <= contactSectionOffset + contactSectionHeight
    ) {
      this.removeFocusFromLinks();
      return;
    }

    if (window.scrollY <= window.innerHeight / 6) {
      this.removeFocusFromLinks();
      return;
    }

    if (scrollPosition >= documentHeight) {
      this.removeFocusFromLinks();
      return;
    }

    let closestSectionId = sectionIds[0];
    let closestDistance = Math.abs(scrollPosition - offsets[0]);

    for (let i = 1; i < sectionIds.length; i++) {
      const distance = Math.abs(scrollPosition - offsets[i]);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSectionId = sectionIds[i];
      }
    }

    const links = Array.from(document.querySelectorAll('a'));
    links.forEach((link) => {
      if (link.getAttribute('href') === `#${closestSectionId}`) {
        link.focus();
      }
    });
  }

  removeFocusFromLinks() {
    const links = Array.from(document.querySelectorAll('a'));
    links.forEach((link) => {
      link.blur();
    });
  }
}
