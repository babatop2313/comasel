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
import { InfosComponent } from './infos/infos.component';
import { BureauxComponent } from './bureaux/bureaux.component';
import { HeaderComponent } from './header/header.component';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

