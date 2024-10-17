import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, timeout } from 'rxjs';
import { EpisodeApiResponse } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  private readonly apiUrl = `${environment.apiBase}episode`;
  private http = inject(HttpClient);

  // Estado de búsqueda y página
  nameSearch: string | null = null;
  page = signal<number>(1);
  isSearch = false;

  getEpisodes(name?: string | null, isOnlyCount: boolean = false): Observable<EpisodeApiResponse> {
    const currentPage = isOnlyCount ? 1 : this.page();
    const searchParam = (this.nameSearch && this.nameSearch.length > 0) || isOnlyCount
      ? `&name=${isOnlyCount ? name : this.nameSearch}`
      : '';

    const url = `${this.apiUrl}?page=${currentPage}${searchParam}`;

    return this.http.get<EpisodeApiResponse>(url).pipe(
      timeout(environment.timeout),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<EpisodeApiResponse> {
    console.error('Error get episodes:', error);
    return of({
      error: { message: "No pudimos obtener los episodios, ha ocurrido un error en el servidor" }
    });
  }
}
