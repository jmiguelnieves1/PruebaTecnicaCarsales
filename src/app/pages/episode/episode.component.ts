import { Component, inject, OnInit } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Episode, EpisodeApiResponse } from '@interfaces/episode.interface';
import { EpisodeFormatPipe } from '../../pipes/episode-format.pipe';
import { MessageInfoComponent } from '../../shared/message-info/message-info.component';
import { CharacterService } from '../../services/character.service';
import { CharacterComponent } from './components/character/character.component';
import { Character } from '@interfaces/character.interface';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [
    AsyncPipe,
    EpisodeFormatPipe,
    MessageInfoComponent,
    CharacterComponent,
    RouterModule,
    CommonModule
  ],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent implements OnInit {
  episodeService = inject(EpisodesService)
  characterService = inject(CharacterService)
  route = inject(ActivatedRoute);

  characters: Character[] = [];
  episodeData: EpisodeApiResponse;

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id')
    this.episodeData = await lastValueFrom(this.episodeService.getEpisodeById(id!));
    if(this.episodeData.result) {
      this.loadCharacters();
    }
  }

  loadCharacters() {
    this.characterService.getCharacters(this.episodeData.result?.characters!).subscribe({
      next: character => {
        this.characters.push(character);
      }
    });
  }
}
