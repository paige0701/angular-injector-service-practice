import {Component} from "@angular/core";
import {AppService} from "./app.service";

@Component({
  selector : 'app-edit',
  templateUrl: './edit.component.html'

})
export class EditComponent {

  public editName : string = '';

  constructor(private appService : AppService) {

  }

  public updateName() : void {
    this.appService.name = this.editName;
  }

}
