
import {Component, OnInit} from "@angular/core";
import {AppService} from "./app.service";
import {CommonService} from "./common/common.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector : 'app-cafe',
  templateUrl: './cafe.component.html'

})
export class CafeComponent implements OnInit{

  public cafeLists : any;

  constructor(private appService : AppService, private commonService : CommonService, private http : HttpClient) {

  }

  public ngOnInit() {
    this.commonService.getCafeLists().subscribe((result) => {
      this.cafeLists = result;
      console.info('cafe == ', this.cafeLists);
    }, error => {
      console.info('error ==> ', error);
    });
  }
}

