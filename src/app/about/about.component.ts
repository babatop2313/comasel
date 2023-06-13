import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent  implements AfterViewInit{
  showImage: boolean = false;
  ngAfterViewInit() {
    this.showImageFunction(); // Appelez votre fonction ici
  }

  showImageFunction() {
    this.showImage = true
  }
  
}
