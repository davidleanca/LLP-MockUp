import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerTexts: string[] = [
    'About us',
    'Terms and conditions',
    'GDPR',
    'Blog',
    'ANPC',
    'Contact Us',
    'FaQ',
    'Newsletter',
    'Courses',
  ];
  rightsReservedText: string = '© Lingo Lab S.R.L 2023 - All rights reserved';
}
