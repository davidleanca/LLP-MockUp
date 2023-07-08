import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  courses: string[] = ['Beginner', 'Intermediate', 'Upper Intermediate'];

  text1Title: string = 'Online Language Courses';
  text1Content: string =
    'Offer flexibility, convenience, and accessibility, making them attractive to learners who may have busy schedules or limited access to in-person classes.';

  text2Title: string = 'Start Investing In You';
  text2Content: string =
    'Offer flexibility, convenience, and accessibility, making them attractive to learners who may have busy schedules or limited access to in-person classes.';

  text3Title: string = 'Test Your Language Level';
  text3Content: string =
    'Offer flexibility, convenience, and accessibility, making them attractive to learners who may have busy schedules or limited access to in-person classes.';

  part3Title: string = 'Our Courses';

  text4Title: string = 'Learn at your own pace';
  text4Content: string =
    'Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter  programs in the summer, and some may be combined for a full academic year.';

  text5Title: string = 'Lifetime access';
  text5Content: string =
    'Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter  programs in the summer, and some may be combined for a full academic year.';

  text6Title: string = 'Certificate of completion';
  text6Content: string =
    'Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter  programs in the summer, and some may be combined for a full academic year.';

  button1Text: string = 'VIEW OUR COURSES';
  button2Text: string = 'LEARN MORE';
  button3Text: string = 'START TEST';

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

  rightsReservedText: string =
    '© Lingo Ladder S.R.L 2023 - All rights reserved';
  constructor() {}

  ngOnInit() {}
}
