import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopHeaderComponent} from "./components/topHeader.component";
import {MainContainerComponent} from "./components/mainContainer.component";
import addTaxPipe from "./pipes/addTax.pipe";
import ConcertPipe from "./pipes/concert.pipe";
import {BandCardComponent} from "./components/bandCard.component";
import {FormsModule} from "@angular/forms";
import {UsesrService} from "./services/user.services";

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainContainerComponent,
    BandCardComponent,

    addTaxPipe,
    ConcertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsesrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
