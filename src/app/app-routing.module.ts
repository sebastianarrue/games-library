import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { RedFlagsComponent } from './red-flags/red-flags.component';

const routes: Routes = [
  { path: 'games', component: GamesListComponent },
  { path: 'red-flags', component: RedFlagsComponent },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
