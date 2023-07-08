import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss'],
})
export class Button2Component {
  @Input() Text: string = '';
}
