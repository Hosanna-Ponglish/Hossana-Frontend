import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LessonsComponent} from "./lessons/lessons.component";
import {GamesComponent} from "./games/games.component";
import {RepetitionsComponent} from "./repetitions/repetitions.component";
import {ForumComponent} from "./forum/forum.component";
import {ProfileComponent} from "./profile/profile.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'repetitions', component: RepetitionsComponent},
  {path: 'games', component: GamesComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'dictionary', component: DictionaryComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{
}
