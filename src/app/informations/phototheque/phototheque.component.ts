import { Component } from '@angular/core';

@Component({
  selector: 'app-phototheque',
  templateUrl: './phototheque.component.html',
  styleUrls: ['./phototheque.component.scss']
})
export class PhotothequeComponent {
  photos = [
    { title: 'Photo 1', url: 'assets/images/1.jpg' },
    { title: 'Photo 2', url: 'assets/images/2.jpg' },
    { title: 'Photo 3', url: 'assets/images/3.jpg' },
    { title: 'Photo 1', url: 'assets/images/4.jpg' },
    { title: 'Photo 2', url: 'assets/images/5.jpg' },
    { title: 'Photo 3', url: 'assets/images/6.jpg' },
    // Ajoutez ici les autres photos
  ];
}
