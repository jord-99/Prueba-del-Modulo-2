import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  URL: string = 'https://finalspaceapi.com/api/v0/character/';

  constructor() { }
  
  getCharacter = async (id: number) => {
    let response: Response = await fetch(`${this.URL}${id}`);
    let character:any = await response.json()
    return character;
  };
}
