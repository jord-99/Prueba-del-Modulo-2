import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  character: any;

  constructor(private route: ActivatedRoute, private dato: CharactersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = this.route.snapshot.params.id;
      console.log(id);
      this.dato.getCharacter(id).then((character)=>{
        this.character  = character
        console.log(this.character)
      });
    })
  }
}
