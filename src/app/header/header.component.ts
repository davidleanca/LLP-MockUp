import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  HeaderButtons: string[] = [
    'About us',
    'Home',
    'Courses',
    'Blog',
    'Free Lecture',
    'Test your knowledge',
    'Log In',
    'Sign Up',
  ];
  courses: string[] = ['Beginner', 'Intermediate', 'Advanced'];

  showDropDown: boolean = false;
  showCourses: boolean = false;

  toggleDropdown() {
    this.showDropDown = !this.showDropDown;
    if (this.showDropDown == false) this.showCourses = false;
  }

  toggleCourses() {
    this.showCourses = !this.showCourses;
  }

  ngOnInit() {
    const mainButton = document.getElementsByClassName('dropbtn-mobile')[0];
    const buttons = document.getElementsByClassName('mobile-button');
    const coursesButtons = document.getElementsByClassName(
      'course-mobile-button'
    );
    const length = buttons.length;
    const coursesButtonsLength = buttons.length;
    const dropdownContent = document.getElementsByClassName(
      'dropdown-content-mobile'
    )[0];
    document.addEventListener('click', (event) => {
      if (
        event.target !== mainButton &&
        event.target !== dropdownContent &&
        this.showDropDown == true
      ) {
        for (let i = 0; i < length; i++) {
          if (event.target == buttons[i]) return;
        }
        for (let i = 0; i < coursesButtonsLength; i++) {
          if (event.target == coursesButtons[i]) return;
        }
        this.showDropDown = false;
        this.showCourses = false;
      }
    });
  }
}
