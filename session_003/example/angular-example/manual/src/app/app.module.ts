import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TopHeaderComponent } from "./components/topHeader.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TopHeaderComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {




}