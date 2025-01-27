import { ErrorHandle } from "./episode.interface";

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export interface CharacterApiResponse {
    result?: Character;
    error?: ErrorHandle;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
