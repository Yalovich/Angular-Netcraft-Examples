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
import LazyLoadDirective from "./directives/lazyLoad.directive";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import BandsService from "./services/bands.service";

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainContainerComponent,
    BandCardComponent,

    addTaxPipe,
    ConcertPipe,

    LazyLoadDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsesrService,
    BandsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
