import { Component, OnInit, Input } from "@angular/core";
import { MylibService } from "../../mylib.service";

@Component({
  selector: "lib-directive-view",
  templateUrl: "./directive-view.component.html",
  styleUrls: ["./directive-view.component.css"]
})
export class DirectiveViewComponent implements OnInit {
  input: String;

  constructor(private myLibService: MylibService) {
    this.input = myLibService.getInput();
  }

  ngOnInit() {
    console.log(this.input);
  }
}
