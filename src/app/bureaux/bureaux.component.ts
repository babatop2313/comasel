import { Component } from '@angular/core';

@Component({
  selector: 'app-bureaux',
  templateUrl: './bureaux.component.html',
  styleUrls: ['./bureaux.component.scss']
})
export class BureauxComponent {

  isActive: boolean = false;

  toggleAnimation() {
    this.isActive = !this.isActive;
  }
  bureaux: any[] = [
    {
      nom: 'AGENCE DE SAINT-LOUIS',
      image: 'assets/images/office.jpg',
      adresse: 'Darou Sor route de Khor',
      telephone: '33 961 99 01',
     //
    },
    {
      nom: 'AGENCE DE RICHARD TOLL',
      image: 'assets/images/office.jpg',
      adresse: 'Quartier Escale sur la route nationale aprés mairie venant de Saint-Louis',
      telephone: '33 963 37 64',
      // email: 'Email du bureau 2'
    },
    {
      nom: 'AGENCE DE NDIOUM',
      image: 'assets/images/office.jpg',
      adresse: 'Medina Nianga derriére la mairie prés de CORAD',
      telephone: '33 965 33 30',
      //email: 'Email du bureau 2'
    },
    {
      nom: 'AGENCE DE LOUGA',
      image: 'assets/images/office.jpg',
      adresse: 'Cité Bagdad villa N°37 Louga(Sénégal)',
      telephone: '33 967 14 01',
     // email: 'Email du bureau 2'
    },
    {
      nom: 'AGENCE DE DAHRA',
      image: 'assets/images/office.jpg',
      adresse: 'Quartier Medina NDIAYE derriére radio Ferlo FM',
      telephone: '33 968 61 51',
     // email: 'Email du bureau 2'
    },
    {
      nom: 'AGENCE DE KEBEMER',
      image: 'assets/images/office.jpg',
      adresse: 'Quartier Galla sur la route national à coté du CEDAF',
      telephone: '33 969 79 12',
      //email: 'Email du bureau 2'
    },
    // Ajoutez d'autres objets pour chaque bureau
  ];
}
