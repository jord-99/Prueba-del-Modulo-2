import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { EpisodesService } from 'src/app/services/episodes.service'

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  episode: any;
  Personajes : Array<any> = []; 

  constructor(private route: ActivatedRoute, private dato: EpisodesService, private datoper: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let { id } = params;
      this.dato.getEpisode(id).then((episode) => {
        this.episode = episode
        console.log(this.episode.characters[1]);
        let  urlCapitulos = this.episode.characters;
        for (let j = 0; j < urlCapitulos.length; j++) {  
          this.datoper.getPersonajes(this.episode.characters[j]).then(data =>{
            this.Personajes[j]=data
            console.log(this.Personajes);
          })
        } 
      })
    });
        
  }

}
