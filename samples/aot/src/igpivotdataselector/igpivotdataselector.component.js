"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var igcontrolbase_1 = require("../igcontrolbase/igcontrolbase");
var IgPivotDataSelectorComponent = /** @class */ (function (_super) {
    __extends(IgPivotDataSelectorComponent, _super);
    function IgPivotDataSelectorComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgPivotDataSelectorComponent.prototype.option = function () { return; };
    ;
    IgPivotDataSelectorComponent.prototype.ngOnInit = function () {
        Object.defineProperty(this, "dataSource", {
            set: this.createSetter("dataSource"),
            enumerable: true,
            configurable: true
        });
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Updates the data source.
     */
    /**
         * Updates the data source.
         */
    IgPivotDataSelectorComponent.prototype.update = /**
         * Updates the data source.
         */
    function () { return; };
    ;
    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     *                 1. Remove custom CSS classes that were added.
     *                 2. Unwrap any wrapping elements such as scrolling divs and other containers.
     *                 3. Unbind all events that were bound.
     */
    /**
         * Destroy is part of the jQuery UI widget API and does the following:
         *                 1. Remove custom CSS classes that were added.
         *                 2. Unwrap any wrapping elements such as scrolling divs and other containers.
         *                 3. Unbind all events that were bound.
         */
    IgPivotDataSelectorComponent.prototype.destroy = /**
         * Destroy is part of the jQuery UI widget API and does the following:
         *                 1. Remove custom CSS classes that were added.
         *                 2. Unwrap any wrapping elements such as scrolling divs and other containers.
         *                 3. Unbind all events that were bound.
         */
    function () { return; };
    ;
    IgPivotDataSelectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "ig-pivot-data-selector",
                    template: "<ng-content></ng-content>",
                    inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dataSource", "dataSourceOptions", "deferUpdate", "dragAndDropSettings", "dropDownParent", "disableRowsDropArea", "disableColumnsDropArea", "disableMeasuresDropArea", "disableFiltersDropArea", "customMoveValidation"],
                    outputs: ["dataSelectorRendered", "dataSourceInitialized", "dataSourceUpdated", "deferUpdateChanged", "dragStart", "drag", "dragStop", "metadataDropping", "metadataDropped", "metadataRemoving", "metadataRemoved", "filterDropDownOpening", "filterDropDownOpened", "filterMembersLoaded", "filterDropDownOk", "filterDropDownClosing", "filterDropDownClosed"]
                },] },
    ];
    /** @nocollapse */
    IgPivotDataSelectorComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: core_1.IterableDiffers, },
        { type: core_1.KeyValueDiffers, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    return IgPivotDataSelectorComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgPivotDataSelectorComponent = IgPivotDataSelectorComponent;
//# sourceMappingURL=igpivotdataselector.component.js.map