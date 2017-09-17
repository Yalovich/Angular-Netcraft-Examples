import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import {TopHeaderComponent} from "./components/topHeader.component";
import {MainContainerComponent} from "./components/mainContainer.component";
import addTaxPipe from "./pipes/addTax.pipe";
import ConcertPipe from "./pipes/concert.pipe";
import {BandCardComponent} from "./components/bandCard.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "./services/user.services";
import {HttpClientModule} from "@angular/common/http";
import PageNotFoundComponent from "./components/pageNotFound.component";
import {UserProfileComponent} from "./components/userProfileComponent/userProfile.component";
import {BandInfoComponent} from "./components/bandInfoComponent/bandInfo.component";

const routes = [

  { path: "profile", component: UserProfileComponent },
  { path: "band/:id", component: BandInfoComponent },
  { path: "", component: MainContainerComponent, data: {
    title: "Groove Machine | Main Page"
  }},
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainContainerComponent,
    BandCardComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    BandInfoComponent,

    addTaxPipe,
    ConcertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
