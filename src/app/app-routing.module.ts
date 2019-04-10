import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { ViewAllUsersComponent } from './components/view-all-users/view-all-users.component';
import { ViewAllTeamsComponent } from './components/view-all-teams/view-all-teams.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'trainers', component: ViewAllUsersComponent },
  { path: 'trainers/id', component: UserprofileComponent },
  { path: 'trainers/me', component: UserprofileComponent },
  { path: 'team/all', component: ViewTeamComponent },
  { path: 'team/new', component: CreateTeamComponent },
  { path: 'team', component: ViewAllTeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
