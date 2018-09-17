import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpServerService {
    private url: string = 'https://efro-ng-http.firebaseio.com/myData.json';

    constructor(private http: Http) {}

    storeServers(servers: Array<any>) {
        // return this.http.post(this.url, servers);
        return this.http.put(this.url, servers);    // Use PUT, so it won't keep adding data
    }

    fetchServers() {
        return this.http.get(this.url)
            .map(
                (response: Response) => {
                    let jsonData = response.json();
                    return jsonData;
                }
            );
    }
}