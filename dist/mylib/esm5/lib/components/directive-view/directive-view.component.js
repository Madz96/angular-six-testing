/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { MylibService } from "../../mylib.service";
var DirectiveViewComponent = /** @class */ (function () {
    function DirectiveViewComponent(myLibService) {
        this.myLibService = myLibService;
        this.input = myLibService.getInput();
    }
    /**
     * @return {?}
     */
    DirectiveViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.input);
    };
    DirectiveViewComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-directive-view",
                    template: "<p>\n  input = {{input}}\n</p>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DirectiveViewComponent.ctorParameters = function () { return [
        { type: MylibService }
    ]; };
    return DirectiveViewComponent;
}());
export { DirectiveViewComponent };
if (false) {
    /** @type {?} */
    DirectiveViewComponent.prototype.input;
    /** @type {?} */
    DirectiveViewComponent.prototype.myLibService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXlsaWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9kaXJlY3RpdmUtdmlldy9kaXJlY3RpdmUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFZakQsZ0NBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGdDQUVQO29CQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFSUSxZQUFZOztpQ0FEckI7O1NBVWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE15bGliU2VydmljZSB9IGZyb20gXCIuLi8uLi9teWxpYi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItZGlyZWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGU6IGA8cD5cbiAgaW5wdXQgPSB7e2lucHV0fX1cbjwvcD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlucHV0OiBTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBteUxpYlNlcnZpY2U6IE15bGliU2VydmljZSkge1xuICAgIHRoaXMuaW5wdXQgPSBteUxpYlNlcnZpY2UuZ2V0SW5wdXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQpO1xuICB9XG59XG4iXX0=