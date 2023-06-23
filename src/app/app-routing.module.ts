import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { CommercialComponent } from './metiers/commercial/commercial.component';
import { CrseComponent } from './metiers/crse/crse.component';
import { DistributionComponent } from './metiers/distribution/distribution.component';
import { ConseilsComponent } from './informations/conseils/conseils.component';
import { ExtensionsComponent } from './projets/extensions/extensions.component';
import { NouveauxComponent } from './projets/nouveaux/nouveaux.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'espace-client/prepaiement', component: PrepaiementComponent },
  {path: 'espace-client/politique-conf', component: PolitiqueConfComponent },
  {path: 'espace-client/grille-tarifaire', component: GrilleTarifaireComponent },
  {path: 'informations/actualites', component: ActuComponent  },
  {path: 'informations/phototheque', component: PhotothequeComponent  },
  {path: 'informations/videotheque', component: VideothequeComponent },
  {path: 'informations/conseils', component: ConseilsComponent },
  {path: 'about-us/mot-du-dg', component: MotDuDgComponent },
  {path: 'about-us/historique', component: HistoriqueComponent },
  {path: 'about-us/chiffres-cles', component: ChiffresClesComponent },
  {path: 'organisation/organigramme', component:OrganigrammeComponent },
  {path: 'organisation/nos-agences', component: AgencesComponent },
  {path: 'metiers/distribution', component: DistributionComponent },
  {path: 'metiers/commercial', component: CommercialComponent },
  {path: 'metiers/avis-crse', component: CrseComponent },
  {path: 'projets/extension-reseaux', component: ExtensionsComponent },
  {path: 'projets/nouveaux-projets', component: NouveauxComponent },









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
