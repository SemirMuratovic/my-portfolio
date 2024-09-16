import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  currentLanguage: string = 'en';

  ngOnInit(): void {
    const storedLanguage = localStorage.getItem('currentLanguage');
    if (storedLanguage) {
      this.currentLanguage = storedLanguage;
    }
  }
}
