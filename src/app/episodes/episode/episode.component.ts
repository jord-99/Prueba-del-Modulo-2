import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes.service'

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  episode: any;

  constructor(private route: ActivatedRoute, private dato: EpisodesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = this.route.snapshot.params.id;
      console.log(id);
      this.dato.getEpisode(id).then((episode)=>{
        this.episode  = episode
        console.log(this.episode)
      });
    })
  }

}
