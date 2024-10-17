import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message-info',
  standalone: true,
  imports: [],
  templateUrl: './message-info.component.html',
  styleUrl: './message-info.component.css'
})
export class MessageInfoComponent {
  message = input.required<string>();
}
