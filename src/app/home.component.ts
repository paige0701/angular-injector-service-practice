import {Component, OnInit} from "@angular/core";
import {AppService} from "./app.service";
import {CommonService} from "./common/common.service";
import {HttpModule} from "@angular/http";
import {HttpClient} from "@angular/common/http";

@Component({
  selector : 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit{

  public restaurants : any;

  constructor(private appService : AppService, private commonService : CommonService, private http : HttpClient) {

  }

  public ngOnInit() {
    this.commonService.getRestaurantLists().subscribe((result) => {
      this.restaurants = result;
    }, error => {
      console.info('error ==> ', error);
    });
  }
}

