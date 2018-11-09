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
var IgPivotGridComponent = /** @class */ (function (_super) {
    __extends(IgPivotGridComponent, _super);
    function IgPivotGridComponent(el, renderer, differs, kvalDiffers, cdr) {
        return _super.call(this, el, renderer, differs, kvalDiffers, cdr) || this;
    }
    IgPivotGridComponent.prototype.option = function () { return; };
    ;
    Object.defineProperty(IgPivotGridComponent.prototype, "dataSource", {
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
    IgPivotGridComponent.prototype.ngOnInit = function () {
        if (this._dataSource === null || this._dataSource === undefined) {
            this._dataSource = this.options["dataSource"];
        }
        if (!this.options["dataSource"] && this._dataSource) {
            this.options["dataSource"] = this._dataSource;
        }
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * Returns the igGrid instance used to render the OLAP data.
     */
    IgPivotGridComponent.prototype.grid = function () { return; };
    ;
    /**
     * Triggers an update on the data source and the igPivotGrid.
     */
    IgPivotGridComponent.prototype.updateGrid = function () { return; };
    ;
    /**
     * Expands a member from the data source and returns true if the expand succeeds. If the data source has a pending update, the method will return false. Note that igPivotGrid to will display the expanded result after the data source is updated.
     *
     * @param tupleLocation The name of the parent axis - 'columnAxis' or 'rowAxis'.
     * @param tupleIndex The index of the containing tuple. This index should correspond to the position of the tuple in the original unsorted result of the data source.
     * @param memberIndex The index of the member in the tuple. This index should correspond to the position of the member in the original unsorted result of the data source.
     * @param shouldUpdate A flag indicating whether the data source should be updated after the expand.
     */
    IgPivotGridComponent.prototype.expandTupleMember = function (tupleLocation, tupleIndex, memberIndex, shouldUpdate) { return; };
    ;
    /**
     * Collapses a member from the data source and returns true if the collapse succeeds. If the data source has a pending update, the method will return false. Note that igPivotGrid to will display the expanded result after the data source is updated.
     *
     * @param tupleLocation The name of the parent axis - 'columnAxis' or 'rowAxis'.
     * @param tupleIndex The index of the containing tuple. This index should correspond to the position of the tuple in the original unsorted result of the data source.
     * @param memberIndex The index of the member in the tuple. This index should correspond to the position of the member in the original unsorted result of the data source.
     * @param shouldUpdate A flag indicating whether the data source should be updated after the expand.
     */
    IgPivotGridComponent.prototype.collapseTupleMember = function (tupleLocation, tupleIndex, memberIndex, shouldUpdate) { return; };
    ;
    /**
     * Returns an array with the applied sort directions on the igPivotGrid's columns. The returned array contains objects with the following properties:
     *             memberNames: The names of the members in the tuple.
     *             tupleIndex: The index of the tuple on the column axis in the original unsorted result.
     *             sortDirection: The direction of the sort - ascending or descending.
     */
    IgPivotGridComponent.prototype.appliedColumnSortDirections = function () { return; };
    ;
    /**
     * Returns an array with the applied level sort direction items, which were used for the sorting of the header cells. The returned array contains objects with the following properties:
     *             levelUniqueName: Specifies the unique name of the level, which was sorted.
     *             sortDirection: The direction of the header sort - ascending or descending.
     */
    IgPivotGridComponent.prototype.appliedLevelSortDirections = function () { return; };
    ;
    /**
     * Destroy is part of the jQuery UI widget API and does the following:
     *             1. Remove custom CSS classes that were added.
     *             2. Unwrap any wrapping elements such as scrolling divs and other containers.
     *             3. Unbind all events that were bound.
     */
    IgPivotGridComponent.prototype.destroy = function () { return; };
    ;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IgPivotGridComponent.prototype, "dataSource", null);
    IgPivotGridComponent = __decorate([
        core_1.Component({
            selector: "ig-pivot-grid",
            template: "<ng-content></ng-content>",
            inputs: ["widgetId", "options", "changeDetectionInterval", "disabled", "create", "width", "height", "dataSource", "dataSourceOptions", "deferUpdate", "isParentInFrontForColumns", "isParentInFrontForRows", "compactColumnHeaders", "compactRowHeaders", "rowHeadersLayout", "compactColumnHeaderIndentation", "compactRowHeaderIndentation", "rowHeaderLinkGroupIndentation", "treeRowHeaderIndentation", "defaultRowHeaderWidth", "allowSorting", "firstSortDirection", "allowHeaderRowsSorting", "allowHeaderColumnsSorting", "levelSortDirections", "defaultLevelSortBehavior", "firstLevelSortDirection", "gridOptions", "dragAndDropSettings", "dropDownParent", "disableRowsDropArea", "disableColumnsDropArea", "disableMeasuresDropArea", "disableFiltersDropArea", "hideRowsDropArea", "hideColumnsDropArea", "hideMeasuresDropArea", "hideFiltersDropArea", "customMoveValidation"],
            outputs: ["dataSourceInitialized", "dataSourceUpdated", "pivotGridHeadersRendered", "pivotGridRendered", "tupleMemberExpanding", "tupleMemberExpanded", "tupleMemberCollapsing", "tupleMemberCollapsed", "sorting", "sorted", "headersSorting", "headersSorted", "dragStart", "drag", "dragStop", "metadataDropping", "metadataDropped", "metadataRemoving", "metadataRemoved", "filterDropDownOpening", "filterDropDownOpened", "filterMembersLoaded", "filterDropDownOk", "filterDropDownClosing", "filterDropDownClosed"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, core_1.IterableDiffers, core_1.KeyValueDiffers, core_1.ChangeDetectorRef])
    ], IgPivotGridComponent);
    return IgPivotGridComponent;
}(igcontrolbase_1.IgControlBase));
exports.IgPivotGridComponent = IgPivotGridComponent;
//# sourceMappingURL=igpivotgrid.component.js.map