export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Information {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface EpisodeApiResponse {
  info?: Information
  error?: {
    message: string;
  }
  results?: Episode[];
}
