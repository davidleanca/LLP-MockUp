import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  part1Title: string = 'Online Language Courses';
  part1Text: string =
    'Offer flexibility, convenience, and accessibility, making them attractive to learners who may have busy schedules or limited access to in-person classes.';

  part2Title: string = 'Start Investing In You';
  part2Text: string =
    'Invest in yourself by learning a new language now! Take that first step, embrace the thrill of acquiring a new language, and unlock the limitless possibilities that await you on this transformative path of self-investment.';

  part3Title: string = 'Our Courses';
  part3Text: string =
    'Discover a whole new world with the help of our online free-pace language courses. ';

  part3Images: string[] = [
    'assets/Advanced.png',
    'assets/Intermediate.png',
    'assets/Advanced.png',
  ];
  courses: string[] = ['Beginner', 'Intermediate', 'Advanced'];
  part4Title: string = 'Test Your Language Level';
  part4Text: string =
    'Take the first step towards fluency today! Click below to access our free language test and embark on an exciting journey of language learning. Your future language skills await you—start now and embrace the world of multilingual possibilities!';

  part5Title: string = 'Why learn with us?';

  part5Section1Title: string = 'Learn at your own pace';
  part5Section1Text: string =
    'We know that you are more busy than ever. That’s why we offer you online video courses so you can learn at your own pace, in your own spare time.';
  part5Section2Title: string = 'Lifetime access';
  part5Section2Text: string =
    'No need to explain more - you’ve got lifetime access to our courses on this platform! No extra charges, no monthly fees. One time purches for a lifetime of knowledge.';
  part5Section3Title: string = 'Learn from experts';
  part5Section3Text: string =
    'We are trained tutors, with a vast experience in language teaching and strong language knowledge. ';
  part5Section4Title: string = 'Certificate of completion';
  part5Section4Text: string =
    'You get a certificate of completion of the courses you take! Impress your employee, coworkers and friends not only with your knowledge but with your certificate as well!';

  button1Text: string = 'VIEW OUR COURSES';
  button2Text: string = 'LEARN MORE';
  button3Text: string = 'START TEST';

  courseTexts: string[][] = [
    ['A1 + A2', 'B1', 'B2'],
    [
      'Basics of the German Language',
      'Grammar and Vocabulary for everyday life',
      'Grammar and Vocabulary  for advanced conversations',
    ],
  ];

  constructor() {}

  ngOnInit() {}
}
