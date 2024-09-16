import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent, title: 'Semir Muratovic' },
    { path: 'imprint', component: ImprintComponent, title: 'Imprint' },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy' },
];
