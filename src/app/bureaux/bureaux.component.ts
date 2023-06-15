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
      nom: 'Bureau 1',
      image: 'assets/images/office.jpg',
      adresse: 'Adresse du bureau 1',
      telephone: 'Numéro de téléphone du bureau 1',
      email: 'Email du bureau 1'
    },
    {
      nom: 'Bureau 2',
      image: 'assets/images/office.jpg',
      adresse: 'Adresse du bureau 2',
      telephone: 'Numéro de téléphone du bureau 2',
      email: 'Email du bureau 2'
    },
    {
      nom: 'Bureau 2',
      image: 'assets/images/office.jpg',
      adresse: 'Adresse du bureau 2',
      telephone: 'Numéro de téléphone du bureau 2',
      email: 'Email du bureau 2'
    },
    {
      nom: 'Bureau 2',
      image: 'assets/images/office.jpg',
      adresse: 'Adresse du bureau 2',
      telephone: 'Numéro de téléphone du bureau 2',
      email: 'Email du bureau 2'
    },
    {
      nom: 'Bureau 2',
      image: 'assets/images/office.jpg',
      adresse: 'Adresse du bureau 2',
      telephone: 'Numéro de téléphone du bureau 2',
      email: 'Email du bureau 2'
    },
    {
      nom: 'Bureau 2',
      image: 'assets/images/office.jpg',
      adresse: 'Adresse du bureau 2',
      telephone: 'Numéro de téléphone du bureau 2',
      email: 'Email du bureau 2'
    },
    // Ajoutez d'autres objets pour chaque bureau
  ];
}
