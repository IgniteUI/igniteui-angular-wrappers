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
var feature_1 = require("../feature");
var IgGridGroupByFeature = /** @class */ (function (_super) {
    __extends(IgGridGroupByFeature, _super);
    function IgGridGroupByFeature(el) {
        return _super.call(this, el) || this;
    }
    /**
     * Open groupby modal dialog
     */
    IgGridGroupByFeature.prototype.openGroupByDialog = function () { return; };
    ;
    /**
     * Close groupby modal dialog
     */
    IgGridGroupByFeature.prototype.closeGroupByDialog = function () { return; };
    ;
    /**
     * Render groupby modal dialog and its content
     */
    IgGridGroupByFeature.prototype.renderGroupByModalDialog = function () { return; };
    ;
    /**
     * Open layouts dropdown
     */
    IgGridGroupByFeature.prototype.openDropDown = function () { return; };
    ;
    /**
     * Close layouts dropdown
     */
    IgGridGroupByFeature.prototype.closeDropDown = function () { return; };
    ;
    /**
     * Check whether column with specified key and layout is grouped
     *
     * @param key    key of the column
     * @param layout    layout name
     */
    IgGridGroupByFeature.prototype.checkColumnIsGrouped = function (key, layout) { return; };
    ;
    /**
     * Get grouped data by value for the specific column. NOTE: Before calling this function the data(that is passed as an argument) should be sorted by colKey.
     *
     * @param data    data (sorted by colKey) that is used to get the records from.
     * @param colKey    key of the column for which grouping will be applied.
     * @param idval    value of the column by which grouping will be applied.
     */
    IgGridGroupByFeature.prototype.getGroupedData = function (data, colKey, idval) { return; };
    ;
    /**
     * Adds a column to the group by columns list, executes the group by operation and updates the view.
     */
    IgGridGroupByFeature.prototype.groupByColumns = function () { return; };
    ;
    /**
     * Groups by a column
     *
     * @param key    Column Key - group by the column with the specified key
     * @param layout    layout is an optional parameter. if set it means the grouped column is not in the root level but is a child layout column
     * @param sortingDirection    if not set it is taken from option defaultSortingDirection
     */
    IgGridGroupByFeature.prototype.groupByColumn = function (key, layout, sortingDirection) { return; };
    ;
    /**
     * Removes the specified column from the group by columns list, executes the group by operation and updates the view.
     *
     * @param key    Column Key - ungroup by the column with the specified key
     * @param layout    Layout is an optional parameter. If set it means the grouped column is not in the root level but is a child layout column.
     */
    IgGridGroupByFeature.prototype.ungroupByColumn = function (key, layout) { return; };
    ;
    /**
     * Expand group row with specified id
     *
     * @param rowId    data-id attribute of the group row in the DOM
     */
    IgGridGroupByFeature.prototype.expand = function (rowId) { return; };
    ;
    /**
     * Expand group row with specified id
     *
     * @param rowId    data-id attribute of the group row in the DOM
     */
    IgGridGroupByFeature.prototype.collapse = function (rowId) { return; };
    ;
    /**
     * Clears the group by columns list and updates the view.
     */
    IgGridGroupByFeature.prototype.ungroupAll = function () { return; };
    ;
    /**
     * Destroys the group by feature object.
     */
    IgGridGroupByFeature.prototype.destroy = function () { return; };
    ;
    IgGridGroupByFeature = __decorate([
        core_1.Directive({
            selector: 'group-by',
            inputs: ["disabled", "create", "groupByAreaVisibility", "initialExpand", "emptyGroupByAreaContent", "emptyGroupByAreaContentSelectColumns", "expansionIndicatorVisibility", "groupByLabelWidth", "labelDragHelperOpacity", "indentation", "defaultSortingDirection", "groupedColumns", "resultResponseKey", "groupedRowTextTemplate", "type", "groupByUrlKey", "groupByUrlKeyAscValue", "groupByUrlKeyDescValue", "summarySettings", "columnSettings", "expandTooltip", "collapseTooltip", "removeButtonTooltip", "modalDialogGroupByOnClick", "modalDialogGroupByButtonText", "modalDialogCaptionButtonDesc", "modalDialogCaptionButtonAsc", "modalDialogCaptionButtonUngroup", "modalDialogCaptionText", "modalDialogDropDownLabel", "modalDialogRootLevelHierarchicalGrid", "modalDialogDropDownButtonCaption", "modalDialogClearAllButtonLabel", "emptyGroupByAreaContentSelectColumnsCaption", "modalDialogDropDownWidth", "modalDialogDropDownAreaWidth", "modalDialogAnimationDuration", "modalDialogWidth", "modalDialogHeight", "modalDialogButtonApplyText", "modalDialogButtonCancelText", "useGridColumnFormatter", "persist", "groupByDialogContainment", "dialogWidget", "inherit"],
            outputs: ["groupedColumnsChanging", "groupedColumnsChanged", "modalDialogMoving", "modalDialogClosing", "modalDialogClosed", "modalDialogOpening", "modalDialogOpened", "modalDialogContentsRendering", "modalDialogContentsRendered", "modalDialogButtonApplyClick", "modalDialogButtonResetClick", "modalDialogGroupingColumn", "modalDialogGroupColumn", "modalDialogUngroupingColumn", "modalDialogUngroupColumn", "modalDialogSortGroupedColumn"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], IgGridGroupByFeature);
    return IgGridGroupByFeature;
}(feature_1.Feature));
exports.IgGridGroupByFeature = IgGridGroupByFeature;
//# sourceMappingURL=iggridgroupby.directive.js.map