import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  scrolled: boolean = false;
  distance: any = 82;

  onScroll(e: any) {
    const element = document.getElementById('scrollable');

    this.distance = element?.getBoundingClientRect().top;

    if (this.distance < 82) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
