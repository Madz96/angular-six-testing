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
        MylibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
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
            { type: i0.Component, args: [{
                        selector: "lib-directive-view",
                        template: "<p>\n  input = {{input}}\n</p>",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        DirectiveViewComponent.ctorParameters = function () { return []; };
        DirectiveViewComponent.propDecorators = {
            input: [{ type: i0.Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9teWxpYi9saWIvbXlsaWIuc2VydmljZS50cyIsIm5nOi8vbXlsaWIvbGliL215bGliLmNvbXBvbmVudC50cyIsIm5nOi8vbXlsaWIvbGliL2NvbXBvbmVudHMvZGlyZWN0aXZlLXZpZXcvZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW15bGliJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG15bGliIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeWxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWRpcmVjdGl2ZS12aWV3XCIsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIGlucHV0ID0ge3tpbnB1dH19XG48L3A+YCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpbnB1dDogU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlucHV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlsaWJDb21wb25lbnQgfSBmcm9tIFwiLi9teWxpYi5jb21wb25lbnRcIjtcbmltcG9ydCB7IERpcmVjdGl2ZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2RpcmVjdGl2ZS12aWV3L2RpcmVjdGl2ZS12aWV3LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbTXlsaWJDb21wb25lbnQsIERpcmVjdGl2ZVZpZXdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTXlsaWJDb21wb25lbnQsIERpcmVjdGl2ZVZpZXdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE15bGliTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIklucHV0IiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQU9FO1NBQWlCOztvQkFMbEJBLGFBQVUsU0FBQzt3QkFDVixVQUFVLEVBQUUsTUFBTTtxQkFDbkI7Ozs7OzJCQUpEOzs7Ozs7O0FDQUE7UUFhRTtTQUFpQjs7OztRQUVqQixpQ0FBUTs7O1lBQVI7YUFDQzs7b0JBZEZDLFlBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDZDQUlUO3dCQUNELE1BQU0sRUFBRSxFQUFFO3FCQUNYOzs7OzZCQVZEOzs7Ozs7O0FDQUE7UUFZRTtTQUFnQjs7OztRQUVoQix5Q0FBUTs7O1lBQVI7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7O29CQWRGQSxZQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLGdDQUVQO3dCQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztxQkFDYjs7Ozs7NEJBRUVDLFFBQUs7O3FDQVZSOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUM7d0JBQ3RELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztxQkFDbEQ7OzBCQVJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==