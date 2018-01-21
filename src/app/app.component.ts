import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // 이름
  public name : string = '';

  title = 'app';


  constructor(private appService : AppService) {

  }


}
