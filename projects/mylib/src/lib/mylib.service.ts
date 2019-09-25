import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MylibService {
  input: String;
  constructor() {}

  setInput(input) {
    this.input = input;
  }

  getInput() {
    return this.input;
  }
}
