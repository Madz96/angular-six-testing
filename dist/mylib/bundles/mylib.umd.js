(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('dist/mylib/mylib')) :
    typeof define === 'function' && define.amd ? define('mylib', ['exports', '@angular/core', 'dist/mylib/mylib'], factory) :
    (factory((global.mylib = {}),global.ng.core,null));
}(this, (function (exports,i0,mylib) { 'use strict';

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
                        exports: [MylibComponent, DirectiveViewComponent],
                        providers: [mylib.MylibService]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teWxpYi9saWIvbXlsaWIuc2VydmljZS50cyIsIm5nOi8vbXlsaWIvbGliL215bGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXlsaWIvbGliL2NvbXBvbmVudHMvZGlyZWN0aXZlLXZpZXcvZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIE15bGliU2VydmljZSB7XG4gIGlucHV0OiBTdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXRJbnB1dChpbnB1dCkge1xuICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgfVxuXG4gIGdldElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXlsaWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbXlsaWIgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeWxpYlNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vbXlsaWIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWRpcmVjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGlucHV0ID0ge3tpbnB1dH19XG48L3A+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnB1dDogU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbXlMaWJTZXJ2aWNlOiBNeWxpYlNlcnZpY2UpIHtcbiAgICB0aGlzLmlucHV0ID0gbXlMaWJTZXJ2aWNlLmdldElucHV0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlsaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teWxpYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IERpcmVjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpcmVjdGl2ZS12aWV3L2RpcmVjdGl2ZS12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXlsaWJTZXJ2aWNlIH0gZnJvbSBcImRpc3QvbXlsaWIvbXlsaWJcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW015bGliQ29tcG9uZW50LCBEaXJlY3RpdmVWaWV3Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW015bGliQ29tcG9uZW50LCBEaXJlY3RpdmVWaWV3Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTXlsaWJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBNeWxpYk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIk15bGliU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBZ0I7Ozs7O1FBRWhCLCtCQUFROzs7O1lBQVIsVUFBUyxLQUFLO2dCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3BCOzs7O1FBRUQsK0JBQVE7OztZQUFSO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQjs7b0JBYkZBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzJCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixpQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDZDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzZCQVZEOzs7Ozs7O0FDQUE7UUFhRSxnQ0FBb0IsWUFBMEI7WUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEM7Ozs7UUFFRCx5Q0FBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7O29CQWhCRkEsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxnQ0FFUDt3QkFDSCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7O3dCQVJRLFlBQVk7OztxQ0FEckI7Ozs7Ozs7QUNBQTs7OztvQkFLQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQzt3QkFDdEQsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLHNCQUFzQixDQUFDO3dCQUNqRCxTQUFTLEVBQUUsQ0FBQ0Msa0JBQVksQ0FBQztxQkFDMUI7OzBCQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==