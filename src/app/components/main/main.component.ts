import { Component, OnInit, Injectable } from "@angular/core";
import { MylibService } from "node_modules/mylib";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  show = true;
  btn = "Hide";

  constructor() {}

  ngOnInit() {}

  change() {
    this.show = !this.show;

    if (this.show) this.btn = "Hide";
    else this.btn = "Show";
  }
}
