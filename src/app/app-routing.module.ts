import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaileleveComponent } from './detaileleve/detaileleve.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ListeleveComponent } from './listeleve/listeleve.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecapitulativeComponent } from './recapitulative/recapitulative.component';

const routes: Routes = [
  {path:"inscription" , component:InscriptionComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"listeeleve", component:ListeleveComponent},
  {path:"detaileleve", component:DetaileleveComponent},
  {path:"recapitulative", component:RecapitulativeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
