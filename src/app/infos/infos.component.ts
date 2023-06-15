import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent  implements OnInit{
  numClients: number = 0;
  totalClients: number = 100; // Nombre total de clients souhaité

  ngOnInit(): void {
    this.startCountAnimation();
  }

  startCountAnimation(): void {
    const animationDuration = 2000; // Durée de l'animation en millisecondes
    const incrementStep = Math.ceil(this.totalClients / (animationDuration / 50)); // Incrément à chaque itération

    let currentCount = 0;
    const incrementCount = () => {
      if (currentCount < this.totalClients) {
        currentCount += incrementStep;
        if (currentCount > this.totalClients) {
          currentCount = this.totalClients;
        }
        this.numClients = currentCount;
        setTimeout(incrementCount, 50); // Appel récursif avec un délai de 50ms entre chaque itération
      }
    };

    setTimeout(incrementCount, 50);
  }
  infos = [{
    "icone" : "assets/images/serv1.png",
    "nom": "Abonnement",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "assets/images/serv1.png",
    "nom": "Réabonnement",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "assets/images/serv1.png",
    "nom": "Achat de code",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "assets/images/serv1.png",
    "nom": "Résiliation",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "assets/images/serv1.png",
    "nom": "Déménagement",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
 ]
}




