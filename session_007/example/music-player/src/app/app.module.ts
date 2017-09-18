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
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./components/profileComponent/profile.component";
import {NotFoundComponent} from "./components/notFoundComponent/notFound.component";

const routes = [
  { path: "main", component: MainContainerComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MainContainerComponent,
    BandCardComponent,
    ProfileComponent,
    NotFoundComponent,

    addTaxPipe,
    ConcertPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsesrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
