import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {CommonModule} from "@angular/common";
import {EditComponent} from "./edit.component";
import {HomeComponent} from "./home.component";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonService} from "./common/common.service";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'edit', component: EditComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule, HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [

  ],
  providers: [AppService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
