import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comaselSite';
  showBackToTopBtn: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTopBtn = (window.pageYOffset > 200);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
