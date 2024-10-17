export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
  error?: ErrorHandle;
}

export interface Information {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface ErrorHandle {
  message: string;
}

export interface EpisodeApiResponse {
  info?: Information
  error?: ErrorHandle;
  results?: Episode[];
  result?: Episode;
}
