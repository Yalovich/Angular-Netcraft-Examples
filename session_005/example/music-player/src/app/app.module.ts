import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopHeaderComponent} from "./components/topHeader.component";
import {MainContainerComponent} from "./components/mainContainer.component";

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
