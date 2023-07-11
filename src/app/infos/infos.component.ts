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

  // ngAfterViewInit() {
  //   this.messageVisible = true;
 
  // }
  // count: number = 0;
  // targetCount: number = 100;
  duration: number = 2000; // Durée de l'animation en millisecondes

  ngAfterViewInit(){
    this.startCountAnimation(this.totalClients, 1);
    this.startCountAnimation(this.totalBureaux, 2);
    this.startCountAnimation(this.totalVillges, 3);
    this.startCountAnimation(this.totalLignes, 4);

// this.startCountAnimation2()
  }
  startCountAnimation(targetCount : number, id: number) {
    const increment = targetCount / (this.duration / 10); // Calcule l'incrément par intervalle de 10ms
    let currentCount = 0;
  
    const interval = setInterval(() => {
      currentCount += increment;
      if(id== 1)
          this.numClients = Math.floor(currentCount);;
        if(id==2)
          this.numBureaux = Math.floor(currentCount);
        if(id==3)
          this.numVillages = Math.floor(currentCount);
        if(id==4)
          this.numLignes = Math.floor(currentCount);
      // this.count = Math.floor(currentCount);
  
      if (currentCount >= targetCount) {
        // this.count = targetCount;
        if(id== 1)
          this.numClients = targetCount;
        if(id==2)
          this.numBureaux = targetCount
        if(id==3)
          this.numVillages = targetCount
        if(id==4)
          this.numLignes = targetCount
        clearInterval(interval);
      }
    }, 100);
  }
 
  infos = [{
    "icone" : "bi-box-arrow-in-down-left",
    "nom": "Abonnement",
    "texte": "Pour s'abonner le client devra : Se rendre à son agence d'appartenance.",
    "link":""
  },
  {
    "icone" : "bi-x-circle",
    "nom": "Résiliation",
    "texte": "Le client a 2 options lors d’une résiliation : Résilier et laisser le compteur sur place ou le déposer à son agence.",
    "link":""
  },
  {
    "icone" : "bi-basket",
    "nom": "Achat de code",
    "texte": "Les achats de code se font dans les gences et dans les points de ventes.",
    "link":""
  },
  {
    "icone" : "bi-building-fill-add",
    "nom": "Ouverture Point de vente",
    "texte": "Rendez-vous au siége pour plus d'informations.",
    "link":""
  },
  {
    "icone" : "bi-truck",
    "nom": "Déménagement",
    "texte": "Lors d’un déménagement, le client doit impérativement résilier son contrat d’abonnement ...",
    "link":""
  },
  {
    "icone" : "bi-exclamation-circle",
    "nom": "Réclamation",
    "texte": "Pour toutes vos réclamations, merci de nous appeler ou de vous rendre à l'agence la plus proche.",
    "link":""
  },
 ]

}

// startCountAnimation(total : number, id : number): void {
//   const animationDuration = 2000; // Durée de l'animation en millisecondes
//   const incrementStep = Math.ceil(total / (animationDuration / 50)); // Incrément à chaque itération

//   let currentCount = 0;
//   const incrementCount = () => {
    
//     if (currentCount < total) {
//       currentCount += incrementStep;
//       if (currentCount > total) {
//         currentCount = total;
//       }
//       if(id== 1)
//         this.numClients = currentCount;
//       if(id==2)
//         this.numBureaux = currentCount
//       if(id==3)
//         this.numVillages = currentCount
//       if(id==4)
//         this.numLignes = currentCount
//       setTimeout(incrementCount, 50); // Appel récursif avec un délai de 50ms entre chaque itération
//     }
//   };

//   setTimeout(incrementCount, 100);
// }