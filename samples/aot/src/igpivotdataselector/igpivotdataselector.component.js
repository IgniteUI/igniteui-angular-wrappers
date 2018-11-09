"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    Object.defineProperty(IgPivotDataSelectorComponent.prototype, "dataSource", {
        set: function (value) {
            this._dataSource = value;
            var widget = jQuery(this._el).data(this._widgetName);
            if (widget) {
                jQuery(this._el)[this._widgetName]("option", "dataSource", this._dataSource);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    IgPivotDataSelectorComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Updates the data source.
     */
    IgPivotDataSelectorComponent.prototype.update = function () { return; };
    ;
    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     *                 1. Remove custom CSS classes that were added.
     *                 2. Unwrap any wrapping elements such as scrolling divs and other containers.
     *                 3. Unbind all events that were bound.
     */
    IgPivotDataSelectorComponent.prototype.destroy = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgPivotDataSelectorComponent.prototype, "dataSource", null);
    IgPivotDataSelectorComponent = __decorate([
        core_1.Component({
            selector: "ig-pivot-data-selector",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dataSource", "dataSourceOptions", "deferUpdate", "dragAndDropSettings", "dropDownParent", "disableRowsDropArea", "disableColumnsDropArea", "disableMeasuresDropArea", "disableFiltersDropArea", "customMoveValidation"],
            outputs: ["dataSelectorRendered", "dataSourceInitialized", "dataSourceUpdated", "deferUpdateChanged", "dragStart", "drag", "dragStop", "metadataDropping", "metadataDropped", "metadataRemoving", "metadataRemoved", "filterDropDownOpening", "filterDropDownOpened", "filterMembersLoaded", "filterDropDownOk", "filterDropDownClosing", "filterDropDownClosed"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgPivotDataSelectorComponent);
    return IgPivotDataSelectorComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgPivotDataSelectorComponent = IgPivotDataSelectorComponent;
//# sourceMappingURL=igpivotdataselector.component.js.map