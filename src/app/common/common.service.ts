
import {Injectable, Injector} from "@angular/core";
import {Http} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CommonService {
  private http : Http;
  // private httpClient : HttpClient;

  constructor(private injector : Injector, private httpClient :HttpClient) {
    this.http = injector.get(Http,  {responseType: 'json'});
    // this.httpClient = injector.get(HttpClient);
  }

  public get(url : any) {
    return this.httpClient.get(url);
  }

  public getCafeLists()  {

    const url = 'http://localhost:4200/assets/cafeLists.json';
    return this.get(url);
  }

  public getRestaurantLists()  {

    const url = 'http://localhost:4200/assets/restaurantLists.json';
    return this.get(url);
  }

}
