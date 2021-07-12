import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EpisodesComponent } from './episodes/episodes.component'
import { CharactersComponent } from './characters/characters.component'
import { EpisodeComponent } from './episodes/episode/episode.component'

const routes: Routes = [
  { path: '', redirectTo: 'episodes', pathMatch: 'full' },
  { path: 'episodes/:id', component: EpisodeComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'characters/:id', component: CharactersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
