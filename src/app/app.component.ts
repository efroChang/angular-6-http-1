import { Component } from '@angular/core';
import { HttpServerService } from './http-server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movieName = this.httpServerService.fetchMovieName();    // [KEY]: This is an Observable

  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  constructor(private httpServerService: HttpServerService) {}

  public onSave() {
    this.httpServerService.storeServers(this.servers)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public onGet() {
    this.httpServerService.fetchServers()
      .subscribe(
        (serversJson: Array<any>) => this.servers = serversJson,
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
