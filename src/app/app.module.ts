import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { EleveComponent } from './eleve/eleve.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeleveComponent } from './listeleve/listeleve.component';
import {HttpClientModule} from '@angular/common/http';
import { DetaileleveComponent } from './detaileleve/detaileleve.component';
import { RecapitulativeComponent } from './recapitulative/recapitulative.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    EleveComponent,
    NavbarComponent,
    ListeleveComponent,
    DetaileleveComponent,
    RecapitulativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
