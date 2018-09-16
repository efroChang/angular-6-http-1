import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class HttpServerService {
    constructor(private http: Http) {}

    storeServers(servers: Array<any>) {
        return this.http.post('https://efro-ng-http.firebaseio.com/myData.json', servers);
    }
}