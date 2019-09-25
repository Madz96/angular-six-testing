import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { MylibModule } from "mylib";
import { MylibService } from "mylib";
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, MylibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
