import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppService} from "./app.service";
import {CommonModule} from "@angular/common";
import {EditComponent} from "./edit.component";
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot( [{ path: 'edit', component : EditComponent}])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
