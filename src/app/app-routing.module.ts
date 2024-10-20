import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ActionComponent } from './pages/action/action.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { RendezVousComponent } from './pages/rendez-vous/rendez-vous.component';
import { ProfilComponent } from './pages/profil/profil.component';

const routes: Routes = [
  {path:"", component:AccueilComponent},
  {path:"action", component:ActionComponent},
  {path:"historique", component:HistoriqueComponent},
  {path:"rendez-vous", component:RendezVousComponent},
  {path:"profil", component:ProfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
