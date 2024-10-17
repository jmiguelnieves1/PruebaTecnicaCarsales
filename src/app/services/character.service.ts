import { inject, Injectable} from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { from, mergeMap, Observable, of, timeout } from 'rxjs';
import {  EpisodeApiResponse } from '@interfaces/episode.interface';
import { Character } from '@interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private http = inject(HttpClient);

  getCharacter(url: string): Observable<Character> {
    return this.http.get<Character>(url).pipe(
        timeout(environment.timeout)
    );
  }

  getCharacters(urls: string[]) {
    return from(urls).pipe(
        mergeMap(url => this.getCharacter(url), 2)
    );
  }
}
