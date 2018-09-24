import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedPath = 'recipe';
  onNavigate(e: string) {
    this.loadedPath = e;
  }
  constructor() {}
}
