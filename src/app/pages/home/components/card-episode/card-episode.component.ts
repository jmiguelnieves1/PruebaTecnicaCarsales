import { Component, input } from '@angular/core';
import { Episode } from '@interfaces/episode.interface';
import { EpisodeFormatPipe } from '@pipes/episode-format.pipe';
import { DateFormatPipe } from '@pipes/date-format.pipe';

//Componentes particulares de la page.
@Component({
  selector: 'app-card-episode',
  standalone: true,
  imports: [
    EpisodeFormatPipe,
    DateFormatPipe
  ],
  templateUrl: './card-episode.component.html',
  styleUrl: './card-episode.component.css'
})
export class CardEpisodeComponent {
  episode = input.required<Episode>();
}
