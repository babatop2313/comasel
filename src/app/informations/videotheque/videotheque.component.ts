import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videotheque',
  templateUrl: './videotheque.component.html',
  styleUrls: ['./videotheque.component.scss']
})
export class VideothequeComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // console.log(this.videos)
  }
  videos = [
    { title: 'Vidéo 1', description: 'Description de la vidéo 1', id: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5bGmGkVKgIQ")  },
    { title: 'Vidéo 2', description: 'Description de la vidéo 2', id: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5bGmGkVKgIQ") },
    { title: 'Vidéo 3', description: 'Description de la vidéo 3', id: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5bGmGkVKgIQ") },
    { title: 'Vidéo 1', description: 'Description de la vidéo 1', id: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5bGmGkVKgIQ")  },
    { title: 'Vidéo 2', description: 'Description de la vidéo 2', id: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5bGmGkVKgIQ") },
    { title: 'Vidéo 3', description: 'Description de la vidéo 3', id: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/5bGmGkVKgIQ") },

  ];
}

