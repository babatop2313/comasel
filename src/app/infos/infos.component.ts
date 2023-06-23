import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent  implements AfterViewInit{
  numClients: number = 0;
  numBureaux: number = 0
  numVillages : number = 0
  numLignes : number = 0
  totalClients: number = 37900; // Nombre total de clients souhaité
  totalBureaux: number = 6; // Nombre total de clients souhaité
  totalVillges :  number = 367
  totalLignes : number = 1062
  messageVisible: boolean = false;

  ngAfterViewInit() {
    this.messageVisible = true;
 
  }
  ngOnInit(): void {
    this.startCountAnimation(this.totalClients, 1);
    this.startCountAnimation(this.totalBureaux, 2);
    this.startCountAnimation(this.totalVillges, 3);
    this.startCountAnimation(this.totalLignes, 4);


  }

  startCountAnimation(total : number, id : number): void {
    const animationDuration = 2000; // Durée de l'animation en millisecondes
    const incrementStep = Math.ceil(total / (animationDuration / 50)); // Incrément à chaque itération

    let currentCount = 0;
    const incrementCount = () => {
      if (currentCount < total) {
        currentCount += incrementStep;
        if (currentCount > total) {
          currentCount = total;
        }
        if(id== 1)
          this.numClients = currentCount;
        if(id==2)
          this.numBureaux = currentCount
        if(id==3)
          this.numVillages = currentCount
        if(id==4)
          this.numLignes = currentCount
        setTimeout(incrementCount, 50); // Appel récursif avec un délai de 50ms entre chaque itération
      }
    };

    setTimeout(incrementCount, 50);
  }
  infos = [{
    "icone" : "bi-box-arrow-in-down-left",
    "nom": "Abonnement",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "bi-x-circle",
    "nom": "Résiliation",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "bi-basket",
    "nom": "Achat de code",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "bi-building-fill-add",
    "nom": "Ouverture Point de vente",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "bi-truck",
    "nom": "Déménagement",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
  {
    "icone" : "bi-exclamation-circle",
    "nom": "Réclamation",
    "texte": "Informations supplémentaires sur le serve 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "link":""
  },
 ]
}



