import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibService = /** @class */ (function () {
    function MylibService() {
    }
    /**
     * @param {?} input
     * @return {?}
     */
    MylibService.prototype.setInput = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        this.input = input;
    };
    /**
     * @return {?}
     */
    MylibService.prototype.getInput = /**
     * @return {?}
     */
    function () {
        return this.input;
    };
    MylibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] },
    ];
    /** @nocollapse */
    MylibService.ctorParameters = function () { return []; };
    /** @nocollapse */ MylibService.ngInjectableDef = defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });
    return MylibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibComponent = /** @class */ (function () {
    function MylibComponent() {
    }
    /**
     * @return {?}
     */
    MylibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MylibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-mylib',
                    template: "\n    <p>\n      mylib works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    MylibComponent.ctorParameters = function () { return []; };
    return MylibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibModule = /** @class */ (function () {
    function MylibModule() {
    }
    MylibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [MylibComponent, DirectiveViewComponent],
                    exports: [MylibComponent, DirectiveViewComponent]
                },] },
    ];
    return MylibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MylibService, MylibComponent, MylibModule, DirectiveViewComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bGliL2xpYi9teWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvY29tcG9uZW50cy9kaXJlY3RpdmUtdmlldy9kaXJlY3RpdmUtdmlldy5jb21wb25lbnQudHMiLCJuZzovL215bGliL2xpYi9teWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJTZXJ2aWNlIHtcbiAgaW5wdXQ6IFN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldElucHV0KGlucHV0KSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICB9XG5cbiAgZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE15bGliU2VydmljZSB9IGZyb20gXCIuLi8uLi9teWxpYi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItZGlyZWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGU6IGA8cD5cbiAgaW5wdXQgPSB7e2lucHV0fX1cbjwvcD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlucHV0OiBTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBteUxpYlNlcnZpY2U6IE15bGliU2VydmljZSkge1xuICAgIHRoaXMuaW5wdXQgPSBteUxpYlNlcnZpY2UuZ2V0SW5wdXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeWxpYkNvbXBvbmVudCB9IGZyb20gXCIuL215bGliLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGlyZWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGlyZWN0aXZlLXZpZXcvZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtNeWxpYkNvbXBvbmVudCwgRGlyZWN0aXZlVmlld0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeWxpYkNvbXBvbmVudCwgRGlyZWN0aXZlVmlld0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWdCOzs7OztJQUVoQiwrQkFBUTs7OztJQUFSLFVBQVMsS0FBSztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COztnQkFiRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt1QkFKRDs7Ozs7OztBQ0FBO0lBYUU7S0FBaUI7Ozs7SUFFakIsaUNBQVE7OztJQUFSO0tBQ0M7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLDZDQUlUO29CQUNELE1BQU0sRUFBRSxFQUFFO2lCQUNYOzs7O3lCQVZEOzs7Ozs7O0FDQUE7SUFhRSxnQ0FBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN6Qjs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZ0NBRVA7b0JBQ0gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQVJRLFlBQVk7O2lDQURyQjs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztpQkFDbEQ7O3NCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=