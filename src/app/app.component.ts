import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // serverCreationStatus = 'No server was created';
  // serverName = 'Test server';
  username = '';
  constructor() {}

  // onCreateServer() {
  //   this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  // }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
