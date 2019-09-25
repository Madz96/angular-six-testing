/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { MylibService } from "../../mylib.service";
export class DirectiveViewComponent {
    /**
     * @param {?} myLibService
     */
    constructor(myLibService) {
        this.myLibService = myLibService;
        this.input = myLibService.getInput();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.input);
    }
}
DirectiveViewComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-directive-view",
                template: `<p>
  input = {{input}}
</p>`,
                styles: [``]
            },] },
];
/** @nocollapse */
DirectiveViewComponent.ctorParameters = () => [
    { type: MylibService }
];
if (false) {
    /** @type {?} */
    DirectiveViewComponent.prototype.input;
    /** @type {?} */
    DirectiveViewComponent.prototype.myLibService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXlsaWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kaXJlY3RpdmUtdmlldy9kaXJlY3RpdmUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVNuRCxNQUFNOzs7O0lBR0osWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOztLQUVQO2dCQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzs7O1lBUlEsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeWxpYlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbXlsaWIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWRpcmVjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGlucHV0ID0ge3tpbnB1dH19XG48L3A+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnB1dDogU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlMaWJTZXJ2aWNlOiBNeWxpYlNlcnZpY2UpIHtcbiAgICB0aGlzLmlucHV0ID0gbXlMaWJTZXJ2aWNlLmdldElucHV0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIl19