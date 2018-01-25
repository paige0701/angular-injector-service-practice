import {Component, ElementRef, Injector} from "@angular/core";
import {AppService} from "./app.service";
import {Router} from "@angular/router";

@Component({
  selector : 'app-edit',
  templateUrl: './edit.component.html'

})
export class EditComponent {

  public editName : string = '';

  protected router: Router;

  constructor(private appService : AppService,
              protected elementRef: ElementRef,
              protected injector: Injector) {
    this.router = injector.get(Router);

  }

  public updateName() : void {

    if (this.editName === '' || this.editName.trim() === '') {
      alert('how dare you test me !!');
      this.editName = this.editName.trim();
      return;
    }

    this.appService.name = this.editName;
    this.router.navigate(['/home']);
  }

}
