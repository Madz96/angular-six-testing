import { NgModule } from "@angular/core";
import { MylibComponent } from "./mylib.component";
import { DirectiveViewComponent } from "./components/directive-view/directive-view.component";
import { MylibService } from "dist/mylib/mylib";

@NgModule({
  imports: [],
  declarations: [MylibComponent, DirectiveViewComponent],
  exports: [MylibComponent, DirectiveViewComponent],
  providers: [MylibService]
})
export class MylibModule {}
