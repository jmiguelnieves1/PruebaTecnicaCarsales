import { Component, inject, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, lastValueFrom } from 'rxjs';
import { EpisodeApiResponse } from '@interfaces/episode.interface';
import { EpisodesService } from '@services/episodes.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  episodeService = inject(EpisodesService);
  form = new FormGroup({
    search: new FormControl<string>(this.episodeService.nameSearch ?? '', [Validators.required])
  });
  messageResult = '';
  lastSearch: string | null;
  resultToSearchEvent = output<EpisodeApiResponse>();
  resultToSearch: EpisodeApiResponse;

  ngOnInit(): void {
    this.form.get('search')!.valueChanges
      .pipe(debounceTime(800))
      .subscribe(value => {
        this.searchResult(value);
      });
  }

  async searchResult(value: string | null) {
    if(value === this.lastSearch) return;
    this.resultToSearch = await lastValueFrom(this.episodeService.getEpisodes(value, true));
    this.lastSearch = value;
    this.messageResult = !this.resultToSearch.info || this.resultToSearch?.info?.count < 1 ? 'Sin resultados' :`Ver ${this.resultToSearch.info?.count} resultados`;
  }

  async onSubmit() {
    this.episodeService.isSearch = true;
    this.episodeService.nameSearch = this.lastSearch;
    this.resultToSearchEvent.emit(this.resultToSearch);
    this.messageResult = '';
  }
}
