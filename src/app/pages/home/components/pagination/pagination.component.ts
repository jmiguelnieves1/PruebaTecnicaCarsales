import { Component, inject, input, output } from '@angular/core';
import { EpisodeApiResponse, Information } from '@interfaces/episode.interface';
import { lastValueFrom } from 'rxjs';
import { environment } from '@env/environment';
import { EpisodesService } from '@services/episodes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  private episodesService = inject(EpisodesService);
  page = this.episodesService.page;
  pageOutput = output<number>();
  info = input.required<Information>();

  messagePaginator(): string {
    if(!this.info()) return '';
    const currentPage = this.page();
    const itemsPerPage = environment.itemsPerPageEpisodes;
    return `Mostrando resultados ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(currentPage * itemsPerPage, this.info().count)} de ${this.info().count}`;
  }

  async changePage(page: number) {
    this.pageOutput.emit(page);
  }
}
