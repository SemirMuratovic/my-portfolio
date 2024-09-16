import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  http = inject(HttpClient);

  policyAccepted: boolean = false;
  showPrivacyError: boolean = false;
  submitted: boolean = false;
  isFormResetting: boolean = false;

  post = {
    endPoint: 'https://semir-muratovic.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  mailSent = false;

  constructor(private translate: TranslateService){}

  onSubmit(ngForm: NgForm) {
    this.submitted = true;

    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.resetForm(ngForm);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.mailSentInfo(),
        });
    }
  }

  onPolicyChange(isChecked: boolean) {
    if (this.isFormResetting) {
      return;
    }
    if (!isChecked) {
      this.showPrivacyError = true;
    } else {
      this.showPrivacyError = false;
    }
  }

  resetForm(ngForm: NgForm) {
    this.isFormResetting = true;
    this.submitted = false; 
    this.showPrivacyError = false; 
    this.policyAccepted = false; 
    ngForm.resetForm(); 
    setTimeout(() => {
      this.isFormResetting = false;
    }, 0);
  }

  mailSentInfo() {
    this.mailSent = true;
    setTimeout(()=> {
      this.mailSent = false;
    }, 3000)
  }
}
