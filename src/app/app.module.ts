import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { BaniereComponent } from './baniere/baniere.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BureauxComponent } from './bureaux/bureaux.component';
import { HeaderComponent } from './header/header.component';
import { InfosComponent } from './infos/infos.component';
import { PrepaiementComponent } from './espace-client/prepaiement/prepaiement.component';
import { GrilleTarifaireComponent } from './espace-client/grille-tarifaire/grille-tarifaire.component';
import { PolitiqueConfComponent } from './espace-client/politique-conf/politique-conf.component';
import { HomeComponent } from './home/home.component';
import { ActuComponent } from './informations/actu/actu.component';
import { PhotothequeComponent } from './informations/phototheque/phototheque.component';
import { VideothequeComponent } from './informations/videotheque/videotheque.component';
import { MotDuDgComponent } from './about-us/mot-du-dg/mot-du-dg.component';
import { HistoriqueComponent } from './about-us/historique/historique.component';
import { ChiffresClesComponent } from './about-us/chiffres-cles/chiffres-cles.component';
import { OrganigrammeComponent } from './about-us/organisation/organigramme/organigramme.component';
import { AgencesComponent } from './about-us/organisation/agences/agences.component';
import { DistributionComponent } from './metiers/distribution/distribution.component';
import { CommercialComponent } from './metiers/commercial/commercial.component';
import { CrseComponent } from './metiers/crse/crse.component';
import { ConseilsComponent } from './informations/conseils/conseils.component';
import { ExtensionsComponent } from './projets/extensions/extensions.component';
import { NouveauxComponent } from './projets/nouveaux/nouveaux.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PartenairesComponent,
    BaniereComponent,
    InfosComponent,
    BureauxComponent,
    HeaderComponent,
    PrepaiementComponent,
    GrilleTarifaireComponent,
    PolitiqueConfComponent,
    HomeComponent,
    ActuComponent,
    PhotothequeComponent,
    VideothequeComponent,
    MotDuDgComponent,
    HistoriqueComponent,
    ChiffresClesComponent,
    OrganigrammeComponent,
    AgencesComponent,
    DistributionComponent,
    CommercialComponent,
    CrseComponent,
    ConseilsComponent,
    ExtensionsComponent,
    NouveauxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
