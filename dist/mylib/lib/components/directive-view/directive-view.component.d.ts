import { OnInit } from "@angular/core";
import { MylibService } from "../../mylib.service";
export declare class DirectiveViewComponent implements OnInit {
    private myLibService;
    input: String;
    constructor(myLibService: MylibService);
    ngOnInit(): void;
}
