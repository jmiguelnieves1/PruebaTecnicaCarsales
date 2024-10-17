import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {  EpisodeApiResponse } from '@interfaces/episode.interface';
import { lastValueFrom, Observable } from 'rxjs';
import { EpisodesService } from '@services/episodes.service';
import { CardEpisodeComponent } from './components/card-episode/card-episode.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { MessageInfoComponent } from '@shared/message-info/message-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    JsonPipe,
    CardEpisodeComponent,
    PaginationComponent,
    SearchComponent,
    MessageInfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private episodesService = inject(EpisodesService);
  result = signal<EpisodeApiResponse | null>(null);
  page = this.episodesService.page;

  async ngOnInit() {
    this.result.set(await lastValueFrom(this.episodesService.getEpisodes()));
  }

  async changePage(page: number) {
    this.page.set(page);
    this.result.set(await lastValueFrom(this.episodesService.getEpisodes()));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  changeSearch(result: EpisodeApiResponse) {
    this.result.set(result);
    this.page.set(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
