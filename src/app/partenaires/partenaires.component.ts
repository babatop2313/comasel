import { Component } from '@angular/core';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent {
  partners: string[] = [
    'partener2.jpg',
    'partener2.jpg',
    'partener2.jpg',
    // Ajoutez d'autres noms de fichiers d'image pour vos partenaires
  ];
}
