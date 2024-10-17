import { Component, input } from '@angular/core';
import { Character } from '@interfaces/character.interface';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  character = input.required<Character>();
}
