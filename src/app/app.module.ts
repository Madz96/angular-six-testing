import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MylibModule } from "mylib";

import { AppComponent } from "./app.component";
import { MainComponent } from "./components/main/main.component";

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, MylibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
