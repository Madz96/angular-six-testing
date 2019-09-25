import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MylibService {
    constructor() { }
    /**
     * @param {?} input
     * @return {?}
     */
    setInput(input) {
        this.input = input;
    }
    /**
     * @return {?}
     */
    getInput() {
        return this.input;
    }
}
MylibService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] },
];
/** @nocollapse */
MylibService.ctorParameters = () => [];
/** @nocollapse */ MylibService.ngInjectableDef = defineInjectable({ factory: function MylibService_Factory() { return new MylibService(); }, token: MylibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MylibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MylibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-mylib',
                template: `
    <p>
      mylib works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
MylibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class DirectiveViewComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MylibModule {
}
MylibModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [MylibComponent, DirectiveViewComponent],
                exports: [MylibComponent, DirectiveViewComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MylibService, MylibComponent, MylibModule, DirectiveViewComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlsaWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL215bGliL2xpYi9teWxpYi5zZXJ2aWNlLnRzIiwibmc6Ly9teWxpYi9saWIvbXlsaWIuY29tcG9uZW50LnRzIiwibmc6Ly9teWxpYi9saWIvY29tcG9uZW50cy9kaXJlY3RpdmUtdmlldy9kaXJlY3RpdmUtdmlldy5jb21wb25lbnQudHMiLCJuZzovL215bGliL2xpYi9teWxpYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJTZXJ2aWNlIHtcbiAgaW5wdXQ6IFN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNldElucHV0KGlucHV0KSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICB9XG5cbiAgZ2V0SW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBteWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE15bGliU2VydmljZSB9IGZyb20gXCIuLi8uLi9teWxpYi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItZGlyZWN0aXZlLXZpZXdcIixcbiAgdGVtcGxhdGU6IGA8cD5cbiAgaW5wdXQgPSB7e2lucHV0fX1cbjwvcD5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlucHV0OiBTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBteUxpYlNlcnZpY2U6IE15bGliU2VydmljZSkge1xuICAgIHRoaXMuaW5wdXQgPSBteUxpYlNlcnZpY2UuZ2V0SW5wdXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeWxpYkNvbXBvbmVudCB9IGZyb20gXCIuL215bGliLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGlyZWN0aXZlVmlld0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZGlyZWN0aXZlLXZpZXcvZGlyZWN0aXZlLXZpZXcuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtNeWxpYkNvbXBvbmVudCwgRGlyZWN0aXZlVmlld0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtNeWxpYkNvbXBvbmVudCwgRGlyZWN0aXZlVmlld0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTXlsaWJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FLGlCQUFnQjs7Ozs7SUFFaEIsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7OztZQWJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBYUUsaUJBQWlCOzs7O0lBRWpCLFFBQVE7S0FDUDs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7R0FJVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTthQUNYOzs7Ozs7Ozs7QUNWRDs7OztJQWFFLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7S0FFUDtnQkFDSCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7OztZQVJRLFlBQVk7Ozs7Ozs7QUNEckI7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFBRTtnQkFDWCxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQzthQUNsRDs7Ozs7Ozs7Ozs7Ozs7OyJ9