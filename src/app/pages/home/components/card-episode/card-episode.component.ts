import { Component, input } from '@angular/core';
import { Episode } from '@interfaces/episode.interface';
import { EpisodeFormatPipe } from '@pipes/episode-format.pipe';
import { DateFormatPipe } from '@pipes/date-format.pipe';
import { RouterModule } from '@angular/router';

//Componentes particulares de la page.
@Component({
  selector: 'app-card-episode',
  standalone: true,
  imports: [
    EpisodeFormatPipe,
    DateFormatPipe,
    RouterModule
  ],
  templateUrl: './card-episode.component.html',
  styleUrl: './card-episode.component.css'
})
export class CardEpisodeComponent {
  episode = input.required<Episode>();
}
