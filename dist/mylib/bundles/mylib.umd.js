(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mylib', ['exports', '@angular/core'], factory) :
    (factory((global.mylib = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MylibService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: "root"
                    },] },
        ];
        /** @nocollapse */
        MylibService.ctorParameters = function () { return []; };
        /** @nocollapse */ MylibService.ngInjectableDef = i0.defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });
        return MylibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MylibComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var DirectiveViewComponent = (function () {
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
            { type: i0.Component, args: [{
                        selector: "lib-directive-view",
                        template: "<p>\n  input = {{input}}\n</p>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DirectiveViewComponent.ctorParameters = function () {
            return [
                { type: MylibService }
            ];
        };
        return DirectiveViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MylibModule = (function () {
        function MylibModule() {
        }
        MylibModule.decorators = [
            { type: i0.NgModule, args: [{
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

    exports.MylibService = MylibService;
    exports.MylibComponent = MylibComponent;
    exports.MylibModule = MylibModule;
    exports.DirectiveViewComponent = DirectiveViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teWxpYi9saWIvbXlsaWIuc2VydmljZS50cyIsIm5nOi8vbXlsaWIvbGliL215bGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXlsaWIvbGliL2NvbXBvbmVudHMvZGlyZWN0aXZlLXZpZXcvZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE15bGliU2VydmljZSB7XG4gIGlucHV0OiBTdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXRJbnB1dChpbnB1dCkge1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgfVxuXG4gIGdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXlsaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXlsaWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeWxpYlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbXlsaWIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWRpcmVjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGlucHV0ID0ge3tpbnB1dH19XG48L3A+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnB1dDogU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlMaWJTZXJ2aWNlOiBNeWxpYlNlcnZpY2UpIHtcbiAgICB0aGlzLmlucHV0ID0gbXlMaWJTZXJ2aWNlLmdldElucHV0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlsaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teWxpYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IERpcmVjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpcmVjdGl2ZS12aWV3L2RpcmVjdGl2ZS12aWV3LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbTXlsaWJDb21wb25lbnQsIERpcmVjdGl2ZVZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTXlsaWJDb21wb25lbnQsIERpcmVjdGl2ZVZpZXdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFnQjs7Ozs7UUFFaEIsK0JBQVE7Ozs7WUFBUixVQUFTLEtBQUs7Z0JBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7Ozs7UUFFRCwrQkFBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25COztvQkFiRkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7MkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLGlDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUsNkNBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7NkJBVkQ7Ozs7Ozs7QUNBQTtRQWFFLGdDQUFvQixZQUEwQjtZQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztZQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN0Qzs7OztRQUVELHlDQUFROzs7WUFBUjtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6Qjs7b0JBaEJGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLGdDQUVQO3dCQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs7d0JBUlEsWUFBWTs7O3FDQURyQjs7Ozs7OztBQ0FBOzs7O29CQUlDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQUU7d0JBQ1gsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLHNCQUFzQixDQUFDO3dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUM7cUJBQ2xEOzswQkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=