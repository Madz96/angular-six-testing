import { Injectable, Component, NgModule, Input, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MylibService = /** @class */ (function () {
    function MylibService() {
    }
    MylibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
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
    function DirectiveViewComponent() {
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
    DirectiveViewComponent.ctorParameters = function () { return []; };
    DirectiveViewComponent.propDecorators = {
        input: [{ type: Input }]
    };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bGliL2xpYi9teWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvY29tcG9uZW50cy9kaXJlY3RpdmUtdmlldy9kaXJlY3RpdmUtdmlldy5jb21wb25lbnQudHMiLCJuZzovL215bGliL2xpYi9teWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNeWxpYlNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXlsaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXlsaWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItZGlyZWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGU6IGA8cD5cbiAgaW5wdXQgPSB7e2lucHV0fX1cbjwvcD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlucHV0OiBTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeWxpYkNvbXBvbmVudCB9IGZyb20gXCIuL215bGliLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGlyZWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGlyZWN0aXZlLXZpZXcvZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtNeWxpYkNvbXBvbmVudCwgRGlyZWN0aXZlVmlld0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeWxpYkNvbXBvbmVudCwgRGlyZWN0aXZlVmlld0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7dUJBSkQ7Ozs7Ozs7QUNBQTtJQWFFO0tBQWlCOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw2Q0FJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozt5QkFWRDs7Ozs7OztBQ0FBO0lBWUU7S0FBZ0I7Ozs7SUFFaEIseUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekI7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsZ0NBRVA7b0JBQ0gsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozt3QkFFRSxLQUFLOztpQ0FWUjs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsRUFBRTtvQkFDWCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztpQkFDbEQ7O3NCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=