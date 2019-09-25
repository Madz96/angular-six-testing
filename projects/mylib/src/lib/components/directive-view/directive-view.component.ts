import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lib-directive-view",
  templateUrl: "./directive-view.component.html",
  styleUrls: ["./directive-view.component.css"]
})
export class DirectiveViewComponent implements OnInit {
  @Input() input: String;

  constructor() {}

  ngOnInit() {}
}
