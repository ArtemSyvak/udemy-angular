import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverCreationStatus = 'No server was created';
  serverName = 'Kali Server';
  serverCreated = false;
  servers = ['Ubuntu Server', 'Debian Server'];
  username = '';
  logs = [];
  constructor() {}
  addLog() {
    this.logs.push(new Date());
  }
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
