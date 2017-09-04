import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopHeaderComponent} from "./components/topHeader.component";
import {MainContainerComponent} from "./components/mainContainer.component";
import BandCardComponent from "./components/bandCard.component";
import AddTaxPipe from "./pipes/addTax.pipe";
import IsBassPlayerPipe from "./pipes/isBassPlayer.pipe";
import {FormsModule} from "@angular/forms";
import StorageService from "./services/storage.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainContainerComponent,
    BandCardComponent,
    /* */
    AddTaxPipe,
    IsBassPlayerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

