import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeFormat',
  standalone: true
})
export class EpisodeFormatPipe implements PipeTransform {

  transform(value: string): unknown {
    const regex = /^S(\d{2})E(\d{2})$/; //Formato S00E00
    const match = value.match(regex);

    if (!match) {
      return value;
    }
    const season = parseInt(match[1], 10);
    const episode = parseInt(match[2], 10);

    return `Temp ${season} - Episodio ${episode}`;
  }

}
