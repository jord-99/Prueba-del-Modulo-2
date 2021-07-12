import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../services/episodes.service'

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes: Array<any> = [];
  constructor( private datos: EpisodesService ) {}

  ngOnInit(): void {
    this.datos.getEpisodes()
    .then(data => {
      this.episodes = data
      console.log(this.episodes)
    });
  }

}
