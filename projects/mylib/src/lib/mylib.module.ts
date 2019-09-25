import { NgModule } from "@angular/core";
import { MylibComponent } from "./mylib.component";
import { DirectiveViewComponent } from "./components/directive-view/directive-view.component";

@NgModule({
  imports: [],
  declarations: [MylibComponent, DirectiveViewComponent],
  exports: [MylibComponent, DirectiveViewComponent]
})
export class MylibModule {}
