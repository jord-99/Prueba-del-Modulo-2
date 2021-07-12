import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  URL: string = 'https://finalspaceapi.com/api/v0/episode/';

  constructor() { }

  getEpisodes = () => fetch(this.URL).then((response) => response.json());
  
  getEpisode = async (id: number) => {
    let response: Response = await fetch(`${this.URL}${id}`);
    let episode:any = await response.json()
    return episode;
  };
}
